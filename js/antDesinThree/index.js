//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Accordion from './Accordion';
import CardDemo from './CardDemo';
import Caroural from './CarourlDemo';
import IconDemo from './IconDemo';
import TableDemo from './StepsDemo';
// create a component
class antDesinThree extends Component {
    render() {
        return (
            <ScrollView>
                <Accordion />
                <CardDemo />
                <Caroural />
                <IconDemo />
                <TableDemo />
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
export default antDesinThree;
