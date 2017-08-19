//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBarDemo from './SearchBarDemo';
import SteperDemo from './SteperDemo';
import TextArea from  './TextAreaDemo';
// create a component
class antDesignTwo extends Component {
    render() {
        return (
            <ScrollView>
                <SearchBarDemo />
                <View style={{height: 15, width: 100}} />
                <SteperDemo />
                 <View style={{height: 15, width: 100}} />
                <TextArea />
            </ScrollView>
        );
    }
}

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
export default antDesignTwo;
