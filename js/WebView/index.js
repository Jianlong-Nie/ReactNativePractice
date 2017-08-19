//import liraries
import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, WebView, TouchableHighlight } from 'react-native';
import { ActivityIndicator } from 'antd-mobile';
import { NavigationActions } from 'react-navigation';
class CustomWebView extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isRefreshing: false,
        };
    }
    
    render() {
        const { navigation } = this.props;
        let murl = 'https://www.baidu.com';
        if (this.props.url) {
            murl = this.props.url;
        }
        if (navigation) {
            if (navigation.state.params.url) {
                murl = navigation.state.params.url;
            }  
        }
       
        return (
            <WebView
                source={{uri: murl}}
                scalesPageToFit={true}
                onNavigationStateChange={(event) => {
                    if (this.props.stateChange) {
                        this.props.stateChange(event);
                    }
                    console.log('onNavigationStateChange:');
                    console.log(event); //打印出event中属性
                }}
            />
        );
    }
}
// CustomWebView.navigationOptions = props =>{
//     const { navigation } = props;
//     return {
//         headerRight: (
//             <Button
//                 title='添加'
//                 color='white'
//                 onPress={() =>{
//                     navigation.dispatch(NavigationActions.back({key: 'id-1503109937977-3'}));
//                     // navigation.goBack('EditWeb');
//                     console.log('只是遇不见那年花开');
//                 }
//                 }
                    
//             />
//         ),};
// };

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
