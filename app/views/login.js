/**
 登录页面
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class Login extends Component{
  render() {
    return (
      <View style={styles.container}>  
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
    backgroundColor:'#000000'
  },
  abc:{
    backgroundColor:'#666666'
  }
});
