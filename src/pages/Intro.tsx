import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps, PagePropsSetStage, useTitle } from 'pages/Page'
import TermLink from 'components/TermLink'

type Props = PageProps & PagePropsSetStage

const Intro: React.FC<Props> = ({ termRef, title, setStage, setHomeStage, history }) => {
	useTitle(title)
	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() =>
					term.setLinks(
						<div key='link-skip' className='fixed right-2 bottom-4'>
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
			['>', 1000, { speed: 200 }, '> thrive!', () => setStage('thrive0')],
			[
				{ speed: 0 },
				'................',
				{ speed: -1880 },
				'..',
				() => setHomeStage(),
				'.',
				{ speed: 0 },
				' ',
			],
			['>', 2000],
			['>', 100],
			['>', 100, () => history.push('/home')],
		])
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])
	return null
}

export default withRouter(Intro)
