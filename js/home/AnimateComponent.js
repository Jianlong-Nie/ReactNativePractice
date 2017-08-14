import React, {Component} from 'react';
import {
    Text,View
} from 'react-native';
import FadeInView from "./FadeInView";

export default class AnimateComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center'}} >
                <FadeInView
                    style={{width: 250, height: 50, backgroundColor: 'powderblue',}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        );
    }
}
