import * as appStateTypes from '../constants/appState';

const initaiState = {
  isConnected: null,
  loading: false,
};

export default function (state = initaiState, action) {
  switch (action.type) {
    case appStateTypes.CONNECTED:
      return { ...state, ...action.payload };
    case appStateTypes.LOADING:
      return Object.assign({}, state, { loading: true });
    case appStateTypes.LOADED:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
}
