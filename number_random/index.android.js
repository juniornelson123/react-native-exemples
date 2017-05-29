import React, {Component} from 'react'
import { Text, View, Button, AppRegistry } from 'react-native'

class App extends Component{ 
  geraNumeroRandomico = () => {
    var numeroRandomico = Math.random()
    numeroRandomico = Math.floor(numeroRandomico * 10)
    alert(numeroRandomico)
  }

  render(){
    return(
      <View>
        <Text>Meu primeiro app</Text>
        <Button 
          title="Gerar numero randomico"
          onPress = {this.geraNumeroRandomico}
        />
      </View>
    )
  }
} 

AppRegistry.registerComponent('number_random', () => App )