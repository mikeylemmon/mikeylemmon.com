import React, { MutableRefObject } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import Poem from './Poem'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const speed = -120
const breath = 1200

const MyBride: React.FC<Props> = (props: Props) => (
	<Poem
		{...props}
		small={false}
		progress={
			[300, { speed: 0 }, '.........', { speed: -2400 }, '.', { speed: 0 }, 'end']
		}
		lines={[
			[{ speed }, breath, `my winds have no sail`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `my crimes have no jail`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `waves without ocean`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `my bride is the veil`],
		]}
	/>
)

export default withRouter(MyBride)
