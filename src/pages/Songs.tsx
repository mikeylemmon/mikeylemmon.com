import React, { MutableRefObject, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import TermLink from 'components/TermLink'
import links from 'pages/songs-and-poems/links'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const Songs: React.FC<Props> = ({ termRef, setStage }) => {
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
				'> menu songs-and-poems',
				() =>
					term.setLinks(
						<TermLink key='back' to='/menu' soft>
							&lt; Home
						</TermLink>,
						...links.map(({ to, title }, ii) => (
							<TermLink key={`link-${ii}`} to={to}>
								{title}
							</TermLink>
						)),
					),
			],
		])
		return
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	return null
}

export default withRouter(Songs)