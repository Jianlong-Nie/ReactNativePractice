/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image
} from 'react-native';
import { Button, TabBar, Icon } from 'antd-mobile';
import Home from './js/home/Home';
import SearchHeader from './js/home/SearchHeader';
import ZhiFubaoIcon from './images/home/zhifubao.png';
import MineIcon from './images/home/mine.png';

// create a component
const tabIcon = props => <Image style={{ height:30, width: 30 }} source={props.image} />;

export default class myapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'hometab',
            hidden: false,
        };
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={ZhiFubaoIcon}
                    selected={this.state.selectedTab === 'hometab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'hometab',
                        });
                    }}
                    data-seed="logId"
                >
                    
                    
                    <Home />
                </TabBar.Item>
                <TabBar.Item
                    title="我的"
                    key="我的"
                    icon={MineIcon}
                    selected={this.state.selectedTab === 'minetab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'minetab',
                        });
                    }}
                >
                    <View />
                </TabBar.Item>
            </TabBar>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: -20,
    }
});

AppRegistry.registerComponent('myapp', () => myapp);
