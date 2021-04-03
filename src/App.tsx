import React, { useState } from 'react'
import Term from './Term'
import HomeContent, { HomeContentStage } from './HomeContent'

const App: React.FC = () => {
	const [stage, setStage] = useState<HomeContentStage>('intro')
	const termClasses = [
		'bg-gray-800',
		'md:bg-black',
		'md:bg-opacity-80',
		'py-4',
		'px-8',
		'overflow-y-hidden',
		'fixed',
		'bottom-minus32',
		'md:bottom-minus48',
		'min-h-32',
		'md:min-h-48',
		'max-w-full',
		'left-0',
		'right-0',
		'md:right-auto',
		'flex',
		'flex-col',
		'items-start',
		'justify-end',
	].join(' ')
	return (
		<div className='App'>
			<div className={termClasses}>
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
						{ speed: 200, line: ['>', 500, '> thrive!'], then: () => setStage('thrive0') },
						{ speed: 400, line: [' ', 26000], then: () => setStage('intro') },
						{ speed: 10, line: [' '], then: () => setStage('thrive1') },
						// { speed: 200, line: [' ', 700, '>', 1000, '> menu', 300] },
						// { speed: 10, line: [' '] },
					]}
				/>
			</div>
			<HomeContent
				stage={stage}
				style={{ zIndex: -3 }}
				className='bg-black fixed left-0 top-32 md:top-0 h-minus32 md:h-full w-full object-cover object-center'
			/>
		</div>
	)
}

export default App
