import {PropTypes} from 'react';
import {requireNativeComponent, View} from 'react-native';

var settings = {
    name: 'X5WebView',
    propTypes: {
        url: PropTypes.string,
        ...View.propTypes
    }
};

module.exports = requireNativeComponent('X5WebView', settings);