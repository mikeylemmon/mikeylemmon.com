import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps, useTitle } from 'pages/Page'
import Term from 'components/Term'
import TermLink from 'components/TermLink'
import { link, textContentPage, textContentWrap, textContentTerm } from 'appStyles'

type Props = PageProps

const AboutMe: React.FC<Props> = ({ termRef, title, setHomeStage }) => {
	useTitle(title)
	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() => {
					setHomeStage()
					term.setLinks()
				},
				{ speed: 24 },
				'> menu about',
				() => {
					term.setLinks(
						<TermLink key='back' to='/home' soft>
							&lt; Home
						</TermLink>,
						<TermLink key='menu-3' to='/about/links'>
							{'Links'}
						</TermLink>,
					)
				},
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
						, a web developer, and as a system architect and engineering manager as the CTO at{' '}
						<a
							className={link}
							href='https://www.google.com/search?q=gnarbox'
							target='_blank'
							rel='noreferrer'
						>
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

export default withRouter(AboutMe)
