//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, TouchableHighlight } from 'react-native';


class CustomWebView extends Component {
    static tabBarOptions = {
        tabBarVisible:false,
    }
    render() {
        const { navigation } = this.props;
        return (
           <View style={styles.container}>
           <TouchableHighlight onPress={() =>{
                navigation.goBack(null);
               }}>
               <Text style={{height:200, width: 200}}>返回</Text>
            </TouchableHighlight> 
        </View>
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
