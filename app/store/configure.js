// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

export const history = createHistory();
const router = routerMiddleware(history);

export default function configureStore(initialState: Object) {
  const middleware = applyMiddleware(thunk, router);
  let enhancer;

  if (
    process.env.NODE_ENV !== 'production' ||
    process.env.NODE_ENV !== 'staging'
  ) {
    enhancer = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  } else {
    enhancer = compose(middleware);
  }

  return createStore(rootReducer, initialState, enhancer);
}
