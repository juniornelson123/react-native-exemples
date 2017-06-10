import React,{ Component } from 'react'
import { Text, View } from 'react-native'

import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import Routes from './routes'
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
class App extends Component{
	render(){
		return(
			<Provider store={store}>
				<Routes />
			</Provider>
		)
	}
}

export default App