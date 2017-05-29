/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Topo from './src/components/topo'
import Painel from './src/components/painel'
import Conteudo from './src/components/conteudo'

class app3 extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {playUser: "", playCPU: "", result: ""};
    this.playAgain = this.playAgain.bind(this)
  }

  playAgain(play){
    var playCPU = ["papel", "pedra", "tesoura"]
    var num = Math.floor(Math.random() * 3)
    var result = ""
    //resultados: 0 => empate / 1 => perdeu / 2 => ganhou
    switch(this.result(play, num)){
      case 0:
        result = "Empate";break;
      case 1:
        result = "Perdeu";break;
      case 2:
        result = "Ganhou";break; 
    }
    
    this.setState({playUser: play, playCPU: playCPU[num], result: result})

  }

  result(playUser, playCPU){
    if (playCPU == 0) {

      if (playUser == 'papel') {
      
        return 0
      
      }else if (playUser == 'pedra'){

        return 1

      }else if (playUser == 'tesoura'){

        return 2
      
      }

    }else if(playCPU == 1){

      if (playUser == 'papel') {
      
        return 2
      
      }else if (playUser == 'pedra'){

        return 0

      }else if (playUser == 'tesoura'){

        return 1
      
      }
   
    }else{

       if (playUser == 'papel') {
      
        return 1
      
      }else if (playUser == 'pedra'){

        return 2

      }else if (playUser == 'tesoura'){

        return 0
      
      }

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Topo></Topo>
        <Painel playAgain= {this.playAgain}></Painel>
        <Conteudo result={this.state.result} playCPU={this.state.playCPU} playUser={this.state.playUser}></Conteudo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },

});

AppRegistry.registerComponent('app3', () => app3);
