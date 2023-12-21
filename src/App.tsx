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
import AboutLinks from 'pages/AboutLinks'

const App: React.FC = () => {
	const termRef: MutableRefObject<Term | null> = useRef(null)
	const [stage, setStage] = useState<HomeContentStage>('intro')
	const [needsRestage, setNeedsRestage] = useState<boolean>(false)
	const setHomeStage = () => {
		if (needsRestage) {
			// restage solves some issues with bg video not playing
			// after returning to the page on mobile by briefly
			// disabling the video
			setStage('intro')
			setTimeout(() => setStage('thrive1'), 16)
		} else {
			setStage('thrive1')
		}
	}

	return (
		<Router>
			<Term ref={termRef} />
			<Switch>
				<Route path='/home'>
					<Home title='Home' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route path='/gallery/:id'>
					<Gallery title='Gallery' termRef={termRef} setStage={setStage} />
				</Route>
				<Route path='/gallery'>
					<Gallery title='Gallery' termRef={termRef} setStage={setStage} />
				</Route>
				<Route path='/songs-and-poems/given-time'>
					<GivenTime title='"Given Time"' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route path='/songs-and-poems/a-mighty-growing'>
					<MightyGrowing title='"A Mighty Growing"' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route path='/songs-and-poems/my-winds'>
					<MyBride title='"My Winds"' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route path='/songs-and-poems/bompa'>
					<Bompa title='"Bompa"' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route path='/songs-and-poems'>
					<Songs title='Songs and Poems' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route path='/about/links'>
					<AboutLinks title='Links' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route path='/about'>
					<AboutMe title='About Me' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
				<Route exact path='/'>
					<Intro
						title="Mikey's Website"
						termRef={termRef}
						setHomeStage={setHomeStage}
						setStage={setStage}
					/>
				</Route>
				<Route path='*'>
					<Home title='Home' termRef={termRef} setHomeStage={setHomeStage} />
				</Route>
			</Switch>
			<HomeContent
				stage={stage}
				style={{ zIndex: -10 }}
				className='bg-gray-700 fixed left-0 top-0 h-full w-full object-cover object-center'
				setNeedsRestage={setNeedsRestage}
			/>
		</Router>
	)
}

export default App
