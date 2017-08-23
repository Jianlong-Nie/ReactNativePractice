import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Platform,
    PanResponder,
    Animated,
} from 'react-native';
import MapView from 'react-native-amap3d';

class MapScene extends React.Component {
    render() {
        return (
            <MapView
                style = {{flex: 1}}
                locationEnabled
                showsCompass
                showsLocationButton
                onLocation={({nativeEvent}) =>
                    console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
            />
        );
    }
}

export default MapScene;