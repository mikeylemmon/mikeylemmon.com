import React, { MutableRefObject, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import TermLink from 'components/TermLink'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const AboutMe: React.FC<Props> = ({ termRef, setStage }) => {
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
				'> whois mikey',
			],
			['Mikey Lemmon <mikey@mikeylemmon.com>'],
			[
				'Wellington, NZ',
				() =>
					term.setLinks(
						<TermLink key='back' to='/menu' soft>
							&lt; Home
						</TermLink>,
					),
			],
		])
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	return null
}

export default withRouter(AboutMe)
