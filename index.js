import React from 'react';
import { AppRegistry } from 'react-native';
import Router from './router';
import { Provider } from 'react-redux';
import store from './js/redux/Store';

const mrouter = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

AppRegistry.registerComponent('myapp', () => mrouter);
