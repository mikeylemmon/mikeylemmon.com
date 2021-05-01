import React, { useEffect, useRef } from 'react'
import { usePageVisibility } from './pageVisibility'

export type HomeContentStage =
	| 'intro'
	| 'mikey1'
	| 'mikey2'
	| 'mikey3'
	| 'mikey4'
	| 'mikey5'
	| 'thrive10'
	| 'thrive11'

type HomeContentSource = {
	src: string
	type: string
}

type HomeContentProps = {
	stage: HomeContentStage
	style: { zIndex: number }
	className: string
	srcStage?: string
	sources?: HomeContentSource[]
}

const Vid: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { sources, srcStage, stage, style, className } = props
	const ref: React.MutableRefObject<HTMLVideoElement | null> = useRef(null)
	const isVisible = usePageVisibility()
	useEffect(() => {
		if (ref.current) {
			if (!isVisible || stage !== srcStage) {
				ref.current.pause()
			} else {
				ref.current.play()
			}
		}
	}, [isVisible, srcStage, stage])
	return (
		<video {...{ className, style }} ref={ref} loop={true} muted={true} playsInline={true}>
			{sources?.map((ss, ii) => (
				<source key={`${srcStage}-${ii}`} src={ss.src} type={ss.type} />
			))}
		</video>
	)
}

const Thrive10: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (stage.match(/thrive11|menu/)) {
		return null
	}
	const zz = style.zIndex
	const ss = { zIndex: stage.match(/intro|mikey/) ? zz : zz + 1 }
	return Vid({
		className,
		srcStage: 'thrive10',
		sources: [
			{ src: '/assets/videos/thrive0.m3u8', type: 'application/x-mpegURL' },
			{ src: '/assets/videos/thrive0.mp4', type: 'video/mp4' },
		],
		stage,
		style: ss,
	})
}

const Thrive11: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	const zz = style.zIndex
	const ss = { zIndex: stage !== 'thrive11' ? zz : zz + 1 }
	return Vid({
		className,
		srcStage: 'thrive11',
		sources: [
			{ src: '/assets/videos/thrive1.m3u8', type: 'application/x-mpegURL' },
			{ src: '/assets/videos/thrive1.mp4', type: 'video/mp4' },
		],
		stage,
		style: ss,
	})
}

const Mikey: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (!stage.match(/intro|mikey/)) {
		return null
	}
	const src = `/assets/images/${stage}.jpg`
	const ss = { zIndex: style.zIndex }
	if (stage.match(/mikey/)) {
		ss.zIndex += 1
	}
	return <img {...{ className, src, style: ss, alt: 'Mikey' }} />
}

const Intro: React.FC<HomeContentProps> = (props: HomeContentProps) => {
	const { className, stage, style } = props
	if (!stage.match(/intro/)) {
		return null
	}
	return <div className={className} style={{ zIndex: style.zIndex + 1 }} />
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
