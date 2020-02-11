import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style/App.scss'
import Landing from './components/Landing'
import List from './components/List'
import User from './components/User'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/users' component={List} />
					<Route exact path='/user/:id' component={User} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
