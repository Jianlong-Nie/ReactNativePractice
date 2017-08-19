//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, Flex, WingBlank } from 'antd-mobile';

/* eslint global-require: 0 */
const ButtonExample = () => (
    <WingBlank>
        <View >
            <View>
                <View style={{height: 15,width: 100}}/>
                <Button className="btn" type="primary" style={{ marginBottom: 20 }}>primary button</Button>

                <Button style={{ marginBottom: 20 }} className="btn" disabled onClick={e => console.log(e)}>
          disabled button
                </Button>
                <Button style={{ marginBottom: 20 }} className="btn" loading>loading button</Button>
                <Button style={{ marginBottom: 20 }} className="btn" icon="check-circle-o">with icon</Button>
                <Button style={{ marginBottom: 20 }} className="btn" icon={require('../../images/home/chepiao.png')}>
          with local icon
                </Button>

                <View style={{ height: 20 }} />
                {/* <Button className="btn" activeStyle={false}>无点击反馈</Button> */}
                {/* <Button className="btn" activeStyle={{ backgroundColor: 'red' }}>自定义点击反馈 style</Button> */}

                <Text style={{ margin: 15, color: '#999'}}>inline / small</Text>
                <Flex style={{ marginBottom: 20 }}>
                    <Button type="primary" inline style={{ marginRight: 10 }}>inline</Button>
                    <Button type="ghost" inline size="small" style={{ marginRight: 10 }}>inline small</Button>
                    <Button type="primary" inline size="small">inline small</Button>
                </Flex>
            </View>
        </View>
    </WingBlank>
);
export default ButtonExample;
