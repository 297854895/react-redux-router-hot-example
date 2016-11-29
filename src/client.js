
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';

import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';

import useScroll from 'scroll-behavior/lib/useStandardScroll';

import getRoutes from './routes';
import {fromJS} from 'immutable';

import {Public} from './components/index.js';


const history = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(history, fromJS(window.__data));

const Router_ = <Router routes={getRoutes()} history={history} />;

ReactDOM.render(
  <Provider store={store} key="provider">
    {Router_}
  </Provider>,
  dest
);
