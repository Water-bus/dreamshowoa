import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { addListener } from '../utils/navHelper'

import Login from '../views/login'
import CheckWork from '../views/checkWork'

export const AppRootStackNav = StackNavigator({
  Login: { // 登陆
    screen: Login
  },
  CheckWork: {
    screen:CheckWork
  }
}, {
  headerMode: 'none', // 头部标题不显示
  navigationOptions: {
    gesturesEnabled: false // 禁止iOS的右划后退动作
  }
})

class AppWithNavigationState extends Component {
  render () {
    const { dispatch, nav } = this.props
    return (
      <AppRootStackNav
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
