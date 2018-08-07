import { combineReducers } from 'redux';
import userInfo from './user';
import appState from './appState';
import nav from './nav'

const rootReducer = combineReducers({
  nav, // 小写
  appState,
  userInfo
})

export default rootReducer;
