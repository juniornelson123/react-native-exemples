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
  View
} from 'react-native';
import ListItems from './src/components/listItems'

export default class app4 extends Component {
  render() {
    return (
      <ListItems style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
  
});

AppRegistry.registerComponent('app4', () => app4);
