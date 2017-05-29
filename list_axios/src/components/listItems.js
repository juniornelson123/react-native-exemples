import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import axios from 'axios'

import Items from './items'

class ListItems extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {list: []};
	}
	componentWillMount() {
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then(resp => this.setState({list: resp.data}))
			.catch(resp => { console.log("Erro ao solicitar itens") })
	}
	render(){
		console.log("Objeto redenrizado")
		return(
			<ScrollView style={{ backgroundColor: '#ddd' }}>
				{this.state.list.map((item) => {
					console.log(item)
					return (<Items item={item} key={item.titulo}/>)
				})}
			</ScrollView>
		)
	}
}
export default ListItems