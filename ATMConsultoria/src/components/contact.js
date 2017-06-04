import React, {Component} from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'

const imageMsg = require("../imgs/detalhe_contato.png")
class Contact extends Component{
	render(){
		return(
			<View>	
				<StatusBar 
					backgroundColor="#68bd8c"
				/>
				<View style={style.container}>
					<View style={style.containerHeader}>
						<Image source={imageMsg}/>
						<Text style={style.textDetail}>Contatos</Text>
					</View>
					<View style={style.containerBody}>
						<Text style={style.textDetailBody}>Tel: (11) 3244-3322</Text>
						<Text style={style.textDetailBody}>Cel: (11) 9999-3132</Text>
						<Text style={style.textDetailBody}>Email: junior123nelson@gmail.com</Text>
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
		color: '#68bd8c'
	},

	textDetailBody:{
		fontSize: 16
	}
})
export default Contact