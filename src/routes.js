import React from 'react';
import {IndexRoute, Route} from 'react-router';

import NotFound from './containers/NotFound/NotFound';
import Hello from './containers/Hello/Hello';
export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={Hello}>
      { /* Home (main) route */ }
      {/* <IndexRoute component={Index}/> */}
      {/* <Route path="/list" component={List} /> */}
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
