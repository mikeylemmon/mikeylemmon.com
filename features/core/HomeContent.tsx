import React, { useEffect, useRef } from 'react'
import { usePageVisibility } from './pageVisibility'

export type HomeContentStage =
	| 'intro'
	| 'mikey1'
	| 'mikey2'
	| 'mikey3'
	| 'mikey4'
	| 'mikey5'
	| 'thrive0'
	| 'thrive1'

type HomeContentSource = {
	src: string
	type: string
}

type HomeContentProps = {
	stage: HomeContentStage
	style: { zIndex: number }
	className: string
	setNeedsRestage: (val: boolean) => void
}

type HomeContentElemProps = {
	stage: HomeContentStage
	style: { zIndex: number }
	className: string
	srcStage?: string
	sources?: HomeContentSource[]
	isVisible?: boolean
}

const Vid: React.FC<HomeContentElemProps> = (props: HomeContentElemProps) => {
	const { sources, srcStage, stage, style, className, isVisible } = props
	const ref: React.MutableRefObject<HTMLVideoElement | null> = useRef(null)
	useEffect(() => {
		// console.log(`isVisible=${isVisible}`)
		if (!ref.current || !isVisible) {
			return
		}
		// const prevSrc = ref.current.src
		// ref.current.onloadstart = () => console.log('ONLOADSTART', prevSrc)
		// ref.current.onload = () => console.log('ONLOAD', prevSrc)
		ref.current.load()
	}, [isVisible])
	useEffect(() => {
		// console.log(`isVisible=${isVisible} stage=${stage} srcStage=${srcStage}`)
		if (!ref.current) {
			return
		}
		if (!isVisible || stage !== srcStage) {
			// console.log('Pausing', srcStage)
			ref.current.pause()
		} else {
			ref.current.pause()
			ref.current.play()
			// ref.current.onplay = () => console.log('ONPLAY!', srcStage)
			// console.log('Playing', srcStage, `paused=${ref.current.paused}`, `error=${ref.current.error}`)
			// ;(window as any).vid = ref.current
		}
	}, [isVisible, srcStage, stage])
	return (
		<video {...{ className, style }} ref={ref} loop={true} muted={true} playsInline={true} preload='auto'>
			{sources?.map((ss, ii) => (
				<source key={`${srcStage}-${ii}`} src={ss.src} type={ss.type} />
			))}
		</video>
	)
}

const Thrive0: React.FC<HomeContentElemProps> = (props: HomeContentElemProps) => {
	const { stage, style } = props
	if (stage.match(/thrive1|menu/)) {
		return null
	}
	const zz = style.zIndex
	const ss = { zIndex: stage.match(/intro|mikey/) ? zz : zz + 1 }
	return Vid({
		...props,
		srcStage: 'thrive0',
		sources: [
			{ src: '/assets/videos/thrive0.m3u8', type: 'application/x-mpegURL' },
			{ src: '/assets/videos/thrive0.mp4', type: 'video/mp4' },
		],
		style: ss,
	})
}

const Thrive1: React.FC<HomeContentElemProps> = (props: HomeContentElemProps) => {
	const { stage, style } = props
	const zz = style.zIndex
	const ss = { zIndex: stage !== 'thrive1' ? zz : zz + 1 }
	return Vid({
		...props,
		srcStage: 'thrive1',
		sources: [
			{ src: '/assets/videos/thrive1.m3u8', type: 'application/x-mpegURL' },
			{ src: '/assets/videos/thrive1.mp4', type: 'video/mp4' },
		],
		style: ss,
	})
}

const Mikey: React.FC<HomeContentElemProps> = (props: HomeContentElemProps) => {
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

const Intro: React.FC<HomeContentElemProps> = (props: HomeContentElemProps) => {
	const { className, stage, style } = props
	if (!stage.match(/intro/)) {
		return null
	}
	return <div className={className} style={{ zIndex: style.zIndex + 1 }} />
}

const HomeContent: React.FC<HomeContentProps> = props => {
	const { setNeedsRestage, stage } = props
	const isVisible = usePageVisibility(setNeedsRestage)
	useEffect(() => setNeedsRestage(false), [stage, setNeedsRestage])
	return (
		<div>
			<Intro {...{ ...props }} />
			<Mikey {...{ ...props }} />
			<Thrive0 {...{ ...props, isVisible }} />
			<Thrive1 {...{ ...props, isVisible }} />
		</div>
	)
}

export default HomeContent
