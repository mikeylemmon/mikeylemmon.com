import React, { MutableRefObject } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import Poem from './Poem'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const speed = -130
const breath = 1200

const GivenTime: React.FC<Props> = (props: Props) => (
	<Poem
		{...props}
		progress={[300, { speed: 0 }, '...............', { speed: -4000 }, '.', { speed: 0 }, 'end']}
		lines={[
			[{ speed }, breath * 2, `given time`],
			[{ speed }, breath, `all spools unwind`],
			[{ speed: speed * 0.8 }, breath, `all schemes recede to sea`],
			[{ speed: speed * 0.8 }, breath * 0.7, `gone to seed`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `given time`],
			[{ speed }, breath, `all dynasties decline`],
			[{ speed }, breath, `and it's fine`],
			[{ speed }, breath * 1.5, `and it's clear`],
			[{ speed }, breath, `never is always near`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `given time`],
			[{ speed }, breath, `I seek what I can't find`],
			[{ speed }, breath, `endless sublime`],
			[{ speed }, breath * 2, `nothing to fear`],
			[{ speed }, breath * 1.5, `being is always here`],
		]}
	/>
)

export default withRouter(GivenTime)
