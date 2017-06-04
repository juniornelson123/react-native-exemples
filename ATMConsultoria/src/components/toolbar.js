import React, { Component } from 'react'

import { Text, View,  StyleSheet } from 'react-native'
const colorToolbar = ""
class Toolbar extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	  colorToolbar = this.props.colorToolbar || "#ccc"
	  colorText = this.props.colorText || "#000"
	}

	render(){
		return(
			<View style={ [styles.toolbar,{ backgroundColor: colorToolbar }]} >
				<Text style={ [styles.toolbarText, { color: colorText } ] }>ATM Consultoria</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	toolbar: {
		padding: 10,
		elevation: 1,
		height: 60
	},

	toolbarText:{
		flex: 1,
		fontSize: 18,
		textAlign: 'center'
	}
})

export default Toolbar