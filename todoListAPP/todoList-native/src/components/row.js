import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios'
import consts from '../config/consts'

import { taskDone } from './taskActions'

class Row extends Component{
	labelDone(){
		if (this.props.data.done) {
			return "Terminada"
		}else{
			return "Em andamento"

		}
	}

	labelButton(){
		if (this.props.data.done) {
			return "Reabrir"
		}else{
			return "Finalizar"

		}
	}


	render(){
		return(
			<View style={{flex: 1, flexDirection: 'row',padding: 10}}>
				<View style={{flex: 3}}>
					<Text style={{ fontSize: 20 }}>{this.props.data.description}</Text>
					<Text>{this.labelDone()}</Text>
				</View>
				<View style={{flex: 1}}>
					<Button title={`${this.labelButton()}`} onPress={() => this.props.taskDone(this.props.data)}/>
					<Button title="Deletar" color="red" onPress={() => this.props.removeTask(this.props.data)}/>
				</View>
			</View>
		)
	}
}

export default Row