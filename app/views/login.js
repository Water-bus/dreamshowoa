/**
 登录页面
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default class Login extends Component{
  render() {
    return (
      <View style={styles.container}>  
          <Image source={require('../img/loginBackground.png')} style={styles.backgroundImage} />
          <View style={styles.abc}>  
            <Text>Look, I'm safe!</Text>  
          </View>  
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:null,
    height:null,
    backgroundColor:'rgba(0,0,0,0)',
  }
});
