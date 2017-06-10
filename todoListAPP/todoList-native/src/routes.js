import React, {Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

import Main from './components/main'
import Add from './components/add'

class Routes extends Component{
	
	render(){

		return(
			<Router>
				<Scene key="root">
					<Scene key="main" component={Main} title="TodoList" rightTitle="Adicionar" onRight={()=>Actions.add()}/>
					<Scene key="add" component={Add} title="Adicionar" />
				</Scene>
			</Router>
		)
	}
}

export default Routes