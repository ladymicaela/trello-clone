import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

import { DnDProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
);

export default Root;