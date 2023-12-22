'use client'
import { useApp } from '@/features/core/AppProvider'
import Term from '@/features/term/Term'
import TermLink, { TermAction } from '@/features/term/TermLink'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

type MediaFile = {
	src: string
	kind: 'image' | 'video' | string
}

const imgs = [
	'/assets/gallery/thrive-100.jpg',
	'/assets/gallery/thrive-101.jpg',
	'/assets/gallery/thrive-102.jpg',
	'/assets/gallery/thrive-103.jpg',
	'/assets/gallery/thrive-104.jpg',
	'/assets/gallery/thrive-000.jpg',
	'/assets/gallery/thrive-002.jpg',
	'/assets/gallery/thrive-003.jpg',
	'/assets/gallery/thrive-004.jpg',
	'/assets/gallery/thrive-006.jpg',
	'/assets/gallery/thrive-007.jpg',
	'/assets/gallery/thrive-008.jpg',
	'/assets/gallery/thrive-009.jpg',
	'/assets/gallery/thrive-010.jpg',
	'/assets/gallery/thrive-011.jpg',
	'/assets/gallery/thrive-012.jpg',
	'/assets/gallery/thrive-013.jpg',
	'/assets/gallery/thrive-014.jpg',
	'/assets/gallery/thrive-015.jpg',
	'/assets/gallery/thrive-016.jpg',
	'/assets/gallery/thrive-017.jpg',
	'/assets/gallery/thrive-018.jpg',
	'/assets/gallery/thrive-019.jpg',
	'/assets/gallery/thrive-020.jpg',
	'/assets/gallery/thrive-021.jpg',
	'/assets/gallery/thrive-022.jpg',
	'/assets/gallery/thrive-023.jpg',
	'/assets/gallery/thrive-024.jpg',
	'/assets/gallery/thrive-025.jpg',
	'/assets/gallery/thrive-026.jpg',
	'/assets/gallery/thrive-027.jpg',
	'/assets/gallery/thrive-028.jpg',
	'/assets/gallery/thrive-030.jpg',
	'/assets/gallery/thrive-031.jpg',
	'/assets/gallery/thrive-032.jpg',
	'/assets/gallery/thrive-033.jpg',
	'/assets/gallery/thrive-034.jpg',
	'/assets/gallery/thrive-035.jpg',
	'/assets/gallery/thrive-036.jpg',
	'/assets/gallery/thrive-037.jpg',
	'/assets/gallery/thrive-038.jpg',
	'/assets/gallery/thrive-041.jpg',
	'/assets/gallery/thrive-044.jpg',
	'/assets/gallery/alef-000.jpg',
	'/assets/gallery/alef-001.jpg',
	'/assets/gallery/alef-010.jpg',
	'/assets/gallery/alef-062.jpg',
	'/assets/gallery/alef-063.jpg',
	'/assets/gallery/alef-065.jpg',
	'/assets/gallery/alef-066.jpg',
	'/assets/gallery/alef-070.jpg',
	'/assets/gallery/alef-072.jpg',
	'/assets/gallery/alef-073.jpg',
	'/assets/gallery/alef-074.jpg',
	'/assets/gallery/alef-075.jpg',
	'/assets/gallery/alef-080.jpg',
	'/assets/gallery/alef-100.jpg',
	'/assets/gallery/alef-101.jpg',
	'/assets/gallery/alef-110.jpg',
	'/assets/gallery/alef-111.jpg',
	'/assets/gallery/alef-114.jpg',
	'/assets/gallery/stone-000.jpg',
	'/assets/gallery/stone-002.jpg',
	'/assets/gallery/stone-003.jpg',
	'/assets/gallery/stone-004.jpg',
	'/assets/gallery/stone-005.jpg',
	'/assets/gallery/stone-006.jpg',
	'/assets/gallery/stone-007.jpg',
	'/assets/gallery/stone-008.jpg',
	'/assets/gallery/stone-009.jpg',
	'/assets/gallery/stone-010.jpg',
	'/assets/gallery/stone-011.jpg',
	'/assets/gallery/stone-012.jpg',
	'/assets/gallery/stone-013.jpg',
	'/assets/gallery/stone-014.jpg',
	'/assets/gallery/stone-015.jpg',
	'/assets/gallery/stone-016.jpg',
	'/assets/gallery/stone-017.jpg',
	'/assets/gallery/stone-018.jpg',
	'/assets/gallery/stone-020.jpg',
	'/assets/gallery/stone-021.jpg',
	'/assets/gallery/stone-022.jpg',
]

const files: MediaFile[] = [...imgs.map(src => ({ src, kind: 'image' }))]

const prevNext = (id: number) => {
	const prev = (id + files.length - 1) % files.length
	const next = (id + 1) % files.length
	return { prev, next }
}

