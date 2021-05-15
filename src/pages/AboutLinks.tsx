import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { PageProps } from 'pages/Page'
import Term from 'components/Term'
import TermLink from 'components/TermLink'
import { link, textContentPage, textContentWrap, textContentTerm } from 'appStyles'

type Props = PageProps

const label = 'mb-3 text-right text-gray-500'

const AboutMe: React.FC<Props> = ({ termRef, setHomeStage }) => {
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
						<p className={label}>email:</p>
						<p className='mb-3 col-span-3'>mikey [at] mikeylemmon.com</p>
					</div>
				</Term>
			</div>
		</div>
	)
}

export default withRouter(AboutMe)
