// import React, { createRef, useEffect, useRef, memo, MutableRefObject } from 'react'
import React, { createRef, MutableRefObject } from 'react'
import { typer } from './typical'

type TermProps = { className?: string, style?: any, preClassName?: string, preFill?: string }

export type Line = Array<string | number | (() => void) | { speed: number }>
type TermSeq = {
	lines: Line[]
	refs: MutableRefObject<null>[]
}
type TermState = { seqs: TermSeq[]; links: JSX.Element[] }

const termHeight = '20'

const termClasses = [
	// 'bg-gray-800',
	'bg-black',
	'bg-opacity-80',
	// 'shadow-term',
	'pt-4',
	'px-8',
	'overflow-y-hidden',
	'absolute',
	'left-0',
	'w-full',
	'flex',
	'flex-col',
	'items-start',
	'justify-end',
	'text-white',
	'md:text-xl',
	// 'md:rounded-br-lg',
	// 'md:bottom-minus48',
	// 'md:min-h-48',
	// 'md:w-120',
	// 'md:right-auto',
].join(' ')
const termClassesNoLinks = termClasses + ' ' + [`bottom-minus${termHeight}`, `min-h-${termHeight}`].join(' ')
const termClassesLinks = [
	'bg-black',
	'bg-opacity-80',
	// 'shadow-term',
	'pt-2',
	'pb-4',
	'px-8',
	// 'relative',
	// `top-${termHeight}`,
	'left-0',
	'w-full',
	'max-w-full',
	'flex',
	'flex-auto',
	'flex-col',
	'space-y-2',
	// `mb-${termHeight}`,
	'md:flex-row',
	'md:space-x-4',
	'md:space-y-0',
	// 'items-start',
	// 'justify-end',
].join(' ')

class Term extends React.Component<TermProps, TermState> {
	currentSeq: { canceled: boolean } | null = null

	constructor(props: TermProps) {
		super(props)
		this.state = { seqs: [], links: [] } as TermState
		// console.log(`<Term> constructed`)
	}

	typeLines(lines: Line[]) {
		// console.log(`<Term> Will type ${lines.length} lines`)
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
			// console.log(`<Term> Stopping`)
		}
	}

	setLinks(...links: JSX.Element[]) {
		this.setState({ links: links })
	}

	componentDidUpdate(_: any, prevState: TermState) {
		const { seqs } = this.state
		if (prevState.seqs.length === seqs.length || seqs.length === 0) {
			// console.log(`<Term> Ignoring update for ${seqs.length} seqs`)
			return
		}
		this._typeLines()
	}

	async _typeLines() {
		const typerProps = { canceled: false }
		this.currentSeq = typerProps
		const { seqs } = this.state
		const { lines, refs } = seqs[seqs.length - 1]
		// console.log(`<Term> Typing ${lines.length} lines`)
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
		const { className, style, preClassName, preFill } = this.props
		const { seqs, links } = this.state
		const elems: JSX.Element[] = []
		for (let ss = 0; ss < seqs.length; ss++) {
			elems.push(
				...seqs[ss].refs.map((ref, ii) => (
					<pre
						key={`line-${ss}-${ii}`}
						ref={ref}
						className={'whitespace-pre-wrap ' + (preClassName ? preClassName : '')}
					>{preFill ? preFill : ''}</pre>
				)),
			)
		}
		return (
			<>
				<div key='term' className={className || termClassesNoLinks} style={{ zIndex: 10, ...{...style || {}} }}>
					{elems}
				</div>
				{!className && <div key='term-space' className={`h-${termHeight}`} />}
				{!className && <div key='term-links' className={termClassesLinks} style={{ zIndex: 10 }}>
					{links}
				</div>}
			</>
		)
	}
}

// export default memo(Term)
export default Term
