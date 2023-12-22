import { FC } from 'react'
import Poem from '../Poem'

type Props = {}

const speed = -120
const breath = 1200

const MyBride: FC<Props> = (props: Props) => (
	<Poem
		{...props}
		small={false}
		progress={[300, { speed: 0 }, '.........', { speed: -2400 }, '.', { speed: 0 }, 'end']}
		lines={[
			[{ speed }, breath, `my winds have no sail`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `my storms have no gale`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `waves without ocean`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `my bride is the veil`],
		]}
	/>
)

export default MyBride
