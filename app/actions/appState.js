import * as appStateActions from '../constants/appState';

export function netConnect(payload) {
  return {
    type: appStateActions.CONNECTED,
    payload,
  };
}

export function fetching(payload) {
  return {
    type: appStateActions.LOADING,
    payload,
  };
}

export function fetched(payload) {
  return {
    type: appStateActions.LOADED,
    payload,
  };
}
