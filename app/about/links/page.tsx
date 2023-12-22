'use client'
import { useApp } from '@/features/core/AppProvider'
import { link, textContentPage, textContentTerm, textContentWrap } from '@/features/core/appStyles'
import Term from '@/features/term/Term'
import TermLink from '@/features/term/TermLink'
import React, { useEffect } from 'react'

type Props = {}

const label = 'mb-3 text-right text-gray-500'

const AboutMe: React.FC<Props> = () => {
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
				'> menu about-links',
				() => {
					setHomeStage()
					term.setLinks(
						<TermLink key='back' to='/about' soft>
							&lt; About Me
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
					<div className='text-lg grid grid-cols-4 gap-1 mt-3'>
						<p className={label}>github: </p>
						<p className='mb-3 col-span-3'>
							<a
								className={link}
								href='https://github.com/mikeylemmon'
								target='_blank'
								rel='noreferrer'
							>
								https://github.com/mikeylemmon
							</a>
						</p>

						<p className={label}>instagram: </p>
						<p className='mb-3 col-span-3'>
							<a
								className={link}
								href='https://www.instagram.com/mikey1emmon/'
								target='_blank'
								rel='noreferrer'
							>
								@mikey1emmon
							</a>
						</p>

						<p className={label}>
							<span data-nosnippet>email:</span>
						</p>
						<p className='mb-3 col-span-3'>
							<span data-nosnippet>mikey [at] mikeylemmon.com</span>
						</p>

						<p className='text-md col-span-1' />
					</div>

					<p className='text-lg'>
						If {"you're"} reaching out to me, please note that I have autism and that my energy
						for digital correspondence can fluctuate and is generally quite low &mdash; it may
						take me some time to get back to you. Thanks in advance for your patience.
					</p>
				</Term>
			</div>
		</div>
	)
}

export default AboutMe
