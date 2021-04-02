import React, { useState } from 'react'
import Term from './Term'
import HomeContent, { HomeContentStage } from './HomeContent'

const App: React.FC = () => {
	const [stage, setStage] = useState<HomeContentStage>('intro')
	return (
		<div className='App'>
			<div
				className='bg-black bg-opacity-80 py-4 px-8 overflow-y-hidden fixed bottom-3/4 left-0 flex flex-col items-start justify-end'
				style={{ minHeight: '12rem', bottom: 'calc(100% - 12rem)' }}
			>
				<Term
					lines={[
						{ speed: 150, line: ['>', 700, '> # Hello world!', 800] },
						{ speed: 110, line: ['>', 1000, '> # My name is Mikey', 300] },
						{
							speed: 100,
							line: ['>', 1000, '> show-mikey', 300],
							then: () => setStage('mikey1'),
						},
						{ speed: 200, line: [' ', 2000], then: () => setStage('mikey3') },
						{ speed: 100, line: [' ', 1500], then: () => setStage('mikey4') },
						{ speed: 100, line: [' ', 1600], then: () => setStage('mikey2') },
						{ speed: 100, line: [' ', 1200], then: () => setStage('mikey5') },
						{ speed: 100, line: ['>', 200, `> # I'm an artist and engineer`, 1000] },
						{ speed: 100, line: ['>', 100] },
						{ speed: 100, line: ['>', 300] },
						{ speed: 100, line: ['>', 200] },
						{ speed: 100, line: ['>', 200] },
						{ speed: 100, line: ['>', 300] },
						{ speed: 100, line: ['>', 1000, `> # I'm into life`] },
						{ speed: 100, line: ['>', 1000] },
						{ speed: 100, line: ['>', 100] },
						{ speed: 200, line: ['>', 500, '> thrive!'], then: () => setStage('thrive4') },
						{ speed: 400, line: [' ', 12000], then: () => setStage('intro') },
						{ speed: 10, line: [' '], then: () => setStage('thrive3') },
						{ speed: 400, line: [' ', 9000], then: () => setStage('intro') },
						{ speed: 10, line: [' '], then: () => setStage('thrive2') },
						{ speed: 200, line: [' ', 5000], then: () => setStage('intro') },
						{ speed: 10, line: [' '], then: () => setStage('thrive1') },
						{ speed: 200, line: [' ', 700, '>', 1000, '> menu', 300] },
						{ speed: 10, line: [' '] },
					]}
				/>
			</div>
			<HomeContent stage={stage} />
		</div>
	)
	// <video
	// 	autoPlay={true}
	// 	loop={true}
	// 	style={{ zIndex: -1 }}
	// 	className='fixed top-0 left-0 min-h-full min-w-full object-cover'
	// >
	// 	<source src='/videos/IMG_1391.mov' type='video/mp4' />
	// </video>
	// <div className='fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center'>
	// 	<h1 className='text-white font-thick text-8xl'>Hello world!</h1>
	// </div>
}

export default App
