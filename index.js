import React from 'react';
import { AppRegistry, View, StyleSheet, Dimensions } from 'react-native';
import Router from './router';
import { Provider } from 'react-redux';
import store from './js/redux/Store';

const { width, height } = Dimensions.get('window');

const mrouter = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

AppRegistry.registerComponent('myapp', () => mrouter);
