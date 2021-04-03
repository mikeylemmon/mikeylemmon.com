import React from 'react'

export type HomeContentStage =
	| 'intro'
	| 'mikey1'
	| 'mikey2'
	| 'mikey3'
	| 'mikey4'
	| 'mikey5'
	| 'thrive0'
	| 'thrive1'
	| 'thrive10'
	| 'thrive11'

type HomeContentProps = {
	stage: HomeContentStage
	style: { zIndex: number }
	className: string
}

const vid = (props: HomeContentProps) => {
	const { stage, style, className } = props
	const src = `/videos/${stage}.mp4`
	return (
		<video {...{ className, style }} autoPlay={true} loop={true} muted={true} playsInline={true}>
			<source src={src} type='video/mp4' />
		</video>
	)
}

const thrive0 = (props: HomeContentProps) => {
	const { className, stage, style } = props
	const zz = style.zIndex
	if (stage === 'thrive1') {
		return null
	}
	const ss = { zIndex: stage.match(/intro|mikey/) ? zz : zz + 1 }
	return vid({ className, stage: 'thrive10', style: ss })
}

const thrive1 = (props: HomeContentProps) => {
	const { className, stage, style } = props
	const zz = style.zIndex
	const ss = { zIndex: stage !== 'thrive1' ? zz : zz + 1 }
	return vid({ className, stage: 'thrive11', style: ss })
}

const mikey = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (!stage.match(/mikey/)) {
		return null
	}
	const src = `/images/${stage}.jpeg`
	const ss = { zIndex: style.zIndex + 1 }
	return <img {...{ className, src, style: ss, alt: 'Mikey' }} />
}

const intro = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (!stage.match(/intro/)) {
		return null
	}
	return <div className={className + ' bg-gray-700'} style={{ zIndex: style.zIndex + 1 }} />
}

const HomeContent: React.FC<HomeContentProps> = props => {
	return (
		<div>
			{intro(props)}
			{mikey(props)}
			{thrive0(props)}
			{thrive1(props)}
		</div>
	)
}

export default HomeContent
