import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps } from 'pages/Page'
import TermLink from 'components/TermLink'

type Props = PageProps

const Home: React.FC<Props> = ({ termRef, setHomeStage }) => {
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

export default withRouter(Home)
