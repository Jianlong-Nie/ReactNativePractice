//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

let SwitchDemo = (props) => {
    const { getFieldProps } = props.form;
    return (
        <List
            renderHeader={() => 'Form switch'}
        >
            <List.Item
                extra={<Switch
                    {...getFieldProps('Switch1', {
                        initialValue: true,
                        valuePropName: 'checked',
                    })}
                    onClick={(checked) => { console.log(checked); }}
                />}
            >On</List.Item>
            <List.Item
                extra={<Switch
                    {...getFieldProps('Switch2', {
                        initialValue: false,
                        valuePropName: 'checked',
                    })}
                    onClick={(checked) => { console.log(checked); }}
                />}
            >Off</List.Item>
            <List.Item
                extra={<Switch
                    {...getFieldProps('Switch3', {
                        initialValue: false,
                        valuePropName: 'checked',
                    })}
                    onClick={(checked) => { console.log(checked); }}
                    disabled
                />}
            >Disabled off</List.Item>
            <List.Item
                extra={<Switch
                    {...getFieldProps('Switch4', {
                        initialValue: true,
                        valuePropName: 'checked',
                    })}
                    onClick={(checked) => { console.log(checked); }}
                    disabled
                />}
            >Disabled on</List.Item>
            <List.Item
                extra={<Switch
                    {...getFieldProps('Switch5', {
                        initialValue: false,
                        valuePropName: 'checked',
                    })}
                    platform="android"
                />}
            >Style for Android</List.Item>
            <List.Item
                extra={<Switch
                    {...getFieldProps('Switch6', {
                        initialValue: true,
                        valuePropName: 'checked',
                    })}
                    platform="ios"
                />}
            >Style for iOS</List.Item>
        </List>
    );
};

SwitchDemo = createForm()(SwitchDemo);

//make this component available to the app
export default SwitchDemo;
