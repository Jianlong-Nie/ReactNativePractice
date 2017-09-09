//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Spinner from 'react-native-spinkit';
// create a component
//types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 
//'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 
//'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],

const { width, height } = Dimensions.get('window');

// create a component
class ProgressHud extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Spinner type="Circle" size={80} color='lightgray' style={{ marginBottom:100}}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default ProgressHud;

