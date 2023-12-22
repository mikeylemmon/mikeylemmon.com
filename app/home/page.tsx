'use client'
import { FC, useEffect } from 'react'
import TermLink from '@/features/term/TermLink'
import { PageProps } from '@/features/core/Page'
import { useApp } from '@/features/core/AppProvider'

type Props = PageProps

const Home: FC<Props> = () => {
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
				'> menu',
				() =>
					term.setLinks(
						<TermLink key='menu-0' to='/gallery'>
							{'Gallery'}
						</TermLink>,
						<TermLink key='menu-1' to='/songs-and-poems'>
							{'Songs and Poems'}
						</TermLink>,
						// <TermLink key='menu-2' to='/projects' soft>
						// 	{'Projects and Experiments'}
						// </TermLink>,
						<TermLink key='menu-3' to='/about'>
							{'About Me'}
						</TermLink>,
						<TermLink key='menu-4' to='/' soft>
							{'Replay intro'}
						</TermLink>,
					),
			],
		])
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	return null
}

export default Home
