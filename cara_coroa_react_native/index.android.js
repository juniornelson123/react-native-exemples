import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import Principal from './src/components/Principal'
import OutrosJogos from './src/components/OutrosJogos'
import SobreJogo from './src/components/SobreJogo'
import Resultado from './src/components/Resultado'

export default class app6 extends Component {
  render() {
    return (
      <Router sceneStyle={{paddingTop: 50}}>
        <Scene key="principal" component={Principal}  initil title="Cara ou Coroa" navigationBarStyle={{ backgroundColor: '#ccc' }} />
        <Scene key="sobrejogo" component={SobreJogo} title="Sobre o Jogo"/>
        <Scene key="outrosjogos" component={OutrosJogos} title="Outros Jogos"/>
        <Scene key="resultado" component={Resultado} title="Resultado"/>
      </Router>
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);