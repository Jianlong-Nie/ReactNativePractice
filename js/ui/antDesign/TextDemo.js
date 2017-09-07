//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class TextDemo extends React.Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'college diploma' },
    ];
    return (<View>
      <List renderHeader={() => 'CheckboxItem demo'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>

      <Flex>
        <Flex.Item>
          <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
           
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </View>);
  }
}
//make this component available to the app
export default TextDemo;
