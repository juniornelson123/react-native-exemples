import React, {Component} from 'react'

import { View, Image, StyleSheet } from 'react-native'

class Topo extends Component{
  render(){
    return(
      <View  style={styles.topo} >
        <Image style={styles.imageTopo} source={require('../../imgs/jokenpo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
topo: {
    flex: 1,
    backgroundColor: '#28B4E5'
   
  },

  imageTopo:{
    alignSelf: 'center',
    flexDirection: 'column'
  },

})

export default Topo