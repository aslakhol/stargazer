import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const store = configureStore();

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
