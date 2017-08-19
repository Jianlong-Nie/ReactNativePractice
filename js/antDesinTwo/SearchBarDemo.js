//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarExample extends React.Component {
  state = {
    value: '美食',
    focused: false,
  };
  onChange= (value) => {
    // console.log(value, 'onChange');
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  render() {
    return (<View>
      <WingBlank><Text className="sub-title">普通</Text></WingBlank>
      <SearchBar placeholder="搜索" />
      <WhiteSpace />
      <WingBlank><Text className="sub-title">自动获取光标，支付宝客户端有效</Text></WingBlank>
      <SearchBar placeholder="自动获取光标，支付宝客户端有效" autoFocus />
      <WhiteSpace />
      <WingBlank><Text className="sub-title">手动获取获取光标</Text></WingBlank>
      <SearchBar
        placeholder="手动获取获取光标"
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      />
      <WhiteSpace />
      <WingBlank>
        <Button
          onClick={() => {
            this.setState({
              focused: true,
            });
          }}
          type="primary"
        >点击获取光标</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank><Text className="sub-title">显示取消按钮</Text></WingBlank>
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={this.onChange}
      />
    </View>);
  }
}


//make this component available to the app
export default SearchBarExample;
