import React from 'react'
import './App.css'

const App: React.FC = () => {
	return (
		<div className='App'>
			<div
				className='bg-black bg-opacity-80 py-4 px-8 overflow-y-hidden fixed bottom-3/4 left-0 right-0 flex flex-col items-start justify-end'
				style={{ minHeight: '25%' }}
			>
				<pre className='text-xl text-gray-300'>
					<br />
					<b>&gt;</b> # Hello world!
					<br />
					<b>&gt;</b> # My name is Mikey
					<br />
					<b>&gt;</b> # I'm into life
				</pre>
			</div>
			<video
				autoPlay={true}
				loop={true}
				style={{ zIndex: -1 }}
				className='fixed top-0 left-0 min-h-full min-w-full object-cover'
			>
				<source src='/videos/IMG_1391.mov' type='video/mp4' />
			</video>
			<div className='fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center'>
				<h1 className='text-white font-thick text-8xl'>Hello world!</h1>
			</div>
		</div>
	)
}

export default App
