import React, {Component} from 'react';
import {
    Animated, Easing, TouchableHighlight, LayoutAnimation, NativeModules
} from 'react-native';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {



    }


    render() {
        return (
            <Animated.View                            // 可动画化的视图组件
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
                }}

            >
                {this.props.children}
            </Animated.View>

        // </TouchableHighlight>
    )
        ;
    }
}
