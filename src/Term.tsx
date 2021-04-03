import React, { createRef, useEffect, useRef, memo, MutableRefObject } from 'react'
import { typer } from './typical'

type Line = {
	speed: number
	line: Array<string | number>
	then?: () => void
}
type TermProps = {
	lines: Line[]
}

const Term: React.FC<TermProps> = (props: TermProps) => {
	const refs: MutableRefObject<MutableRefObject<null>[]> = useRef([])
	const { lines } = props
	if (refs.current.length !== lines.length) {
		const rnext = [...refs.current]
		for (let ii = 0; ii < lines.length; ii++) {
			if (!rnext[ii]) {
				rnext[ii] = createRef()
			}
		}
		refs.current = rnext
	}
	useEffect(() => {
		const prom = async () => {
			const rc = refs.current
			for (let ii = 0; ii < lines.length; ii++) {
				const line = lines[ii]
				if (!rc[ii]) {
					rc[ii] = createRef()
				}
				const ref = rc[ii].current
				try {
					await typer(ref, line.speed, ...line.line)
					if (line.then) {
						line.then()
					}
				} catch (err) {
					console.warn('line failed:', err)
					throw err
				}
			}
		}
		prom().catch(err => {
			console.warn('typing failed:', err)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<>
			{refs.current.map((ref, ii) => (
				<pre
					key={`line-${ii}`}
					ref={ref}
					className='text-white text-lg md:text-xl whitespace-pre-wrap'
				/>
			))}
		</>
	)
}

export default memo(Term)
