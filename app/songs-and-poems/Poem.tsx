'use client'
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import Term, { Line } from '@/features/term/Term'
import { TermAction } from '@/features/term/TermLink'
import { textContentPage, textContentWrap, textContentTerm } from '@/features/core/appStyles'
import { linkForPath, relativeLinks } from './links'
import { useApp } from '@/features/core/AppProvider'
import { usePathname } from 'next/navigation'

type Props = {
	lines: Line[]
	nextTitle?: string
	progress: Line
	small?: boolean
}

const Poem: FC<Props> = ({ lines, nextTitle, progress, small }) => {
	const { termRef, setHomeStage } = useApp()
	const songRef: MutableRefObject<Term | null> = useRef(null)
	const [play, setPlay] = useState(false)
	const page = linkForPath(usePathname())

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
									[
										() =>
											term.setLinks(
												...relativeLinks(location.pathname, {
													nextTitle,
													ended: true,
												}),
											),
									],
								])
							}}
						>
							Play {`"${page.title}"`}
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

export default Poem
