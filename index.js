import React from 'react';
import { AppRegistry, View, StyleSheet, Dimensions } from 'react-native';
import Router from './router';
import { Provider } from 'react-redux';
import store from './js/redux/Store';

import dva from './js/model';
import appModel from './js/model/testModel';
import mainModel from './js/model/mainModel';
import progressHud from './js/model/progressHud';

const { width, height } = Dimensions.get('window');

// const mrouter = () => (
//     <Provider store={store}>
//         <Router />
//     </Provider>
// );

const app = dva({
    initialState: {},
    models: [appModel, mainModel, progressHud],
    onError(e) {
        console.log('onError', e);
    },
});
const mrouter = app.start(<Router />);

AppRegistry.registerComponent('myapp', () => mrouter);
