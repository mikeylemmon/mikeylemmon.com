import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term, { Line } from 'components/Term'
import { TermAction } from 'components/TermLink'
import { linkForPath, relativeLinks } from './links'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
	lines: Line[]
	progress: Line
	small?: boolean
}

const Poem: React.FC<Props> = ({ lines, location, progress, small, setStage, termRef }) => {
	const songRef: MutableRefObject<Term | null> = useRef(null)
	const [play, setPlay] = useState(false)
	const page = linkForPath(location.pathname)
	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() => {
					setStage('thrive11')
					term.setLinks()
				},
				{ speed: 24 },
				`> menu '${page.title}'`,
				() =>
					term.setLinks(
						...relativeLinks(location.pathname),
						<TermAction
							key='link-play'
							onClick={() => {
								setPlay(true)
								term.setLinks(...relativeLinks(location.pathname))
								term.typeLines([
									[{ speed: 24 }, `> play '${page.title}'`],
									progress,
									[() => term.setLinks(...relativeLinks(location.pathname, true))],
								])
							}}
						>
							Play '{page.title}'
						</TermAction>,
					),
			],
		])
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	useEffect(() => {
		// const term = termRef.current
		const song = songRef.current
		if (!song || !play) {
			return
		}
		song.typeLines(lines)
		return
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [play, songRef])

	if (!play) {
		return null
	}

	const textSize = small ? 'text-xs md:text-sm' : 'text-sm'
	return (
		<div className={['flex', 'flex-col', 'items-center', 'justify-start', 'p-4', 'pb-8'].join(' ')}>
			<div
				className={[
					'bg-cool-300',
					'bg-opacity-95',
					'rounded-xl',
					'overflow-y-auto',
					'w-full',
					'max-w-full',
					'md:w-lg',
					'flex',
					'flex-col',
					'items-center',
					'justify-start',
				].join(' ')}
			>
				<pre className='mt-14 underline'>{page.title}</pre>
				<Term
					ref={songRef}
					className={'px-8 pt-10 pb-16 w-full max-w-md text-black'}
					preClassName={'text-indent ' + textSize}
					preFill=' '
					noLinks
				/>
			</div>
		</div>
	)
}

export default withRouter(Poem)
