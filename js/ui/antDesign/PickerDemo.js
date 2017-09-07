//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
import { PickerView } from 'antd-mobile';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];
class PickerDemo extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  };
  render() {
    return (
      <PickerView
        onChange={this.onChange}
        value={this.state.value}
        data={seasons}
        cascade={false}
      />
    );
  }
}

//make this component available to the app
export default PickerDemo;
