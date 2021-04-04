import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from 'react-router-dom'
import Home from 'pages/Home'

const App: React.FC = () => (
	<Router>
		<Switch>
			<Route path='/menu' component={Home} />
			<Route path='/' component={Home} />
		</Switch>
	</Router>
)

export default App
