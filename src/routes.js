import React from 'react';
import {IndexRoute, Route} from 'react-router';

import NotFound from './containers/NotFound/NotFound';
import App from './containers/App/App';
import Index from './containers/Index/Index';

export default () => {
  /**
   * Please keep
   routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/index" component={Index} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
