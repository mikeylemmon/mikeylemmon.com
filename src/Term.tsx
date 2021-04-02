import React, { createRef, useRef, useEffect, memo, MutableRefObject } from 'react'
import { typer } from './typical'

type Line = [number, ...Array<string | number>]
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
					await typer(ref, ...line)
				} catch (err) {
					console.warn('line failed:', err)
					throw err
				}
			}
		}
		prom().catch(err => {
			console.warn('typing failed:', err)
		})
	})
	return (
		<>
			{refs.current.map((ref, ii) => (
				<pre key={`line-${ii}`} ref={ref} className='text-white text-xl' />
			))}
		</>
	)
}

export default memo(Term)
