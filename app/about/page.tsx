'use client'
import { link, textContentPage, textContentTerm, textContentWrap } from '@/features/core/appStyles'
import Term from '@/features/term/Term'
import { FC, useEffect } from 'react'
import { useApp } from '@/features/core/AppProvider'
import TermLink from '@/features/term/TermLink'

type Props = {}
const AboutMe: FC<Props> = () => {
	const { termRef, setHomeStage } = useApp()

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

	const pStyle = 'text-lg mb-6 text-justify hyphens-auto'
	return (
		<div className={textContentPage}>
			<div className={textContentWrap}>
				<Term className={textContentTerm} noLinks>
					<p className={pStyle}>
						{"I'm"} an artist and engineer based in Aotearoa New Zealand. My latest project is{' '}
						<a className={link} href='https://thrivestone.com' target='_blank' rel='noreferrer'>
							Thrivestone
						</a>
						, camera app for interacting with what I rather brazenly refer to as digital wildlife,
						along with some pretty sweet apparel I&apos;ve been designing with it.
					</p>

					<p className={pStyle}>
						Over the last couple decades {"I've"} worked as a{' '}
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
						, a web developer, and as a system architect and engineering manager as the CTO at the
						now sadly defunct{' '}
						<a
							className={link}
							href='https://www.google.com/search?q=gnarbox'
							target='_blank'
							rel='noreferrer'
						>
							GNARBOX
						</a>
						. Somewhere in there I managed to get a Bachelors of Music in Composition from the New
						Zealand School of Music &mdash; Te Kōkī.
					</p>

					<p className={pStyle}>
						In 2011 I started experimenting with feedback algorithms and was awed by the complex
						forms and behaviors that iterative systems can manifest, providing glimpses of a
						seemingly infinite well of life-ishness that exists within mathematics itself.
					</p>

					<p className={pStyle}>
						Since those initial experiments began, I have been developing and applying feedback
						techniques to create apps, apparel, VR experiences, and digital works of art, and I
						have come to see life as flourishing well beyond the confines of organic matter — I
						see living organisms in languages, in organizations, in economic structures, in the
						evolution and propagation of thoughts and concepts, everywhere! My mind is as full of
						life as the lushest jungle, and my goal is to use my attention and energy to help
						evolve healthy, thriving ecosystems in myself, my relationships, my communities, and
						the whole world over.
					</p>
				</Term>
			</div>
		</div>
	)
}

export default AboutMe
