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
						[{ speed: 150 }, '>', 700, '> # Hello world!', 800],
						[{ speed: 110 }, '>', 1000, '> # My name is Mikey', 300],
						[{ speed: 80 }, '>', 500, '> show-mikey', 300, () => setStage('mikey1')],
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
						['>', 600, `> # I'm an artist and engineer`, 1500],
						['>', 100],
						['>', 300],
						['>', 200],
						['>', 300],
						['>', 1000, `> # I'm into life`],
						['>', 1000],
						['>', 100],
						[{ speed: 200 }, '>', 500, '> thrive!', () => setStage('thrive10')],
						[
							{ speed: 0 },
							'.................',
							{ speed: -1880 },
							'...',
							() => setStage('thrive11'),
							'.',
							{ speed: 0 },
							' ',
						],
						['>', 2000],
						['>', 100],
						['>', 100],
						['>', 100, '> menu'],
						[' '],
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
