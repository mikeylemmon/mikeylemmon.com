import React, { MutableRefObject, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import TermLink from 'components/TermLink'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const Home: React.FC<Props> = ({ termRef, setStage }) => {
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
				'> menu',
				() =>
					term.setLinks(
						// <TermLink key='menu-0' to='/gallery' soft>
						// 	{'Images and Videos'}
						// </TermLink>,
						<TermLink key='menu-1' to='/songs-and-poems'>
							{'Songs and Poems'}
						</TermLink>,
						// <TermLink key='menu-2' to='/projects' soft>
						// 	{'Projects and Experiments'}
						// </TermLink>,
						// <TermLink key='menu-3' to='/about' soft>
						// 	{'About Me'}
						// </TermLink>,
						<TermLink key='menu-4' to='/'>
							{'Replay intro'}
						</TermLink>,
					),
			],
		])
		return
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	return null
}

export default withRouter(Home)
