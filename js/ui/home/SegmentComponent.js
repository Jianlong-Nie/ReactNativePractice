import React, {Component} from 'react';
import {SegmentedControl, WingBlank} from 'antd-mobile';

import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import YanBaoFuWu from '../../../images/home/haier/yanbao-fuwu.png';


export default class SegmentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        }
    }

    onChange = (e) => {
        console.log(`e.nativeEvent.selectedSegmentIndex:${e.nativeEvent.selectedSegmentIndex}`);
        console.log(`e.nativeEvent.value:${e.nativeEvent.value}`);
        this.setState({
            selectedIndex: e.nativeEvent.selectedSegmentIndex
        });
    };
    onValueChange = (value) => {
        console.log(`onValueChange${value}`);
    };

    showSelectedView = () => {
        if (this.state.selectedIndex === 0) {
            console.log('选择了第一个');
            return <Text> 选择了第一个</Text>
        } else if (this.state.selectedIndex === 1) {
            console.log('选择了第2个');
            return <View>
                <Text style={{fontSize: 20, color: 'blue'}}> 选择了第2个</Text>
                <Image resizeMode='contain' source={YanBaoFuWu}/>
            </View>
        } else if (this.state.selectedIndex === 2) {
            console.log('选择了第3个');
            return <Text> 选择了第3个</Text>
        }
    };

    render() {
        return (
            <WingBlank>
                <Text>Simplest</Text>
                <SegmentedControl values={['切换一', '切换二']}/>

                <Text>Disabled</Text>
                <SegmentedControl values={['切换一', '切换二']} disabled/>

                <Text>SelectedIndex</Text>
                <SegmentedControl selectedIndex={1} values={['切换一', '切换二', '切换三']}/>

                <Text>TintColor</Text>
                <SegmentedControl
                    values={['切换一', '切换二', '切换三']}
                    tintColor={'#ff0000'}
                    style={{height: 30, width: 200}}
                />

                <Text>onChange/onValueChange</Text>
                <SegmentedControl
                    tintColor='gray'
                    values={['切换一', '切换二', '切换三']}
                    onChange={this.onChange}
                    onValueChange={this.onValueChange}
                    renderSegmentItem={() => {
                        return <Text>你好</Text>
                    }}
                />
                {
                    this.showSelectedView()
                }

            </WingBlank>
        );
    }

}


// define your styles
const styles = StyleSheet.create({});