import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import HomeContent, { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'

const linkClasses = [
	'text-white',
	'text-md',
	'underline',
	'md:hover:no-underline',
	'bg-purple-900',
	'md:hover:bg-purple-700',
	'bg-opacity-80',
	'md:hover:bg-opacity-80',
	'rounded-tl-lg',
	'py-3',
	'px-6',
	'fixed',
	'right-0',
	'bottom-0',
	// 'md:rounded-tl-none',
	// 'md:rounded-br-lg',
	// 'md:right-auto',
	// 'md:left-120',
	// 'md:bottom-auto',
	// 'md:top-0',
].join(' ')
type IsMenuProps = { isMenu: boolean }
const LinkMenu: React.FC<IsMenuProps> = ({ isMenu }) => (
	<Link to={isMenu ? '/' : '/menu'} className={linkClasses}>
		{isMenu ? 'Replay intro' : 'Skip to menu'}
	</Link>
)

type HomeProps = { termRef: React.MutableRefObject<Term | null> }

const Home: React.FC<HomeProps> = ({ termRef }) => {
	const [stage, setStage] = useState<HomeContentStage>('intro')
	const match = useRouteMatch()
	const isMenu = match.path === '/menu'

	useEffect(() => {
		console.log(`<Home> useEffect: isMenu=${isMenu}`)
		const term = termRef.current
		if (!term) {
			return
		}
		if (isMenu) {
			term.typeLines([['> menu menu menu']])
			return
		}
		term.typeLines([
			[{ speed: 150 }, () => setStage('intro'), '>', 700, '> # Hello world!', 800],
			[{ speed: 100 }, '>', 1000, '> # My name is Mikey', 300],
			['>', 200, '> show-mikey', 300, () => setStage('mikey1')],
			[
				{ speed: 0 },
				'....',
				2000,
				() => setStage('mikey3'),
				'...',
				1500,
				() => setStage('mikey4'),
				'..',
				1600,
				() => setStage('mikey2'),
				'.',
				1200,
				() => setStage('mikey5'),
				' ',
			],
			['>', 600, `> # I'm an artist and engineer`, 300],
			['>', 1500],
			['>', 300],
			['>', 200],
			['>', 300],
			['>', 1000, `> # I'm into life`],
			['>', 1000],
			['>', 100],
			[{ speed: 200 }, '>', 500, '> thrive!', () => setStage('thrive10')],
			[
				{ speed: 0 },
				'................',
				{ speed: -1880 },
				'..',
				() => setStage('thrive11'),
				'.',
				{ speed: 0 },
				' ',
			],
			['>', 2000],
			['>', 100],
			['>', 100],
			['>', 100, '> menu'],
			['>'],
		])
	}, [termRef, isMenu])

	return (
		<div>
			<HomeContent
				stage={stage}
				style={{ zIndex: -3 }}
				className='bg-gray-700 fixed left-0 top-0 h-full w-full object-cover object-center'
			/>
			<LinkMenu isMenu={isMenu} />
		</div>
	)
}

export default Home
