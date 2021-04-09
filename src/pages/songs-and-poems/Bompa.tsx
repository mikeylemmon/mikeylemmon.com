import React, { MutableRefObject } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import Poem from './Poem'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const speed = -90
const breath = 1200
// 2'45"
// 2:42 —
// 2:53:30 - 2:56:25 + 5
// 3:01:45 - 4:40

const Bompa: React.FC<Props> = (props: Props) => (
	<Poem
		{...props}
		small={true}
		progress={[
			300,
			{ speed: 0 },
			'..............................',
			{ speed: -6350 },
			'.',
			{ speed: 0 },
			'end',
		]}
		lines={[
			[{ speed }, breath, `on a beach somewhere`],
			[{ speed }, breath, `i am floating past the breaking waves`],
			[{ speed }, breath, `blowing bubbles`],
			[{ speed }, breath, `and pointing my toes at the horizon`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `on a bed somewhere`],
			[{ speed }, breath, `you have paused yourself at life's dim edge`],
			[{ speed }, breath, `our family huddles`],
			[{ speed }, breath, `your wife is holding your hand`],
			[{ speed }, breath, `the quiet king is at death's door`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `i am holding my breath `],
			[{ speed }, breath, `bobbing lightly on waves reflected`],
			[{ speed }, breath, `turned back themselves to sea`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `you are holding your breath`],
			[{ speed }, breath, ` `],
			[{ speed }, breath * 4, `a gentle downward slope`],
			[{ speed }, breath * 2, `the horizon grows`],
			[{ speed }, breath * 3, `it approaches`],
			[{ speed }, breath, `pulling us in`],
			[{ speed }, breath, ` `],
			[{ speed }, breath * 2, `rising thunder`],
			[{ speed }, breath * 2, `glistening power`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `i am preparing myself to duck`],
			[{ speed }, breath, `you face ahead`],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `towering stillness`],
			[{ speed }, breath * 2, `shattering burst of white`],
			[{ speed }, breath, `surging immaculate`],
			[{ speed: speed / 1.5 }, breath, `it is upon you`],
			[{ speed: speed / 1.5 }, breath / 2, ` `],
			[{ speed: speed / 1.5 }, breath / 2, `Bompa!`],
			[{ speed: speed / 1.5 }, breath / 1.5, ` `],
			[{ speed: speed / 1.5 }, breath / 1.5, `i duck`],
			[{ speed: speed / 1.5 }, breath / 1.5, `a crashing shot to the sinus`],
			[{ speed: speed / 1.5 }, breath / 1.5, `my face clenches against the water`],
			[{ speed: speed / 1.5 }, breath, ` `],
			[{ speed: speed / 1.5 }, breath * 2, `rivers turn and bubbles sink across my skin`],
			[{ speed: speed / 1.5 }, breath, ` `],
			[{ speed: speed / 1.5 }, breath * 4, `it loosens for an instant`],
			[{ speed: speed / 1.5 }, breath * 1.5, `then inverts me`],
			[{ speed: speed / 1.5 }, breath, ` `],
			[{ speed: speed / 1.5 }, breath * 1.5, `folding`],
			[{ speed: speed / 1.5 }, breath * 1.5, `a dip in the stomach`],
			[{ speed: speed / 1.5 }, breath, `and suddenly i am swallowing air`],
			[{ speed: speed / 1.5 }, breath, `surface boiling around me`],
			[{ speed }, breath, ` `],
			[{ speed }, breath * 4, `it tickles`],
			[{ speed }, breath * 2, `i am wiping my face with pruned translucent fingers and laughing `],
			[{ speed }, breath, `your renowned flatulence!`],
			[{ speed }, breath, ` `],
			[
				{ speed },
				breath,
				`oh Bompa,`,
				breath * 2,
				`oh Bompa, Bompa,`,
				breath / 2,
				`oh Bompa, Bompa, Bompa`,
			],
			[{ speed }, breath, ` `],
			[{ speed }, breath, `between the water and the sky`],
			[{ speed }, breath * 3, `your effervescence lingers`],
		]}
	/>
)

export default withRouter(Bompa)
