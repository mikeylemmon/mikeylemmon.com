import React, { MutableRefObject, SetStateAction, useEffect } from 'react'
import { Link, RouteComponentProps, useRouteMatch, withRouter } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'

const linkClasses = [
	'text-white',
	'font-mono',
	'underline',
	'md:hover:no-underline',
	'bg-purple-900',
	'md:hover:bg-purple-700',
	'bg-opacity-80',
	'md:hover:bg-opacity-80',
	// 'mt-2',
	'py-3',
	'px-6',
	'text-md',

	// 'rounded-tl-lg',
	'rounded-md',

	// 'fixed',
	// 'right-0',
	// 'bottom-0',

	// 'md:rounded-tl-none',
	// 'md:rounded-br-lg',
	// 'md:right-auto',
	// 'md:left-120',
	// 'md:bottom-auto',
	// 'md:top-0',
].join(' ')

type IsMenuProps = { isMenu: boolean }
const LinkMenu: React.FC<IsMenuProps> = ({ isMenu }) => (
	<Link to={isMenu ? '/' : '/home'} className={linkClasses}>
		{isMenu ? 'Replay intro' : 'Skip to menu'}
	</Link>
)

type HomeProps = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}

const Home: React.FC<HomeProps> = ({ termRef, setStage, history }) => {
	const match = useRouteMatch()
	const isMenu = match.path === '/home'

	useEffect(() => {
		console.log(`<Home> useEffect: isMenu=${isMenu}`)
		const term = termRef.current
		if (!term) {
			return
		}
		if (isMenu) {
			term.typeLines([
				[
					() => setStage('thrive11'),
					'> menu',
					() =>
						term.setLinks(
							<Link to='/gallery' className={linkClasses}>
								{'Images and Videos'}
							</Link>,
							<Link to='/songs-and-poems' className={linkClasses}>
								{'Songs and Poems'}
							</Link>,
							<Link to='/projects' className={linkClasses}>
								{'Projects and Experiments'}
							</Link>,
							<Link to='/about' className={linkClasses}>
								{'About Me'}
							</Link>,
							<Link to='/' className={linkClasses}>
								{'Replay intro'}
							</Link>,
						),
				],
			])
			return
		}
		term.typeLines([
			[
				() =>
					term.setLinks(
						<div className='fixed right-2 bottom-4'>
							<Link to='/home' className={linkClasses}>
								{'Skip intro'}
							</Link>
						</div>,
					),
				{ speed: 100 },
				() => setStage('intro'),
				'>',
				500,
				'> # Hello world!',
				300,
			],
			[{ speed: 90 }, '>', 1000, '> # My name is Mikey', 300],
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
			['>', 1500, `> # I'm into life`],
			['>', 1000, { speed: 200 }, '> thrive!', () => setStage('thrive10')],
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
			['>', 100, () => history.push('/home')],
		])
	}, [termRef, isMenu])

	// return <LinkMenu isMenu={isMenu} />
	return null
	// return (
	// 	<div className='m-0 p-8 bg-black bg-opacity-80 w-full'>
	// 		<Link to={isMenu ? '/' : '/home'} className={linkClasses}>
	// 			{isMenu ? 'Replay intro' : 'Skip to menu'}
	// 		</Link>
	// 	</div>
	// )
}

export default withRouter(Home)
