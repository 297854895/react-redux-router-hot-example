/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
// import ApiClient from './helpers/ApiClient';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
// import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import getRoutes from './routes';
import {fromJS} from 'immutable';

import {Public} from './components/index.js';

// const client = new ApiClient();
const history = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(history, fromJS(window.__data));

const Router_ = <Router routes={getRoutes()} history={history} />;

ReactDOM.render(
  <Provider store={store} key="provider">
    <div>
      <Public />
      {Router_}
    </div>
  </Provider>,
  dest
);

// ReactDOM.render(
//   <Provider store={store} key="provider111">
//     <Public />
//   </Provider>,
//   document.getElementById('Public')
// );
