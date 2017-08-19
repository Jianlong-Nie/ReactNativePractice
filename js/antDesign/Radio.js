//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
import { List, Radio, Flex, WhiteSpace } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

class RadioDemo extends React.Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  };
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };
  onChange2 = (value) => {
    console.log('checkbox');
    this.setState({
      value2: value,
    });
  };
  render() {
    const { value, value2, value3, value4 } = this.state;
    const data = [
      { value: 0, label: 'Doctor' },
      { value: 1, label: 'Bachelor' },
    ];
    const data2 = [
      { value: 0, label: 'Basketball', extra: 'Details' },
      { value: 1, label: 'Football', extra: 'Details' },
    ];

    return (<View>
      <List renderHeader={() => 'RadioItem Demo'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
      <WhiteSpace size="lg" />
      <List>
        {data2.map(i => (
          <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)}>
            {i.label}<Text style={{height: 30,width:100}}>{i.extra}</Text>
          </RadioItem>
        ))}
      </List>

      <List renderHeader={() => 'Disabled'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value3 === i.value} onChange={() => this.onChange3(i.value)} disabled>
            {i.label}
          </RadioItem>
        ))}
      </List>
      <WhiteSpace size="lg" />
      <List>
        {data2.map(i => (
          <RadioItem key={i.value} checked={value4 === i.value} onChange={() => this.onChange4(i.value)} disabled>
            {i.label}<Text >{i.extra}</Text>
          </RadioItem>
        ))}
      </List>
      <Flex style={{ padding: 10 }}>
        <Text>用户协议</Text>
        <Flex.Item>
          <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>Agree</Radio>
        </Flex.Item>
      </Flex>
    </View>);
  }
}

//make this component available to the app
export default RadioDemo;
