import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Layout from './Layout';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default Root;