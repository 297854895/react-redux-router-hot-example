import React from 'react';
import {IndexRoute, Route} from 'react-router';

import NotFound from './containers/NotFound/NotFound';
import App from './containers/App/App';
import Index from './containers/Index/Index';
import {Component_} from  './components/index.js';

export default () => {
  /**
   * Please keep
   routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/component" component={Component_} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
