// import React, { createRef, useEffect, useRef, memo, MutableRefObject } from 'react'
import React, { createRef, MutableRefObject } from 'react'
import { typer } from './typical'

type Line = Array<string | number | (() => void) | { speed: number }>
type TermProps = { className: string }
type TermSeq = {
	lines: Line[]
	refs: MutableRefObject<null>[]
}
type TermState = { seqs: TermSeq[] }

class Term extends React.Component<TermProps, TermState> {
	currentSeq: { canceled: boolean } | null = null

	constructor(props: TermProps) {
		super(props)
		this.state = { seqs: [] } as TermState
		console.log(`<Term> constructed`)
	}

	typeLines(lines: Line[]) {
		console.log(`<Term> Will type ${lines.length} lines`)
		this.stop()
		const seq: TermSeq = { lines, refs: [] }
		for (let ii = 0; ii < lines.length; ii++) {
			seq.refs[ii] = createRef()
		}
		this.setState((prev: TermState) => ({ seqs: [...prev.seqs, seq] }))
	}

	stop() {
		if (this.currentSeq) {
			this.currentSeq.canceled = true
			console.log(`<Term> Stopping`)
		}
	}

	componentDidMount() {
		const { seqs } = this.state
		console.log(`<Term> Did mount with ${seqs.length} seqs`)
	}

	componentDidUpdate(_: any, prevState: TermState) {
		const { seqs } = this.state
		if (prevState.seqs.length === seqs.length || seqs.length === 0) {
			console.log(`<Term> Ignoring update for ${seqs.length} seqs`)
			return
		}
		this._typeLines()
	}

	async _typeLines() {
		const typerProps = { canceled: false }
		this.currentSeq = typerProps
		const { seqs } = this.state
		const { lines, refs } = seqs[seqs.length - 1]
		console.log(`<Term> Typing ${lines.length} lines`)
		for (let ii = 0; ii < lines.length; ii++) {
			if (typerProps.canceled) {
				return
			}
			const line = lines[ii]
			const ref = refs[ii].current
			try {
				await typer(typerProps, ref, ...line)
			} catch (err) {
				console.warn('line failed:', err)
			}
		}
	}

	render() {
		const { className } = this.props
		const { seqs } = this.state
		const elems: JSX.Element[] = []
		for (let ss = 0; ss < seqs.length; ss++) {
			elems.push(
				...seqs[ss].refs.map((ref, ii) => (
					<pre
						key={`line-${ss}-${ii}`}
						ref={ref}
						className='text-white md:text-xl whitespace-pre-wrap'
					/>
				)),
			)
		}
		return <div className={className}>{elems}</div>
	}
}

// export default memo(Term)
export default Term
