import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableHighlight,Platform,} from 'react-native';
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
import IconScan from '../../../images/home/home_scan.png';
import IconBill from '../../../images/home/home_bill.png';
import MorePopWindow from './MorePopWindow.js';

const Item = Popover.Item;
const {width, height} = Dimensions.get('window');
const headH = (Platform.OS == "ios" ? 64 : 44) * width/375;
let maskProps;
export default class WaterStore extends Component {
  
  showToast = () => {
    Toast.info('Toast测试！！', 1);
  }
 
  constructor(props) {
    super(props);
    this.state = {
      showPop: false,
  }
  }
  

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
    // this.refs.mc.refs.menuContext.toggleMenu('m');
    this.setState({ showPop: !this.state.showPop });
  }

  render() {
    return (
      <View style={{backgroundColor:'white'}}>
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
            弹窗测试11</Button>
        </WingBlank>
        <WhiteSpace/>
        <View style={{ position: 'absolute', top: 300, left: 0, width: width, height: height,backgroundColor:'white'}}>
                    <MorePopWindow width={90} height={100} show={this.state.showPop} closeModal={(show) => {
                        this.setState({showPop: show})
                    }} {...this.props}/>
                </View>

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