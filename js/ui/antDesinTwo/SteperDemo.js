//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// create a component
import { List, Stepper } from 'antd-mobile';

const { width, height } = Dimensions.get('window');

class SteperDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 3,
      val1: 2,
    };
  }
  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }
  onChange1 = (val1) => {
    // console.log(val);
    this.setState({ val1 });
  }
  render() {
    return (
      <List renderHeader={() => 'Steper Demos'}>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: width, minWidth: 60 }}
              showNumber
              max={10}
              min={1}
              value={this.state.val}
              onChange={this.onChange}
            />}
        >
        Show number value(Use TouchEvent for mobile by default)
        </List.Item>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: width, minWidth: 60 }}
              showNumber
              max={10}
              min={1}
              value={this.state.val1}
              onChange={this.onChange1}
              useTouch={false}
            />}
        >
        Show number value(Use MouseEvent for PC)
        </List.Item>
        <List.Item extra={
          <Stepper
           style={{ width: width, minWidth: 60 }}
            showNumber
            max={10}
            min={1}
            defaultValue={3}
            disabled
          />}
        >
        Disabled
        </List.Item>
      </List>
    );
  }
}
//make this component available to the app
export default SteperDemo;
