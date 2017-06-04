import React, {Component} from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'

const imageEnterprise = require('../imgs/detalhe_empresa.png')

class Enterprise extends Component{
	render(){
		return(
			<View>
				<StatusBar 
					backgroundColor="#ec7148"
				/>
				<View style={style.container}>
					<View style={style.containerHeader}>
						<Image source={imageEnterprise}/>
						<Text style={style.textDetail}>A Empresa</Text>
					</View>
					<View style={style.containerBody}>
						<Text style={style.textDetailBody}>sadasdsadjhaskjdaskjdhkjashdjksahdjhasjkdhjkashdjkashdkjashk
						asdhaskjdhkjashdkjashdkjhsajkdhaskjdkj
						sadhsajkdhkjsahdkjsahk</Text>
					</View>
				</View>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container:{
		padding: 20,
		marginTop: 50,
		justifyContent: "center"
		
	},

	containerHeader:{
		flexDirection: 'row',
		alignItems: 'center'

	},

	containerBody:{
	},

	textDetail:{
		fontSize: 30,
		marginLeft: 20,
		color: '#ec7148'
	},

	textDetailBody:{
		fontSize: 16,
		marginTop: 30
	}
})
export default Enterprise