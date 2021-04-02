import React from 'react'
import './App.css'

const App : React.FC = () => {
	// const video = useRef<HTMLVideoElement>(null)
	// const canvas = useRef<HTMLCanvasElement>(null)
	// const loop =
	// useEffect(() => {
	// 	if (!canvas.current || !video.current) {
	// 		console.warn(`<App> Can't find canvas or video component reference`)
	// 		return
	// 	}
	// 	// const vv = video.current as HTMLVideoElement
	// 	// const cc = canvas.current as HTMLCanvasElement
	// 	const ctx = canvas.current.getContext('2d')
	// })
	return (
		<div className='App'>
			<div style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'left',
				flex: 1,
				flexDirection: 'column',
				// height: '15vh',
				overflow: 'hidden',
				// backgroundColor: 'rgba(0,0,0,0.4)',
				backgroundColor: '#111',
			}}>
				<pre>
					<b>&gt;</b> # Hello world!
					<br/><b>&gt;</b> # My name is Mikey
					<br/><b>&gt;</b> # I'm into life
				</pre>
			</div>
			<video
				autoPlay={true}
				loop={true}
				style={{
					position: 'fixed',
					left: 0,
					minWidth: '100vw',
					minHeight: '100vh',
					zIndex: -1,
				}}
			>
				<source src='/videos/IMG_1391.mov' type='video/mp4' />
			</video>
		</div>
	)
}

export default App
