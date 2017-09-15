//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import mPubSub from 'pubsub-js';

// create a component
class PubSub extends Component {
    onClick = () =>{
       mPubSub.publishSync('PublishMessage',{message:'come from PubSub'});
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onClick}>
                    <Text>发送广播</Text>
                </TouchableOpacity>
            </View>
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
export default PubSub;
