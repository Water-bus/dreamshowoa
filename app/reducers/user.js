import * as actionTypes from '../constants/user';

const initialState = {
  account: '',
  password: '',
  name: '未登录',
  isAuto: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_LOGIN:
      return action.payload;
    case actionTypes.LOGINED:
      return { ...state, ...action.payload };
    case actionTypes.LOGIN_OUT:
      return action.payload;
    case actionTypes.GET_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
