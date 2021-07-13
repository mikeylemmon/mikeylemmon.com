import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps, useTitle } from 'pages/Page'
import Term, { Line } from 'components/Term'
import { TermAction } from 'components/TermLink'
import { textContentPage, textContentWrap, textContentTerm } from 'appStyles'
import { linkForPath, relativeLinks } from './links'

type Props = PageProps & {
	lines: Line[]
	nextTitle?: string
	progress: Line
	small?: boolean
}

const Poem: React.FC<Props> = ({ lines, location, nextTitle, progress, small, setHomeStage, termRef, title }) => {
	const songRef: MutableRefObject<Term | null> = useRef(null)
	const [play, setPlay] = useState(false)
	const page = linkForPath(location.pathname)
	useTitle(title)
	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() => {
					setHomeStage()
					term.setLinks()
				},
				{ speed: 24 },
				`> menu '${page.title}'`,
				() =>
					term.setLinks(
						...relativeLinks(location.pathname, { nextTitle }),
						<TermAction
							key='link-play'
							onClick={() => {
								setPlay(true)
								term.setLinks(...relativeLinks(location.pathname, { nextTitle }))
								term.typeLines([
									[{ speed: 24 }, `> play '${page.title}'`],
									progress,
									[() => term.setLinks(...relativeLinks(location.pathname, { nextTitle, ended: true }))],
								])
							}}
						>
							Play "{page.title}"
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
		<div className={textContentPage}>
			<div className={textContentWrap}>
				<h1 className='font-mono mt-14 underline'>{page.title}</h1>
				<Term
					ref={songRef}
					className={textContentTerm}
					preClassName={'text-indent ' + textSize}
					preFill=' '
					noLinks
				/>
			</div>
		</div>
	)
}

export default withRouter(Poem)
