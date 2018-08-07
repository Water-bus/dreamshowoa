import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Home from '../views/Home'
// import Treat from '../views/Treat'
import Laws from '../views/Laws'
import Test from '../views/test/test'
import Center from '../views/Center'

const AppTabNav = TabNavigator({
  Home: { // 首页
    screen: Home,
    path: '/home',
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => <Image style={styles.tabIcon} source={focused ? require('../assets/home-active.png') : require('../assets/home.png')} resizeMode="contain"/>
    }
  },
  // Treat: {
  //   screen: Treat,
  //   navigationOptions: {
  //     tabBarLabel: '假冒查处',
  //     tabBarIcon: ({ focused, tintColor }) => <Image style={styles.tabIcon} source={focused ? require('../assets/treat-active.png') : require('../assets/treat.png')} resizeMode="contain"/>
  //   }
  // },
  Laws: {
    screen: Laws,
    navigationOptions: {
      tabBarLabel: '政策法规',
      tabBarIcon: ({ focused, tintColor }) => <Image style={styles.tabIcon} source={focused ? require('../assets/laws-active.png') : require('../assets/laws.png')} resizeMode="contain"/>
    }
  },
  Test: {
    screen: Test,
    navigationOptions: {
      tabBarLabel: '教育培训',
      tabBarIcon: ({ focused, tintColor }) => <Image style={styles.tabIcon} source={focused ? require('../assets/edu-active.png') : require('../assets/edu.png')} resizeMode="contain"/>
    }
  },
  Center: {
    screen: Center,
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarIcon: ({ focused, tintColor }) => <Image style={styles.tabIcon} source={focused ? require('../assets/center-active.png') : require('../assets/center.png')} resizeMode="contain"/>
    }
  }
}, {
  initialRouteName: 'Home', // 初始页
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#da6161',
    inactiveTintColor: '#818181',
    labelStyle: {
      marginBottom: 6
    },
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#ffffff'
  }
})

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25
  }
})

export default AppTabNav
