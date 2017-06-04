import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Image, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Toolbar from './toolbar'

const logo = require('../imgs/logo.png')
const menuClient = require('../imgs/menu_cliente.png')
const menuContact = require('../imgs/menu_contato.png')
const menuEmp = require('../imgs/menu_empresa.png')
const menuService = require('../imgs/menu_servico.png')

export default class Main extends Component{
	render(){
		return(
		<View>
	      	<StatusBar 
	        backgroundColor = '#ccc'
	        />
	      	<View style={ styles.container }>
	      		
	      		<Image source={require('../imgs/logo.png')} style={{marginTop: 30}}/>
 			<View style={ styles.row }>
		      	  	<View>
		      	  		<TouchableHighlight onPress={() => Actions.client()}>
					      <Image style={ styles.textColumn } source={ menuClient }/>
		      	  		</TouchableHighlight>
		      	  		<TouchableHighlight onPress={() => Actions.contact()}>
					      <Image style={ styles.textColumn } source={ menuContact }/>
					     </TouchableHighlight>
				      </View>
				      <View>
		      	  		<TouchableHighlight onPress={() => Actions.enterprise()}>
					    	<Image style={ styles.textColumn } source={ menuEmp }/>
					    </TouchableHighlight>	
					    <TouchableHighlight onPress={() => Actions.service()}>
					    	<Image style={ styles.textColumn } source={ menuService }/>
					    </TouchableHighlight>
				      </View>
	      	  </View>
	      	
	      </View>
	    </View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 50,
		marginTop: 50
	},

	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 30
	},

	textColumn:{
		margin: 20

	},

})
