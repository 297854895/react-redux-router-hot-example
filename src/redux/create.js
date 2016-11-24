import { createStore as _createStore, applyMiddleware, compose } from 'redux';
// import createMiddleware from './middleware/clientMiddleware';
// import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';


export default function createStore(history, data) {
  // Sync dispatched route actions to the history
  // const reduxRouterMiddleware = syncHistory(history);

  // const middleware = [createMiddleware(client), reduxRouterMiddleware];

  let finalCreateStore;
  finalCreateStore = applyMiddleware(thunk)(_createStore);

  const reducer = require('./reducers/');
  const store = finalCreateStore(reducer, data);

  // reduxRouterMiddleware.listenForReplays(store);

  return store;
}
