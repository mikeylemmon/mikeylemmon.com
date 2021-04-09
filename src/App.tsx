import React, { MutableRefObject, useRef } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from 'react-router-dom'
import Term from 'components/Term'
import Home from 'pages/Home'

const termClasses = [
	// 'bg-gray-800',
	'bg-black',
	'bg-opacity-80',
	'shadow-term',
	'py-4',
	'px-8',
	'overflow-y-hidden',
	'fixed',
	'bottom-minus28',
	'min-h-28',
	'left-0',
	'w-full',
	'flex',
	'flex-col',
	'items-start',
	'justify-end',
	// 'md:rounded-br-lg',
	// 'md:bottom-minus48',
	// 'md:min-h-48',
	// 'md:w-120',
	// 'md:right-auto',
].join(' ')

const App: React.FC = () => {
	const termRef: MutableRefObject<Term | null> = useRef(null)
	return (
		<>
			<Term ref={termRef} className={termClasses} />
			<Router>
				<Switch>
					<Route path='/menu'>
						<Home termRef={termRef} />
					</Route>
					<Route path='/'>
						<Home termRef={termRef} />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
