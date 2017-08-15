import React, {Component} from 'react';
import FadeInView from "./FadeInView";
import {
    Animated, Easing, Text, View, LayoutAnimation, NativeModules, Dimensions, TouchableHighlight
} from 'react-native';
import YanBaoFuWu from '../../images/home/haier/yanbao-fuwu.png';


// const {UIManager} = NativeModules;
// UIManager.setLayoutAnimationEnabledExperimental &&
// UIManager.setLayoutAnimationEnabledExperimental(true);

const {width, height} = Dimensions.get('window');

export default class AnimateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressCount: 0,
            showText: ['点我试试', '用力', '加把劲啊老铁', '哦了，别点了😳', '再点没了老铁，别点了😳'],
            h: 50,
            w: 250,
            bounceValue: new Animated.Value(0),
            opacityValue: new Animated.Value(0),          // 透明度初始值设为0
        }
    }

    componentDidMount() {

        this.state.bounceValue.setValue(1.2);     // 设置一个较大的初始值
        Animated.parallel([
            Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
                this.state.bounceValue,                 // 将`bounceValue`值动画化
                {
                    toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                    friction: 1,                          // 摩擦力
                    tension: 50,                           //张力
                }
            ),
            Animated.timing(                            // 随时间变化而执行的动画类型
                this.state.opacityValue,                      // 动画中的变量值
                {
                    toValue: 1,                             // 透明度最终变为1，即完全不透明
                    // easing: Easing.back,
                    duration: 2000,
                }
            ),                                 // 开始执行动画
        ]).start();

        /*Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
            Animated.decay(position, {   // 滑行一段距离后停止
                velocity: {x: gestureState.vx, y: gestureState.vy}, // 根据用户的手势设置速度
                deceleration: 0.997,
            }),
            Animated.parallel([          // 在decay之后并行执行：
                Animated.spring(position, {
                    toValue: {x: 0, y: 0}    // 返回到起始点开始
                }),
                Animated.timing(twirl, {   // 同时开始旋转
                    toValue: 360,
                }),
            ]),
        ]).start();                    // 执行这一整套动画序列*/
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
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
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
                            opacity: this.state.opacityValue
                        }}
                    >
                        {this.state.showText[this.state.pressCount]}
                    </Animated.Text>
                </TouchableHighlight>
                <Animated.Image  // 可选的基本组件类型: Image, Text, View
                    source={YanBaoFuWu}
                    style={{
                        width: 150, height: 150,
                        transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                        ]
                    }}
                />
            </View>
        );
    }
}
