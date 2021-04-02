import React from 'react'
import Term from './Term'

const App: React.FC = () => {
	return (
		<div className='App'>
			<div
				className='bg-black bg-opacity-80 py-4 px-8 overflow-y-hidden fixed bottom-3/4 left-0 right-0 flex flex-col items-start justify-end'
				style={{ minHeight: '25%' }}
			>
				<Term
					lines={[
						[150, '>', 700, '> # Hello world!', 1000],
						[110, '>', 1000, '> # My name is Mikey', 700],
						[100, '>', 1000, '> show-mikey', 300],
						[200, '>', 5000],
						[100, '>', 100],
						[100, '>', 100],
						[130, '>', 200, `> # I'm into life`],
						[700, '>', 1000, '> thrive'],
						[100, '>'],
					]}
				/>
			</div>
			<video
				autoPlay={true}
				loop={true}
				style={{ zIndex: -1 }}
				className='fixed top-0 left-0 min-h-full min-w-full object-cover'
			>
				<source src='/videos/IMG_1391.mov' type='video/mp4' />
			</video>
		</div>
	)
	// <div className='fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center'>
	// 	<h1 className='text-white font-thick text-8xl'>Hello world!</h1>
	// </div>
}

export default App
