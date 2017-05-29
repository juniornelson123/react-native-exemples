import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Icon from '../widgets/icon'

class Conteudo extends Component{
  render(){
    return(
      <View style={styles.conteudo}>    
        <Text style={styles.textResult}>{this.props.result }</Text>
   
        <Icon escolha={this.props.playUser} player="Você"/>
        <Icon escolha={this.props.playCPU} player="Computador" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
	conteudo: {
    flex: 2,
    alignItems: 'center'
  },

  textResult: {
    fontSize: 40,
    height: 60,
    color: 'red',
    fontWeight: 'bold'
  }
})


export default Conteudo