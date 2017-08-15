import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableHighlight} from 'react-native';
import {
  Toast,
  Button,
  WingBlank,
  WhiteSpace,
  RefreshControl,
  Popover,
  Icon,
  NavBar,
  Popup,
  List,
  InputItem,
  ListView
} from 'antd-mobile';
import IconScan from '../../images/home/home_scan.png';
import IconBill from '../../images/home/home_bill.png';

const Item = Popover.Item;
const {width, height} = Dimensions.get('window');
let maskProps;
export default class WaterStore extends Component {
  
  showToast = () => {
    Toast.info('Toast测试！！', 1);
  }
  state = {
    visible: true,
    selected: ''
  };

  onSelect = (opt) => {
    // console.log(opt.props.value);
    // this.setState({visible: false, selected: opt.props.value});
  };
  handleVisibleChange = (visible) => {
    this.setState({visible});
  };

  showPop = (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    Popup.show(
      <PopupContent onClose={() => Popup.hide()}/>, {
      animationType: 'slide-down',//'slide-up'从下往上弹出
      maskProps,
      maskClosable: false
    });
  }

  showScan = () => {
    this.refs.mc.refs.menuContext.toggleMenu('m');
  }

  constructor(props) {
    super(props);
  }

  render() {
    let offsetX = -26; // just for pc demo
    // if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {   offsetX
    // = -26; }
    return (
      <View>
        <WingBlank>
          <WhiteSpace/>
          <Button ref='dismiss' onClick={this.showToast} type="primary">
            测试Toast</Button>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Button onClick={this.showPop} type="ghost">
            弹出层从上往下</Button>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Button onClick={this.showScan} type="ghost">
            弹窗测试</Button>
        </WingBlank>
        <WhiteSpace/>
        <Popover
          ref='mc'
          name={'m'}
          overlayClassName="fortest"
          overlayStyle={{
          backgroundColor: 'yellow',
          height: 800,
          width: 800,
          }}
          contextStyle = {{
            backgroundColor:'gray',
            height:height,
            width:width,
          }}
          visible={this.state.visible}
          overlay={<View style = {{backgroundColor:'yellow'}}></View>}
          style={{
          backgroundColor: '#eee',
          height: 500,
          width: 400
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}>
          
        </Popover>

      </View>
    );
  }

}

class PopupContent extends React.Component {
  state = {
    sel: ''
  };
  onSel = (sel) => {
    this.setState({sel});
    this
      .props
      .onClose();
  };
  render() {
    return (
      <List renderHeader={() => `账户总览，选择了：${this.state.sel}`}>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          onClick={() => {
          this.onSel('东吴证券');
        }}>东吴证券</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {
          this.onSel('西吴证券');
        }}>西吴证券</List.Item>
        <InputItem value={this.state.val} onChange={val => this.setState({val})}>输入内容</InputItem>
      </List>
    );
  }
}