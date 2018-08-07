import * as userinfoActions from '../constants/user';

export function initLogin() {
  return {
    type: userinfoActions.INIT_LOGIN,
    payload: {
      account: '',
      password: '',
      name: '未登录',
      isAuto: false,
    },
  };
}

export function login(payload) {
  return {
    type: userinfoActions.LOGINED,
    payload,
  };
}

export function loginOut() {
  return {
    type: userinfoActions.LOGIN_OUT,
    payload: {
      account: '',
      password: '',
      name: '未登录',
      isAuto: false,
    },
  };
}

export function getInfo(payload) {
  return {
    type: userinfoActions.GET_INFO,
    payload,
  };
}
