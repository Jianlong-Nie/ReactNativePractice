import React, {Component} from 'react';
import FadeInView from "./FadeInView";
import {
    Animated, Easing, Text, View, LayoutAnimation, NativeModules,
    Dimensions, TouchableHighlight, ScrollView, PanResponder,
} from 'react-native';
import YanBaoFuWu from '../../../images/home/haier/yanbao-fuwu.png';
import AnimateDemo from "./AnimateDemo";


// const {UIManager} = NativeModules;
// UIManager.setLayoutAnimationEnabledExperimental &&
// UIManager.setLayoutAnimationEnabledExperimental(true);

const {width, height} = Dimensions.get('window');

export default class AnimateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotateValue: new Animated.Value(0),
            position: new Animated.ValueXY(),
            pressCount: 0,
            showText: ['点我试试', '用力', '下面的图片可以拖动哦', '加把劲啊老铁', '哦了，别点了😳', '再点没了老铁，别点了😳'],
            h: 50,
            w: 250,
            bounceValue: new Animated.Value(0),
            opacityValue: new Animated.Value(0),          // 透明度初始值设为0

        };
        this.state.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null,
                {
                    dx: this.state.position.x,
                    dy: this.state.position.y,
                }

            ])
            // onPanResponderMove: Animated.event([null, {
            //     dx: this.state.position.x, // x,y are Animated.Value
            //     dy: this.state.position.y,
            // }]),
            /*onPanResponderRelease: () => {
                Animated.spring(
                    this.state.position,         // Auto-multiplexed
                    {toValue: {x: 0, y: 0}} // Back to zero
                ).start();
            },*/
        });
    }

    componentDidMount() {

        this.state.bounceValue.setValue(1.2);     // 设置一个较大的初始值
        Animated.parallel([
            Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
                this.state.bounceValue,                 // 将`bounceValue`值动画化
                {
                    toValue: 1,                         // 将其值以动画的形式改到一个较小值
                    friction: 3,                          // 摩擦力
                    tension: -20,                           //张力
                    velocity: 7,
                }
            ),
            Animated.timing(                            // 随时间变化而执行的动画类型
                this.state.opacityValue,                      // 动画中的变量值
                {
                    toValue: 1,                             // 透明度最终变为1，即完全不透明
                    // easing: Easing.back,
                    duration: 2000,
                    easing: Easing.elastic(1),
                }
            ),
            /*Animated.decay(
                this.state.position,
                {   // 滑行一段距离后停止
                    velocity: {x: gestureState.vx, y: gestureState.vy}, // 根据用户的手势设置速度
                    deceleration: 0.997,
                }),*/
            Animated.spring(
                this.state.position,
                {
                    toValue: {x: 0, y: 0}    // 返回到起始点开始
                }),
        ]).start();

    }

    _onPress = () => {
        LayoutAnimation.spring();
        this.setState({
            pressCount: this.state.pressCount + 1,
            w: this.state.w + 10,
            h: this.state.h + 10,
        })

    };

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <AnimateDemo style={{flex: 1}}/>
                <TouchableHighlight
                    onPress={this._onPress}
                >
                    <Animated.Text                            // 可动画化的视图组件
                        style={{
                            fontSize: 28,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: this.state.w, height: this.state.h,
                            backgroundColor: 'powderblue',
                            opacity: this.state.opacityValue,
                            transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                                {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                                {
                                    rotate: this.state.bounceValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg']
                                    })
                                },
                                {
                                    translateX: this.state.bounceValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [300, 0],
                                    })
                                },
                            ]
                        }}

                    >
                        {this.state.showText[this.state.pressCount]}
                    </Animated.Text>
                </TouchableHighlight>
                <Animated.Image  // 可选的基本组件类型: Image, Text, View,（0.45以后ScrollView）
                    source={YanBaoFuWu}
                    {...this.state.panResponder.panHandlers}
                    style={[
                        this.state.position.getLayout(),
                        // this.state.position.getTranslateTransform(),
                        {
                            width: 150, height: 150,
                            transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                                {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                                {
                                    rotate: this.state.bounceValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg']
                                    })
                                },
                            ]
                        }
                    ]}
                />
            </ScrollView>
        );
    }
}
