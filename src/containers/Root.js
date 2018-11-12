import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import TheApp from './TheApp';

const store = configureStore();

// eslint-disable-next-line react/prefer-stateless-function
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <TheApp />
      </Provider>
    );
  }
}

export default Root;
