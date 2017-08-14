//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, TouchableHighlight } from 'react-native';
import { ActivityIndicator } from 'antd-mobile';

class CustomWebView extends Component {
    static tabBarOptions = {
        tabBarVisible:false,
    };
    constructor(props, context) {
        super(props, context);
        this.state={
            isRefreshing: false,
        }
    }
    
    render() {
        const { navigation } = this.props;
        return (
            <WebView
               source={{uri: 'https://www.baidu.com'}}
               scalesPageToFit={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default CustomWebView;
