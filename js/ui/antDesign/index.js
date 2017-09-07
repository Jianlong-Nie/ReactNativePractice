//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonExample from './ButtonExample';
import TextDemo from './TextDemo';
import InputItem from './InputItem';
import Radio from './Radio';
import PickerDemo from './PickerDemo';
import AppRange from './RangeWithTooltip';
import Mswitch from './switch';


// create a component
class antDesign extends Component {
    render() {
        return (
            <ScrollView>
                <ButtonExample />
                <TextDemo />
                <View style={{height: 50, width: 20}} />
                <InputItem />
                <View style={{height: 50, width: 20}} />
                <PickerDemo />
                <AppRange />
                <Radio />
                <View style={{height: 50, width: 20}} />
                <Mswitch />
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default antDesign;
