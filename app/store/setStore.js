import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import { navMiddleware } from '../utils/navHelper';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const promise = promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
});

export default function setStore() {
  const middleware = [navMiddleware, thunk, promise, logger];
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
}
