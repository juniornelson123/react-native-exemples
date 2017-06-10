import React,{ Component } from 'react'
import { Text, View, Button, StyleSheet, TextInput} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTask, changeText } from './taskActions'

import axios from 'axios'
import consts from '../config/consts'
import Row from './row'

class Add extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {description: ''};
	}


	addTask(){
		console.log(this.state)
		axios.post(`${consts.URL}todos`, {todo: this.state})
			.then(resp => {
				Actions.pop()
			})
			.catch(error => {
				alert(error)
			})
	}

	render(){
		return(
			<View style={style.container}>
				<TextInput 
				placeholder= 'Nova task'
				onChangeText={(text) => this.props.changeText(text)}
				value={this.props.description}/>

				<Button title="Adicionar" onPress={() => this.props.addTask(this.props.description)} style={style.buttonAdd}/>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container:{
		marginTop: 60,
		marginLeft: 20,
		marginRight: 20,
		padding: 20
	},

	buttonAdd:{
		width: 50
	}
})

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({addTask, changeText}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Add)