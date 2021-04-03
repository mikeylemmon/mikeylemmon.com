import React, { useEffect, useRef } from 'react'

export type HomeContentStage =
	| 'intro'
	| 'mikey1'
	| 'mikey2'
	| 'mikey3'
	| 'mikey4'
	| 'mikey5'
	| 'thrive10'
	| 'thrive11'

type HomeContentProps = {
	stage: HomeContentStage
	style: { zIndex: number }
	className: string
	srcStage?: string
}

const Vid: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { srcStage, stage, style, className } = props
	const ref: React.MutableRefObject<HTMLVideoElement | null> = useRef(null)
	useEffect(() => {
		if (stage === srcStage && ref.current) {
			ref.current.play()
		}
	}, [srcStage, stage])
	const src = `/videos/${srcStage}.mp4`
	return (
		<video {...{ className, style }} ref={ref} loop={true} muted={true} playsInline={true}>
			<source src={src} type='video/mp4' />
		</video>
	)
}

const Thrive10: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (stage === 'thrive11') {
		return null
	}
	const zz = style.zIndex
	const ss = { zIndex: stage.match(/intro|mikey/) ? zz : zz + 1 }
	return Vid({ className, srcStage: 'thrive10', stage, style: ss })
}

const Thrive11: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (!stage.match(/thrive/)) {
		return null
	}
	const zz = style.zIndex
	const ss = { zIndex: stage !== 'thrive11' ? zz : zz + 1 }
	return Vid({ className, srcStage: 'thrive11', stage, style: ss })
}

const Mikey: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (!stage.match(/mikey/)) {
		return null
	}
	const src = `/images/${stage}.jpeg`
	const ss = { zIndex: style.zIndex + 1 }
	return <img {...{ className, src, style: ss, alt: 'Mikey' }} />
}

const Intro: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (!stage.match(/intro/)) {
		return null
	}
	return <div className={className + ' bg-gray-700'} style={{ zIndex: style.zIndex + 1 }} />
}

const HomeContent: React.FC<HomeContentProps> = props => {
	return (
		<div>
			<Intro {...{ ...props }} />
			<Mikey {...{ ...props }} />
			<Thrive10 {...{ ...props }} />
			<Thrive11 {...{ ...props }} />
		</div>
	)
}

export default HomeContent
