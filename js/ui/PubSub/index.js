//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import mPubSub from 'pubsub-js';

// create a component
class PubSub extends Component {
    onClick = () =>{
       Alert.alert(
        '点击ok发送广播',
        `广播名字PublishMessage内容是：come from PubSub,此alert来自PubSub组件`,
        [
          {text: 'OK', onPress: () => {mPubSub.publishSync('PublishMessage',{message:'come from PubSub'})}},
        ],
        { cancelable: false }
      )
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
