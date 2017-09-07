import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
// import Spinner from 'react-native-spinkit';

class LoadingView extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUpdate(nextProps) {
        if (nextProps !== this.props) {
            this.forceUpdate();
        }
    }

    render() {
    // var type = ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt']
        return(
            <View style = {styles.spContain}>
                <View style = {styles.spinner}>
                </View>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    spinner: {
        width:100,
        height: 100,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.7,
        borderRadius:5
    },
    spContain: {
        position: 'absolute',
        left: 0,
        width: width,
        height: height - 64,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
global.LoadingView = LoadingView;