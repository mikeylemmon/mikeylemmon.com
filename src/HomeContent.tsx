import React from 'react'

export type HomeContentStage =
	| 'intro'
	| 'mikey1'
	| 'mikey2'
	| 'mikey3'
	| 'mikey4'
	| 'mikey5'
	| 'thrive1'
	| 'thrive2'
	| 'thrive3'
	| 'thrive4'
	| 'thrive5'
	| 'thrive6'
	| 'thrive7'
	| 'thrive8'

type HomeContentProps = {
	stage: HomeContentStage
}

const common = {
	style: { zIndex: -1 },
	className: 'fixed top-0 left-0 h-full w-full object-cover object-center',
}

const HomeContent: React.FC<HomeContentProps> = props => {
	const { stage } = props
	if (stage.match(/mikey/)) {
		const src = `/images/${stage}.jpeg`
		return <img {...{ ...common }} src={src} alt='Mikey' />
	}
	if (stage.match(/thrive/)) {
		const src = `/videos/${stage}.mov`
		const muted = !stage.match(/thrive1/)
		return (
			<video {...{ ...common }} autoPlay={true} loop={true} muted={muted}>
				<source src={src} type='video/mp4' />
			</video>
		)
	}
	return <div className={common.className + ' bg-gray-700'} style={common.style} />
}

export default HomeContent
