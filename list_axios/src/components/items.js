import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

class Items extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.image}>
					<Image style={{height: 100, width: 120}} source={{uri: this.props.item.foto }} />
				</View>
				<View style={styles.details}>
					<Text style={styles.textDetails} >{ this.props.item.titulo }</Text>
					<Text >{ this.props.item.data_publicacao }</Text>
					<Text >{ this.props.item.valor }</Text>
					<Text >{ this.props.item.local_anuncio }</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		margin: 10,
		borderWidth: 0.5,
		borderColor: '#666',
		backgroundColor: '#fff'

	},

	image: {
		margin:10

	},

	details: {
	},

	textDetails: {
		color: 'blue',
		fontSize: 16,
		fontWeight: 'bold'
	}

})
export default Items