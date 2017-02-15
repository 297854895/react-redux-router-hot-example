import React from 'react';
import {IndexRoute, Route} from 'react-router';

import NotFound from './containers/NotFound/NotFound';
import App from './containers/App/App';
import Index from './containers/Index/Index';
import Num from  './components/Num/Num';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/num" component={Num} />
      <Route path="/not" component={NotFound} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
