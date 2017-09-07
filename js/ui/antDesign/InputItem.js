//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// create a component
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
const { width, height } = Dimensions.get('window');

class MInputItem extends Component {
  state = {
    moneyfocused: false,
  }
  render() {
    return (
      <View>
        <List renderHeader={() => 'Format'}>
          <InputItem
            
            type="money"
            placeholder="money keyboard"
            clear
            maxLength={10}
            locale={{ confirmLabel: '计算' }}
          />
          <InputItem placeholder="22">普通键盘</InputItem>
          <InputItem
           
            type="money"
            placeholder="money format"
            onFocus={() => {
              this.setState({
                moneyfocused: false,
              });
            }}
            focused={this.state.moneyfocused}
          >数字键盘</InputItem>
          <List.Item>
            <View
              style={{ width: width }}
              onClick={() => {
                this.setState({
                  moneyfocused: true,
                });
              }}
            >
             
            </View>
          </List.Item>
          <InputItem
            
              
            type="money"
            placeholder="money format natural"
          >正整数</InputItem>
        </List>
      </View>
    );
  }
}


//make this component available to the app
export default MInputItem;
