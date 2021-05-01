import React, { MutableRefObject, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Term from 'components/Term'
import TermLink from 'components/TermLink'
import links from 'pages/songs-and-poems/links'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setHomeStage: () => void
}

const Songs: React.FC<Props> = ({ termRef, setHomeStage }) => {
	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() => {
					setHomeStage('thrive1')
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
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	return null
}

export default withRouter(Songs)
