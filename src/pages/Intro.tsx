import React, { MutableRefObject, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import TermLink from 'components/TermLink'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const Intro: React.FC<Props> = ({ termRef, setStage, history }) => {
	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() =>
					term.setLinks(
						<div className='fixed right-2 bottom-4'>
							<TermLink to='/home'>{'Skip intro'}</TermLink>
						</div>,
					),
				{ speed: 100 },
				() => setStage('intro'),
				'>',
				500,
				'> # Hello world!',
				300,
			],
			[{ speed: 90 }, '>', 1000, '> # My name is Mikey', 300],
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
			['>', 1500, `> # I'm into life`],
			['>', 1000, { speed: 200 }, '> thrive!', () => setStage('thrive10')],
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
			['>', 100, () => history.push('/home')],
		])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])
	return null
}

export default withRouter(Intro)
