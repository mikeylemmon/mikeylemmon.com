import React, { createRef, useEffect, useRef, memo, MutableRefObject } from 'react'
import { typer } from './typical'

type Line = Array<string | number | (() => void) | { speed: number }>
type TermProps = {
	className: string
	lines: Line[]
}

const Term: React.FC<TermProps> = (props: TermProps) => {
	const refs: MutableRefObject<MutableRefObject<null>[]> = useRef([])
	const { className, lines } = props
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
		let typerProps = { canceled: false }
		const prom = async () => {
			const rc = refs.current
			for (let ii = 0; ii < lines.length; ii++) {
				if (typerProps.canceled) {
					return
				}
				const line = lines[ii]
				if (!rc[ii]) {
					rc[ii] = createRef()
				}
				const ref = rc[ii].current
				try {
					await typer(typerProps, ref, ...line)
				} catch (err) {
					console.warn('line failed:', err)
					throw err
				}
			}
		}
		prom().catch(err => {
			console.warn('typing failed:', err)
		})
		return () => {
			typerProps.canceled = true
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className={className}>
			{refs.current.map((ref, ii) => (
				<pre
					key={`line-${ii}`}
					ref={ref}
					className='text-white text-lg md:text-xl whitespace-pre-wrap'
				/>
			))}
		</div>
	)
}

export default memo(Term)
