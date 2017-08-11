//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, TouchableHighlight } from 'react-native';


// create a component
const CustomWebView = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <TouchableHighlight onPress={() =>{
                navigation.goBack(null);
               }}>
               <Text style={{height:200, width: 200}}>返回</Text>
            </TouchableHighlight> 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CustomWebView;
