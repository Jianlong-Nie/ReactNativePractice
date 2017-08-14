

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';



export default class SegmentComponent extends Component{

    render(){
        return(
            <Text>SegmentComponent</Text>
        )
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemcontainer: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    itemimage:{
        height: 30,
        width: 30,
        marginBottom: 15,
    },
});