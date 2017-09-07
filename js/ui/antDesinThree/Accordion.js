//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


import { List, Badge } from 'antd-mobile';

const { height, width } = Dimensions.get('window');
const BadgeDemo = () => (
    <List>
        <List.Item extra="Extra content" arrow="horizontal">
            <Badge dot>
                <View style={{ width: 52, height: 52, background: '#ddd', display: 'none' }} />
            </Badge>
            <Text style={{ marginLeft: 12 }}>Dot Badge</Text>
        </List.Item>
        <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
            extra={<Badge text={77} overflowCount={55} />}
            arrow="horizontal"
        >
      Content
        </List.Item>
        <List.Item><Badge text={'促'} corner>
            <Text className="corner-badge">Use corner prop</Text>
        </Badge></List.Item>
        <List.Item className="special-badge" extra={<Badge text={'促'} />}>
      Custom corner
        </List.Item>
        <List.Item extra="Extra" arrow="horizontal">
            <Badge text={'0'} style={{ marginLeft: width-70 }}/>
            <Badge text={'new'} style={{ marginLeft: width-70 }} />
        </List.Item>
        <List.Item>
      Marketing:
            <Badge text="减" hot style={{ marginLeft: width-70 }} />
            <Badge text="惠" hot style={{ marginLeft: width-70 }} />
            <Badge text="免" hot style={{ marginLeft: width-70 }} />
            <Badge text="反" hot style={{ marginLeft: width-70 }} />
            <Badge text="HOT" hot style={{ marginLeft: width-70 }} />
        </List.Item>
        <List.Item>
      Customize
            <Badge text="券" style={{ marginLeft: width-70,marginBottom:20, padding: 6, backgroundColor: '#f19736', borderRadius: 2 }} />
            <Badge text="NEW" style={{ marginLeft: width-70, padding: 6,marginBottom:20, backgroundColor: '#21b68a', borderRadius: 2 }} />
            <Badge text="自动缴费"
                style={{
                    marginLeft: width-70,
                    padding: 6,
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    color: '#f19736',
                    borderWidth: 1,
                    borderColor: '#f19736'
                }}
            />
        </List.Item>
    </List>
);



//make this component available to the app
export default BadgeDemo;
