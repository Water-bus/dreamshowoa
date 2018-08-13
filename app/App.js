import React, { Component } from 'react';
import { StatusBar, Platform, NativeModules, Linking, NetInfo, Alert, BackHandler, ToastAndroid } from 'react-native';
import { Provider, connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation';
import SplashScreen from 'react-native-splash-screen'

import AppWithNavigationState from './navigators/appRootStackNav';
import myFetch from './utils/myFetch';
import * as appStateActions from './actions/appState'

import setStore from './store/setStore';

const store = setStore();

export default class App extends Component {
    constructor () {
      super()
      // 设置StatusBar效果
      StatusBar.setBarStyle('dark-content', true)
      this.state = {
        platformType: Platform.OS // 平台系统，只考虑iOS和Android
      }
      if (this.state.platformType === 'android') {
        StatusBar.setBackgroundColor('#fff') // 对iOS无效
      }
    }
  
    componentDidMount () {
      const { dispatch } = this.refs.provider.store;
      // 锁竖屏
      Orientation.lockToPortrait()
  
      setTimeout(() => {
        SplashScreen.hide()
      }, 2000)

      if (Platform.OS === 'android') {
        // 添加返回键监听
        BackHandler.addEventListener('hardwareBackPress', this.onBackHandler)
      }
  
      // 初始化判断网络状态
      NetInfo
        .isConnected
        .fetch()
        .done((isConnected) => {
          // console.log(isConnected)
          dispatch(appStateActions.netConnect({ isConnected }))
        })
  
      // 设置网络监听
      NetInfo
        .isConnected
        .addEventListener('connectionChange', this.handleConnectivityChange)
  
      

    }
    componentWillUnmount () {
      // 移除返回键监听
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler)
      }
      // 移除网络状态监听
      NetInfo
        .isConnected
        .removeEventListener('connectionChange', this.handleConnectivityChange)
    }
  
    openSettings () { // 打开系统设置
      if (this.state.platformType === 'android') {
        NativeModules
          .OpenSettings
          .openNetworkSettings(data => console.log('call back data', data))
      } else {
        Linking
          .openURL('app-settings:')
          .catch(err => console.log('error', err))
      }
    }
  
    // 网络状态变化，注意函数书写方法，这样this指向app组件
    handleConnectivityChange = (isConnected) => {
      // const store = this.refs.provider.store.getState()
      const { dispatch } = this.refs.provider.store
      dispatch(appStateActions.netConnect({ isConnected }))
      if (!isConnected) {
        Alert.alert('提示', '您的网络状态不正常，请检查您的网络', [
          {
            text: '设置',
            onPress: () => {
              this.openSettings()
            }
          }, {
            text: '好',
            onPress: () => {}
          }
        ])
      }
    }
  
    // 安卓物理返回键处理，注意函数书写方法，这样this指向app组件
    onBackHandler = () => {
      const { dispatch } = this.refs.provider.store
      const { nav } = this.refs.provider.store.getState()
      const routesLength = nav.routes.length
      const homeKey = nav.routes[0].key // 首页key值，用与back返回页
      const nowRoute = nav.routes[routesLength - 1].routeName // 获取当前路由名
      console.log(nowRoute)
      if (nowRoute === 'AppTabNav') {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
          // 最近2秒内按过back键，可以退出应用。
          return false // 返回false退出应用
        }
        this.lastBackPressed = Date.now()
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
        return true
      } else if (nowRoute === 'Login') {
        const resetAction = NavigationActions.reset({// 未登录状态返回，返回到home页
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'AppTabNav' })
          ]
        })
        dispatch(resetAction)
        return true
      } else {
        dispatch(NavigationActions.back())
        return true
      }
    }
  
    render () {
      return (
        <Provider store={store} ref='provider'>
          <AppWithNavigationState/>
        </Provider>
      )
    }
  }