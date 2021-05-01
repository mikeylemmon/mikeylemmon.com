import React, { MutableRefObject, useRef, useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from 'react-router-dom'
import Term from 'components/Term'
import HomeContent, { HomeContentStage } from 'components/HomeContent'
import Intro from 'pages/Intro'
import Home from 'pages/Home'
import Gallery from 'pages/Gallery'
import Songs from 'pages/Songs'
import GivenTime from 'pages/songs-and-poems/GivenTime'
import MightyGrowing from 'pages/songs-and-poems/MightyGrowing'
import MyBride from 'pages/songs-and-poems/MyBride'
import Bompa from 'pages/songs-and-poems/Bompa'
import AboutMe from 'pages/AboutMe'

const App: React.FC = () => {
	const termRef: MutableRefObject<Term | null> = useRef(null)
	const [stage, setStage] = useState<HomeContentStage>('intro')
	const [needsRestage, setNeedsRestage] = useState<boolean>(false)
	const setHomeStage = () => {
		if (needsRestage) {
			setStage('intro')
			setTimeout(() => setStage('thrive1'), 16)
		} else {
			setStage('thrive1')
		}
	}

	if (!setNeedsRestage) {
		console.warn('<App> No setNeedsRestage?', setNeedsRestage)
	}

	return (
		<>
			<Router>
				<Term ref={termRef} />
				<Switch>
					<Route path='/home'>
						<Home termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
					<Route path='/gallery/:id'>
						<Gallery termRef={termRef} setStage={setStage} />
					</Route>
					<Route path='/gallery'>
						<Gallery termRef={termRef} setStage={setStage} />
					</Route>
					<Route path='/songs-and-poems/given-time'>
						<GivenTime termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
					<Route path='/songs-and-poems/a-mighty-growing'>
						<MightyGrowing termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
					<Route path='/songs-and-poems/my-winds'>
						<MyBride termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
					<Route path='/songs-and-poems/bompa'>
						<Bompa termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
					<Route path='/songs-and-poems'>
						<Songs termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
					<Route path='/about'>
						<AboutMe termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
					<Route exact path='/'>
						<Intro termRef={termRef} setHomeStage={setHomeStage} setStage={setStage} />
					</Route>
					<Route path='*'>
						<Home termRef={termRef} setHomeStage={setHomeStage} />
					</Route>
				</Switch>
			</Router>
			<HomeContent
				stage={stage}
				style={{ zIndex: -10 }}
				className='bg-gray-700 fixed left-0 top-0 h-full w-full object-cover object-center'
				setNeedsRestage={setNeedsRestage}
			/>
		</>
	)
	// <div className='h-screen' />
	// <div className='bg-black bg-opacity-80 text-white text-xs w-full px-8 py-4 flex flex-row place-content-between'>
	// 	<p>mikey at mikeylemmon.com</p>
	// 	<p>Mikey Lemmon &copy; 2021</p>
	// </div>
}

export default App
