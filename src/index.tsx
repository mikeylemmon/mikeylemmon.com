import React from 'react'
import ReactDOM from 'react-dom'
import './fonts/SwedenSansRegular.woff2'
import './fonts/SwedenSansRegular.woff'
import './fonts/SwedenSansBold.woff2'
import './fonts/SwedenSansBold.woff'
import './fonts/NotoMono-Regular.ttf'
import './index.css'
import { dontPurge } from './appStyles'
import App from './App'
import reportWebVitals from './reportWebVitals'

console.log('mikeylemmon.com' || dontPurge)

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
