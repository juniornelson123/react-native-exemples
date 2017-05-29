import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

class Icon extends Component{
  render(){
      if (this.props.escolha === 'papel') {
        return(
          <View>
            <Text>{this.props.player}</Text>
            <Image source={require('../../imgs/papel.png')}/>
          </View>
        )
      }else if(this.props.escolha === 'pedra'){
        return(
          <View>
            <Text>{this.props.player}</Text>
            <Image source={require('../../imgs/pedra.png')}/>
          </View>
        )
      }else if(this.props.escolha === 'tesoura'){
        return(
          <View>
            <Text>{this.props.player}</Text>
            <Image source={require('../../imgs/tesoura.png')}/>
          </View>
        )
      }
      return false
      
  }
} 

export default Icon