const relativeLinks = (id: number) => {
	const { prev, next } = prevNext(id)
	const elems = []
	if (id !== 0) {
		elems.push(
			<TermLink key='link-1' to={`/gallery?i=${prev}`} soft shallow scroll={false}>
				Prev
			</TermLink>,
		)
	}
	if (id !== files.length - 1) {
		elems.push(
			<TermLink key='link-2' to={`/gallery?i=${next}`} shallow scroll={false}>
				Next
			</TermLink>,
		)
	}
	return elems
}

const setLinks = (term: Term, id: number, fill: boolean, setFill: (fill: boolean) => void) => {
	term.setLinks(
		<TermLink key='back' to='/home' soft>
			&lt; Home
		</TermLink>,
		<TermAction
			key='fill'
			soft
			onClick={() => {
				setFill(!fill)
			}}
		>
			{fill ? 'Fit' : 'Fill'}
		</TermAction>,
		...relativeLinks(id),
	)
}

type Props = {
	searchParams: {
		i: string
	}
}

const Gallery: FC<Props> = ({ searchParams }) => {
	const { termRef, setStage } = useApp()
	let matchId = parseInt(searchParams.i)
	if (isNaN(matchId)) {
		matchId = 0
	}
	const [id, setId] = useState(matchId)
	const [didInit, setDidInit] = useState(false)
	const [fullToggle, setFullToggle] = useState(false)
	const [fill, setFill] = useState(false)

	useEffect(() => {
		const term = termRef.current
		if (!term) {
			return
		}
		term.typeLines([
			[
				() => setStage('intro'),
				() => term.setLinks(),
				{ speed: 24 },
				'> menu gallery',
				() => setLinks(term, id, fill, setFill),
				() => setDidInit(true),
			],
			[{ speed: 0 }, '(tap image to hide terminal)'],
		])
		return () => term.stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termRef])

	useEffect(() => {
		const term = termRef.current
		if (!didInit || !term) {
			return
		}
		setLinks(term, matchId, fill, setFill)
		if (id === matchId) {
			return
		}
		setId(matchId)
	}, [termRef, id, matchId, didInit, fill])

	const { prev, next } = prevNext(id)
	const term = termRef.current
	const fullScreen = []
	const hidden = term?.isHidden()
	const pnClasses = [
		'text-white',
		'p-4',
		'text-3xl',
		'absolute',
		'h-64',
		'w-20',
		'flex',
		'items-center',
		'justify-center',
		'md:hover:bg-black',
		'md:hover:bg-opacity-50',
		'md:hover:text-opacity-100',
	]

	if (hidden) {
		fullScreen.push('flex-1', 'fixed', 'left-0', 'top-0', 'items-center')
		pnClasses.push('text-opacity-0 bg-opacity-0')
	} else {
		if (fill) {
			fullScreen.push('min-w-screen', 'min-h-screen', 'items-stretch')
		} else {
			fullScreen.push('items-center')
		}
		pnClasses.push('bg-black', 'bg-opacity-30')
	}
	const pnClass = pnClasses.join(' ')

	return (
		<div
			className={[
				'flex',
				'flex-col',
				'w-full',
				'h-full',
				'max-w-screen',
				'max-h-screen',
				'bg-green-700',
				'justify-center',
				...fullScreen,
			].join(' ')}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				// Preload previous image
				key={`image-${prev}`}
				src={files[prev].src}
				alt={`Previous Gallery Item`}
				className='fixed w-1 h-1 -left-1 -top-1'
				style={{ zIndex: -30 }}
			/>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				// Preload next image
				key={`image-${next}`}
				src={files[next].src}
				alt={`Next Gallery Item`}
				className='fixed w-1 h-1 -left-1 -top-1'
				style={{ zIndex: -30 }}
			/>

			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				key={`image-${id}`}
				src={files[id].src}
				alt={`Gallery Item ${id}`}
				className={[
					'bg-gray-700',
					'w-full',
					'h-full',
					'flex',
					'flex-1',
					'max-w-screen',
					'max-h-screen',
					fill ? 'object-cover min-w-full min-h-full' : 'object-contain',
					'object-center',
				].join(' ')}
				onClick={() => {
					if (term) {
						term.toggleHidden()
						setFullToggle(!fullToggle)
					}
				}}
			/>

			<Link
				href={`/gallery/?i=${prev}`}
				className={pnClass + ' left-0 rounded-r-3xl'}
				scroll={false}
				shallow
			>
				{'<'}
			</Link>

			<Link
				href={`/gallery/?i=${next}`}
				className={pnClass + ' right-0 rounded-l-3xl'}
				scroll={false}
				shallow
			>
				{'>'}
			</Link>
		</div>
	)
}

export default Gallery
