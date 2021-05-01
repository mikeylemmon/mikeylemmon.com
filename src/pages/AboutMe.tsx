import React, { MutableRefObject, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'
import TermLink from 'components/TermLink'
import { link, textContentPage, textContentWrap, textContentTerm } from 'appStyles'

type Props = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const AboutMe: React.FC<Props> = ({ termRef, setStage }) => {
	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() => {
					setStage('thrive11')
					term.setLinks()
				},
				'> whois mikey',
			],
			[
				{ speed: 0 },
				'Mikey Lemmon <hello@mikeylemmon.com>',
				() =>
					term.setLinks(
						<TermLink key='back' to='/menu' soft>
							&lt; Home
						</TermLink>,
					),
			],
		])
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	return (
		<div className={textContentPage}>
			<div className={textContentWrap}>
				<Term className={textContentTerm} noLinks>
					<p className='text-lg mb-6'>
						Over the last two decades I've worked as a{' '}
						<a
							className={link}
							href='https://www.prada.com/content/dam/pradanux/pradasphere/2001/fashion-show/ss-man/look/dt/024.jpg'
							target='_blank'
							rel='noreferrer'
						>
							fashion
						</a>{' '}
						<a
							className={link}
							href='https://www.vogue.com/fashion-shows/fall-2002-ready-to-wear/marc-jacobs/slideshow/collection#4'
							target='_blank'
							rel='noreferrer'
						>
							model
						</a>
						, a{' '}
						<a
							className={link}
							href='https://www.imdb.com/name/nm1162896/'
							target='_blank'
							rel='noreferrer'
						>
							visual effects artist
						</a>
						, a web developer, and most recently as a system architect and engineering manager in
						my current role as the CTO at{' '}
						<a className={link} href='https://gnarbox.com' target='_blank' rel='noreferrer'>
							GNARBOX
						</a>
						.
					</p>

					<p className='text-lg mb-6'>
						I studied in fits and starts at Brigham Young University (computer science), Columbia
						University (music), Victoria University of Wellington (computer systems engineering),
						and The New Zealand School of Music (composition). Last year I completed my only
						degree, a Bachelor's of Music in Vocal and Instrumental Composition from the New
						Zealand School of Music.
					</p>

					<p className='text-lg mb-6'>
						About ten years ago I started experimenting with feedback algorithms and was awed by
						the complex forms and behaviors that feedback systems can manifest, providing glimpses
						of a seemingly infinite well of life that exists within mathematics itself. Since
						those initial experiments began, I have been developing and applying feedback
						techniques to create apps, apparel, VR experiences, and digital works of art. Through
						these experiments, I have come to see life flourishing well beyond the confines of
						organic matter — I see living organisms in languages, in organizations, in economic
						structures, in the evolution and propagation of thoughts and concepts, everywhere! My
						mind is as full of life as the lushest jungle, and my goal is to use my attention and
						energy to help evolve healthy, thriving ecosystems in myself, my relationships, my
						communities, and the whole world over.
					</p>
				</Term>
			</div>
		</div>
	)
}

/*

I was born in Salt Lake City to a devout Mormon family, the middle of five boys,
and grew up in the suburbs of Salt Lake City, Los Angeles, Des Moines, and Portland OR.
After graduating high school I did a few stints of fashion modelling,
appearing in shows in Milan, Paris, New York, and Japan for
Prada, Marc Jacobs, Issey Miyake, Junya Wantanabe, Number (N)ine, and others.

[Prada], [Marc Jacobs]

My favorite modelling memories are from two three-month stays in Tokyo.
I'm particularly proud of this shoot: [NTT Docomo]

Between modelling adventures I was studying computer science
and interning in the visual effects industry,
and I eventually left modelling behind to focus on a career in
computer graphics.

---

My career in the visual effects industry started with an intership
and subsequent work at Digital Domain, where I did pipeline engineering
and CG effects for the film The Time Machine.

After some more modelling escapades, I moved to Wellington, New Zealand
to work at Weta Digital doing 3D lighting, shader development,
and pipeline engineering for The Lord of the Rings: The Two Towers and
The Return of the King.

// Throughout this time I had remained devout in my Mormon faith, which
// teaches that all young men should serve a two-year mission proselytising
// the gospel once they turn nineteen. ...

After post-production finished on The Lord of the Rings, I moved to
New York City to study music at Columbia University. That turned out
to be a financial and academic blunder, and I eventually returned to
Wellington to study Music Composition at The New Zealand School of Music
and Computer Systems Engineering at Victoria University of Wellington.
During this time I continued to work in visual effects, doing R&D and look
development on the Materials team at Blue Sky Studios for the film Robots,
and shader development, lighting, and R&D at Weta Digital on King Kong,
Avatar, and the Walt Disney Pictures trailer logo.

...

---

I work to help healthy ecosystems and thriving gardens grow
in myself, in my relationships, my communities, and the whole
world over.

---

Over the last two decades I've worked as a fasion model,
a visual effects artist and engineer, a web developer,
and most recently as a system architect and
engineering manager in my current role as the CTO at GNARBOX.

I studied in fits and starts at
Brigham Young University (computer science),
Columbia University (music),
Victoria University of Wellington (computer systems engineering),
and The New Zealand School of Music (composition).
Last year I completed my only degree, a Bachelor's of Music
from the New Zealand School of Music.

About ten years ago I started experimenting with
feedback algorithms and was awed by the complex forms
and behaviors that feedback systems can manifest,
providing glimpses of a seemingly infinite well of life
that exists within mathematics itself. Since those initial experiments
began, I have been developing and applying feedback techniques to
create generative apps, apparel, VR experiences, and digital works of art.
Through these experiments, I have come to see life flourishing well beyond
the confines of organic matter — I see living organisms in languages,
in organizations, in economic structures, in the evolution and propogation
of thoughts and concepts, everywhere! My mind is as full of life as
the lushest jungle, and my goal is to evolve healthy, thriving ecosystems
in myself, my relationships, my communities, and the whole
world over.

*/

export default withRouter(AboutMe)
