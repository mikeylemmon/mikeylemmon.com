import React from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps } from 'pages/Page'
import Poem from './Poem'

type Props = PageProps

const speed = -75
const breath = 900

const Bliss: React.FC<Props> = (props: Props) => (
	<Poem
		{...props}
		small={false}
		nextTitle='Bliss (Part 2)'
		progress={[300, { speed: 0 }, '..................', { speed: -3100 }, '.', { speed: 0 }, 'end']}
		lines={[
			[{ speed }, breath, `Suddenly,`],
			[{ speed }, breath, `Bliss!`],
			[{ speed }, breath, `Here you are!`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `I won’t hold you too long,`],
			[{ speed }, breath, `but I do hope you can stay for a moment`],
			[{ speed }, breath, `because I want to keep hearing this story you are telling me.`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `I won't ask where you came from`],
			[{ speed }, breath, `or where you're going,`],
			[{ speed }, breath, `just keep telling me this story`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `and when you’re gone`],
			[{ speed }, breath, `I can try to describe it,`],
			[{ speed }, breath, `and there’s a chance I might be able to convey a tiny hint`],
			[{ speed }, breath, `of your numinous delivery.`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `Bliss,`],
			[{ speed }, breath, `I love this one!`],
			[{ speed }, breath, `And you are telling it so well!`],
		]}
	/>
)

export default withRouter(Bliss)

