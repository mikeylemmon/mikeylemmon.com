import React from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps } from 'pages/Page'
import Poem from './Poem'

type Props = PageProps

const speed = -75
const breath = 900

const Bliss2: React.FC<Props> = (props: Props) => (
	<Poem
		{...props}
		small={false}
		progress={[300, { speed: 0 }, '.................', { speed: -5100 }, '.', { speed: 0 }, 'end']}
		lines={[
			[{ speed }, breath, `I won’t hold you too long,`],
			[{ speed }, breath, `but I hope you can stay for a moment`],
			[{ speed }, breath, `because I want to keep telling you about this story`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `where in a glance of your lover's eyes`],
			[{ speed }, breath, `all the flowers bloom and wilt,`],
			[{ speed }, breath, `and all the beings are born and die,`],
			[{ speed }, breath, `and all the worlds are formed and crumble inside you —`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `where in the touch of your lover's lips`],
			[{ speed }, breath, `your life means everything,`],
			[{ speed }, breath, `including nothing,`],
			[{ speed }, breath, `so truly everything!`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `and in the sound of your lover's voice,`],
			[{ speed }, breath, `your life is everywhere,`],
			[{ speed }, breath, `including nowhere,`],
			[{ speed }, breath, `so truly everywhere!`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `— where all the infinite arcs begin and weave and end`],
			[{ speed }, breath, `endlessly`],
			[{ speed }, breath, `in the burning of this eternal instant.`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `If you should happen to encounter Bliss,`],
			[{ speed }, breath, `ask to hear this story.`],
			[{ speed }, breath, `I love this one!`],
			[{ speed }, breath, `And Bliss tells it so well!`],
		]}
	/>
)

export default withRouter(Bliss2)


