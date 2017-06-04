import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'

import Toolbar from './toolbar'

const detailClient = require('../imgs/detalhe_cliente.png')
const client1 = require('../imgs/cliente1.png')
const client2 = require('../imgs/cliente2.png')

export default class Client extends Component{
	render(){
		return(
			<View>
	      <StatusBar 
	        backgroundColor = '#b9c941'
	        />
	      <View style={ styles.container }>
	      	
	      	<View style={styles.detail}>
		      	<Image style={ styles.imageDetail } source={ detailClient } />
		      	<Text style={styles.textDetail }>Nossos Clientes</Text>
	      	</View>

	      	<View style={styles.detailClient}>
		      	<Image source={ client1 } />
		      	<Text style={styles.textDetailClient}>Lorem ipsum lin</Text>
	      	</View>
	      	
	      	<View style={styles.detailClient}>
		      	<Image source={ client2 } />
		      	<Text style={styles.textDetailClient}>Lorem ipsum lin</Text>
	      	</View>

	      </View>
	    </View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		padding: 20,
		marginTop: 50

	},

	detail: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	
	detailClient: {
		padding: 20,
		marginTop: 10
	},

	textDetailClient: {
		fontSize: 20
	},

	imageDetail:{
		marginLeft: 10
	},

	textDetail:{
		fontSize: 28,
		alignItems: 'center',
		color: '#b9c941'
	} 



})
