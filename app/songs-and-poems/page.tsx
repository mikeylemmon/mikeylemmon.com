'use client'
import { FC, useEffect } from 'react'
import TermLink from '@/features/term/TermLink'
import links from './links'
import { useApp } from '@/features/core/AppProvider'

const Songs: FC<{}> = () => {
	const { termRef, setHomeStage } = useApp()
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
				'> menu songs-and-poems',
				() =>
					term.setLinks(
						<TermLink key='back' to='/home' soft>
							&lt; Home
						</TermLink>,
						...links.map(({ to, title, hidden }, ii) => {
							if (hidden) return <></>
							return (
								<TermLink key={`link-${ii}`} to={to}>
									{title}
								</TermLink>
							)
						}),
					),
			],
		])
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	return null
}

export default Songs
