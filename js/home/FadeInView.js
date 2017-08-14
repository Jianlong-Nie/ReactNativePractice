import React, { Component } from 'react';
import {
    Animated,
} from 'react-native';

export default class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
            }
        ).start();                                  // 开始执行动画

        // Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
        //     Animated.decay(position, {   // 滑行一段距离后停止
        //         velocity: {x: gestureState.vx, y: gestureState.vy}, // 根据用户的手势设置速度
        //         deceleration: 0.997,
        //     }),
        //     Animated.parallel([          // 在decay之后并行执行：
        //         Animated.spring(position, {
        //             toValue: {x: 0, y: 0}    // 返回到起始点开始
        //         }),
        //         Animated.timing(twirl, {   // 同时开始旋转
        //             toValue: 360,
        //         }),
        //     ]),
        // ]).start();
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
        );
    }
}
