import React, { MutableRefObject, useRef, useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from 'react-router-dom'
import Term from 'components/Term'
import HomeContent, { HomeContentStage } from 'components/HomeContent'
import Home from 'pages/Home'

const App: React.FC = () => {
	const termRef: MutableRefObject<Term | null> = useRef(null)
	const [stage, setStage] = useState<HomeContentStage>('intro')

	return (
		<>
			<Router>
				<Term ref={termRef} />
				<Switch>
					<Route exact path='/home'>
						<Home termRef={termRef} setStage={setStage} />
					</Route>
					<Route path='/'>
						<Home termRef={termRef} setStage={setStage} />
					</Route>
				</Switch>
			</Router>
			<HomeContent
				stage={stage}
				style={{ zIndex: -3 }}
				className='bg-gray-700 fixed left-0 top-0 h-full w-full object-cover object-center'
			/>
			<div className='h-screen' />
			<div className='bg-black bg-opacity-80 text-white text-xs w-full px-8 py-4 flex flex-row place-content-between'>
				<p>Mikey Lemmon &copy; 2021</p>
				<p>mikey at mikeylemmon.com</p>
			</div>
		</>
	)
}

export default App
