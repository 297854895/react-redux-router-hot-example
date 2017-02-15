import { createStore as _createStore, applyMiddleware, compose } from 'redux';
// import createMiddleware from './middleware/clientMiddleware';
// import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';


export default function createStore(history, data) {
  // Sync dispatched route actions to the history
  // const reduxRouterMiddleware = syncHistory(history);

  // const middleware = [createMiddleware(client), reduxRouterMiddleware];


  let finalCreateStore;
  // if (process.env.NODE_ENV !== 'production') {
  //   const { persistState } = require('redux-devtools');
  //   const DevTools = require('../containers/DevTools/DevTools');
  //   finalCreateStore = compose(
  //     // applyMiddleware(...middleware),
  //     applyMiddleware(thunk),
  //     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  //   )(_createStore);
  // } else {
    // finalCreateStore = applyMiddleware(...middleware)(_createStore);
    finalCreateStore = applyMiddleware(thunk)(_createStore);
  // }
  const reducer = require('./reducers/');

  const store = finalCreateStore(reducer.default, data);

  // reduxRouterMiddleware.listenForReplays(store);

  return store;
}
