import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components'

import { Router, Scene } from 'react-native-router-flux'

import Main from './src/components/main'
import Client from './src/components/client'
import Contact from './src/components/contact'
import Enterprise from './src/components/enterprise'
import Service from './src/components/services'

export default class app5 extends Component {
  render() {
    return (
      <Router>
        <Scene key="main" navigationBarStyle={{backgroundColor: '#ccc'}} component={Main} title="ATM Consultoria"/> 
        <Scene key="enterprise" navigationBarStyle={{backgroundColor: '#ec7148'}} component={Enterprise} title="Empresa"/> 
        <Scene key="contact" navigationBarStyle={{backgroundColor: '#68bd8c'}} component={Contact} title="Contatos"/> 
        <Scene key="client" navigationBarStyle={{backgroundColor: '#b9c941'}} component={Client} title="Clientes"/> 
        <Scene key="service" navigationBarStyle={{backgroundColor: '#19d1c8'}} component={Service} title="Serviços"/> 
    	</Router>
    )
  }
}

AppRegistry.registerComponent('app5', () =>{ return app5});
