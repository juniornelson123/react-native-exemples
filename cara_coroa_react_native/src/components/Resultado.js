import React,{Component} from 'react'
import { View, Image, StyleSheet } from 'react-native'

const cara = require('../imgs/moeda_cara.png')
const coroa = require('../imgs/moeda_coroa.png')

export default class Resultado extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {resultado: ''};
	}

	componentWillMount() {
		var num = Math.floor(Math.random() * 2)
		
		this.setState({resultado: num})
	}

	render(){

		if (this.state.resultado == 0) {
			return(
				<View style={styles.resultado}>
						<Image source={cara}/>
				</View>
			)
		}else if (this.state.resultado == 1) {
			return(
				<View style={styles.resultado}>
						<Image source={coroa}/>
				</View>
			)
		}

	}
}

const styles = StyleSheet.create({
	resultado:{
		flex: 1,
		backgroundColor: '#61bd8c',
		justifyContent: 'center',
		alignItems: 'center'
	}
})