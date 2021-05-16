import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps, useTitle } from 'pages/Page'
import TermLink from 'components/TermLink'
import links from 'pages/songs-and-poems/links'

const Songs: React.FC<PageProps> = ({ termRef, title, setHomeStage }) => {
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
				'> menu songs-and-poems',
				() =>
					term.setLinks(
						<TermLink key='back' to='/home' soft>
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
