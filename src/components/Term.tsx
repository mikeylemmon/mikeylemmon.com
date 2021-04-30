// import React, { createRef, useEffect, useRef, memo, MutableRefObject } from 'react'
import React, { createRef, MutableRefObject } from 'react'
import { typer } from './typical'

type TermProps = {
	className?: string
	style?: any
	preClassName?: string
	preFill?: string
	noLinks?: boolean
}

export type Line = Array<string | number | (() => void) | { speed: number }>
type TermSeq = {
	lines: Line[]
	refs: MutableRefObject<null>[]
}
type TermState = {
	hidden: boolean
	links: JSX.Element[]
	seqs: TermSeq[]
}

const termHeight = '20'
const termClasses = [
	'bg-black',
	'bg-opacity-80',
	'left-0',
	'w-full',
	'max-w-full',
	'flex',
	'flex-auto',
	'flex-col',
	'text-white',
	'text-base',
	'md:text-xl',
].join(' ')
const termClassesNoLinks =
	termClasses +
	[
		'',
		'items-start',
		'justify-end',
		'absolute',
		'overflow-y-hidden',
		'pt-4',
		'px-8',
		`bottom-minus${termHeight}`,
		`min-h-${termHeight}`,
	].join(' ')
const termClassesLinks =
	termClasses +
	[
		'',
		'pt-2',
		'pb-4',
		'px-8',
		`mt-${termHeight}`,
		'space-y-2',
		'md:flex-row',
		'md:space-x-4',
		'md:space-y-0',
	].join(' ')

class Term extends React.Component<TermProps, TermState> {
	currentSeq: { canceled: boolean } | null = null

	constructor(props: TermProps) {
		super(props)
		this.state = { hidden: false, links: [], seqs: [] }
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

	isHidden() {
		return this.state.hidden
	}
	setHidden(hidden: boolean) {
		this.setState({ hidden })
	}
	toggleHidden() {
		this.setState((prev: TermState) => ({ hidden: !prev.hidden }))
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
		const { children, className, style, preClassName, noLinks, preFill } = this.props
		const { hidden, links, seqs } = this.state
		const elems: JSX.Element[] = []
		const zIndex = hidden ? -20 : 10
		for (let ss = 0; ss < seqs.length; ss++) {
			elems.push(
				...seqs[ss].refs.map((ref, ii) => (
					<pre
						key={`line-${ss}-${ii}`}
						ref={ref}
						className={'whitespace-pre-wrap ' + (preClassName ? preClassName : '')}
					>
						{preFill ? preFill : ''}
					</pre>
				)),
			)
		}
		return (
			<>
				<div
					key='term'
					className={className || termClassesNoLinks}
					style={{ zIndex, ...{ ...(style || {}) } }}
				>
					{children}
					{elems}
				</div>
				{!noLinks && !hidden && (
					<div key='term-links' className={termClassesLinks} style={{ zIndex }}>
						{links}
					</div>
				)}
			</>
		)
	}
}

// export default memo(Term)
export default Term
