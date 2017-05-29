import React, {Component} from 'react'
import {Text, View, Alert, AppRegistry, Button, Image, TouchableOpacity} from 'react-native'

const Style = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#548530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20

  }
}

class App extends Component {
  getFrase(){
    var num = Math.floor(Math.random() * 6)
    
    const frases = ["Não existe coincidência, apenas a ilusão de uma coincidência."
    , "O impossível é apenas uma grande palavra usada por gente fraca, que prefere viver no mundo como ele está, em vez de usar o poder que tem para mudá-lo, melhorá-lo. Impossível não é um fato. É uma opinião. Impossível não é uma declaração. É um desafio. Impossível é hipotético. Impossível é temporário. O impossível não existe.",
    "Deus não coloca um peso nos ombros de um homem se souber que ele não pode carregá-lo.",
    "Aquele que não tem coragem de assumir riscos não alcançará nada na vida",
     "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
     "Pedras no caminho? Eu guardo todas. Um dia vou construir um castel o."]
    
    alert(frases[num])
  }

  render(){
    
    return (

      <View style={Style.main}>
        <Image source={require('./imgs/logo.png')}/>
        
        <TouchableOpacity 
          style={Style.button} 
          onPress={this.getFrase}>

          <Text style={Style.buttonText}>Nova Frase</Text>
        
        </TouchableOpacity>
      </View>
    )
  }
}

AppRegistry.registerComponent('app2', ()=>(App) )