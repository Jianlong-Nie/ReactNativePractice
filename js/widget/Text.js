import React from 'react';
import ReactNative, { StyleSheet, Dimensions, Text ,ReactElement} from 'react-native';

export const Heading = ({style, ...props}) => {
    return <Text style = {[style, styles.h1]} {...props}></Text>;
};

export const Paragraph = ({style, ...props}) => {
    return <Text style = {[styles.p ,style]} {...props} />;
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },

    paragraph: {
        fontSize: 13,
        color: '#777777'
    }
});