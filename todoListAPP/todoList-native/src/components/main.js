import React,{ Component } from 'react'
import { Text, View, StyleSheet, ListView, Button} from 'react-native'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
import consts from '../config/consts'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {getList, taskDone, removeTask} from './taskActions'
import Row from './row'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Main extends Component{
	
	componentWillMount() {
		this.props.getList()
	}

	render(){
		var list = this.props.todo.list || []
		return(
			<View style={style.container}>
				<View>
					<ListView
		        dataSource={ds.cloneWithRows(list)}
		        renderRow={(data) => <Row taskDone={this.props.taskDone} removeTask={this.props.removeTask} data={data}/>}
	      	/>
				</View>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container:{
		marginTop: 60
	}
})

const mapStateToProps = (state) => ({todo: state.todo})
const mapDispatchToProps = (dispatch) => bindActionCreators({getList, taskDone, removeTask}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)