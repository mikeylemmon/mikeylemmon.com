import React, { Dispatch, SetStateAction } from 'react'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'

type Props = {
	className: string
	setStage: Dispatch<SetStateAction<HomeContentStage>>
}

const HomeTermIntro: React.FC<Props> = ({ className, setStage }) => (
	<Term
		className={className}
		lines={[
			[{ speed: 150 }, () => setStage('intro'), '>', 700, '> # Hello world!', 800],
			[{ speed: 100 }, '>', 1000, '> # My name is Mikey', 300],
			['>', 200, '> show-mikey', 300, () => setStage('mikey1')],
			[
				{ speed: 0 },
				'....',
				2000,
				() => setStage('mikey3'),
				'...',
				1500,
				() => setStage('mikey4'),
				'..',
				1600,
				() => setStage('mikey2'),
				'.',
				1200,
				() => setStage('mikey5'),
				' ',
			],
			['>', 600, `> # I'm an artist and engineer`, 300],
			['>', 1500],
			['>', 300],
			['>', 200],
			['>', 300],
			['>', 1000, `> # I'm into life`],
			['>', 1000],
			['>', 100],
			[{ speed: 200 }, '>', 500, '> thrive!', () => setStage('thrive10')],
			[
				{ speed: 0 },
				'................',
				{ speed: -1880 },
				'..',
				() => setStage('thrive11'),
				'.',
				{ speed: 0 },
				' ',
			],
			['>', 2000],
			['>', 100],
			['>', 100],
			['>', 100, '> menu'],
			['>'],
		]}
	/>
)

export default HomeTermIntro
