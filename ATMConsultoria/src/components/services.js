import React, { Component } from 'react'
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native'

const imageService = require('../imgs/detalhe_servico.png')

class Services extends Component{
	render(){
		return(
			<View>	
				<StatusBar 
					backgroundColor="#19d1c8"
				/>
				<View style={style.container}>
					<View style={style.containerHeader}>
						<Image source={imageService}/>
						<Text style={style.textDetail}>Nossos Serviços</Text>
					</View>
					<View style={style.containerBody}>
						<Text style={style.textDetailBody}>-Consultoria</Text>
						<Text style={style.textDetailBody}>-Processos</Text>
						<Text style={style.textDetailBody}>-Acompanhamento de projetos</Text>
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
		color: '#19d1c8'
	},

	textDetailBody:{
		fontSize: 16,
		marginTop: 30
	}
})

export default Services
