import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
// import Term from 'components/Term'
import HomeContent, { HomeContentStage } from 'components/HomeContent'
import HomeTermIntro from 'components/HomeTermIntro'

const termClasses = [
	// 'bg-gray-800',
	'bg-black',
	'bg-opacity-80',
	'shadow-term',
	'md:rounded-br-lg',
	'py-4',
	'px-8',
	'overflow-y-hidden',
	'fixed',
	'bottom-minus32',
	'md:bottom-minus48',
	'min-h-32',
	'md:min-h-48',
	'left-0',
	// 'max-w-full',
	'w-full',
	'md:w-120',
	'md:right-auto',
	'flex',
	'flex-col',
	'items-start',
	'justify-end',
].join(' ')

type IsMenuProps = { isMenu: boolean }
const LinkMenu: React.FC<IsMenuProps> = ({ isMenu }) => (
	<Link
		to={isMenu ? '/' : '/menu'}
		className='text-white text-md underline md:hover:no-underline bg-purple-900 md:hover:bg-purple-700 bg-opacity-80 md:hover:bg-opacity-80 rounded-bl-lg md:rounded-bl-none md:rounded-br-lg py-3 px-6 fixed right-0 md:right-auto md:left-120 top-32 md:top-0'
	>
		{isMenu ? 'Replay intro' : 'Skip to menu'}
	</Link>
)

// const Term: React.FC<IsMenuProps> = ({ isMenu }) => {
// 	if (isMenu) {
// 		return (
// 		)
// 	}
// 	return
// }

const Home: React.FC = () => {
	const [stage, setStage] = useState<HomeContentStage>('intro')
	const match = useRouteMatch()
	const isMenu = match.path === '/menu'
	return (
		<div>
			{!isMenu && <HomeTermIntro className={termClasses} setStage={setStage} />}
			{isMenu && (
				<div className={termClasses}>
					<pre className='text-white text-lg md:text-xl whitespace-pre-wrap'>
						{'> menu                '}
					</pre>
				</div>
			)}
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
