import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { App } from './App';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
