import { AppRootStackNav } from '../navigators/appRootStackNav'
// import { NavigationActions } from 'react-navigation'

// const initialState = AppRootStackNav.router.getStateForAction(AppRootStackNav.router.getActionForPathAndParams('/home')) // 首页state

export default (state, action) => {
  const nextState = AppRootStackNav.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
