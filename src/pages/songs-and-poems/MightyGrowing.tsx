import React from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps } from 'pages/Page'
import Poem from './Poem'

type Props = PageProps

const speed = -90
const breath = 1200
const indent = '    '

const MightyGrowing: React.FC<Props> = (props: Props) => (
	<Poem
		{...props}
		small={true}
		progress={[300, { speed: 0 }, '...............', { speed: -4000 }, '.', { speed: 0 }, 'end']}
		lines={[
			[{ speed }, breath * 2, `I found jesus`],
			[{ speed: 0 }, indent, { speed }, breath / 4, `${indent}and the devil set me free`],
			[{ speed }, breath, `I found the devil`],
			[{ speed: 0 }, indent, { speed }, breath / 4, `${indent}and the savior lives in me`],
			[{ speed }, breath, `I found the darkness`],
			[{ speed: 0 }, indent, { speed }, breath / 4, `${indent}at the center of my soul`],
			[{ speed }, breath, `I found the light`],
			[{ speed: 0 }, indent, { speed }, breath / 4, `${indent}and the darkness made me whole`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `I found time`],
			[{ speed: 0 }, indent, { speed }, breath / 4, `${indent}upside-down within my brain`],
			[{ speed }, breath, `puddles rising up to heaven`],
			[{ speed: 0 }, indent, { speed }, breath / 4, `${indent}shatters forming into panes`],
			[{ speed }, breath, `I touched the soil`],
			[{ speed: 0 }, indent, { speed }, breath / 4, `${indent}felt the earth of the unknown`],
			[{ speed }, breath, `there's a mighty growing`],
			[{ speed: 0 }, indent, { speed }, breath, `${indent}underneath the snow`],
		]}
	/>
)

export default withRouter(MightyGrowing)
