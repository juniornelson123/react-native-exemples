import React, {Component} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class Painel extends Component{
  render(){
    return(
      <View style={styles.painel}>
        <View  style={styles.painelButton}>
          <Button title="Pedra" onPress={() => this.props.playAgain('pedra')}/>
        </View>

        <View style={styles.painelButton} >
          <Button title="Papel" onPress={() => this.props.playAgain('papel')}/>  
        </View>
        
        <View style={styles.painelButton} >
          <Button title="Tesoura" onPress={() => this.props.playAgain('tesoura')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	painel: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10

  },

  painelButton: {
    width: 100

  }

  
})

export default Painel