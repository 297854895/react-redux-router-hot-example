import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Client from './Client';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Client);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Client', () => {
    render(Client)
  });
}
