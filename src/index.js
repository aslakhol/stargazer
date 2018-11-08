import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import theApp from './containers/Root';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <theApp />
      </Provider>
    );
  }
}
