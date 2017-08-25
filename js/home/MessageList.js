import React, { Component } from 'react';
import { RefreshControl, ListView, Icon, WingBlank, WhiteSpace } from 'antd-mobile';
import { View, Text, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import DiDiImage from '../../images/home/didi.png';
const { width, height } = Dimensions.get('window');

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒1',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒2',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒3',
  },
];
let index = data.length - 1;

let pageIndex = 0;

class MessageList extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.initData = [];
    for (let i = 0; i < 10; i++) {
      this.initData.push(`r${i}`);
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
    };
  }
 componentDidMount() {
    // this.manuallyRefresh = true;
    // setTimeout(() => this.setState({ refreshing: true}), 10);
  }
  onRefresh = () => {
    console.log('onRefresh');
    if (!this.manuallyRefresh) {
      this.setState({ refreshing: true });
    } else {
      this.manuallyRefresh = false;
    }
    setTimeout(() => {
      this.initData = [`ref${pageIndex++}`, ...this.initData];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        refreshing: false,
      });
    }, 1000);
  }
  
  render() {
    const separator = (sectionID, rowID) => (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <View key={rowID} style={styles.item}>
          <WingBlank>
                <View style={styles.itemtitle}>
                    <Image source={DiDiImage} style={styles.iconimage}/>
                    <WingBlank>
                      <View>
                         <Text style={styles.btntitle}>蚂蚁森林</Text>
                         <Text style={[styles.btntitle, {marginTop: 8 }]}>昨天14:22</Text>
                      </View>
                    </WingBlank>
                </View>
          </WingBlank>
          <View>
             <Text style={{ fontSize:18, textAlign: 'center', width: width}}>又有好友收取了你的绿色能量</Text>
             <Text style={[styles.btntitle, {marginTop: 8, textAlign: 'center', width: width }]}>导演在昨天14:22收取</Text>
          </View>
          <TouchableHighlight style={styles.bottomBtn}>
              <Text style={styles.btntitle}>立即收取</Text>
          </TouchableHighlight>
        </View>
      );
    }
    return (
      <ListView
        onScroll={(e)=>{
          console.log('dsfsf');
        }}
        onMoveShouldSetResponder={(e)=>{
                console.log('list事件是否被劫持');
                return true;
            }}
        onStartShouldSetResponderCapture={(e)=>{
                console.log('list事件是否被劫持');
                return true;
            }}
        onMoveShouldSetResponderCapture={(e)=>{
                console.log('list事件是否被劫持');
                return true;
        }}
        dataSource={this.state.dataSource}
        renderRow={row}
        renderSeparator={separator}
        initialListSize={5}
        pageSize={5}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        scrollerOptions={{ scrollbars: true }}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
      />
    );
  }
}

const styles = StyleSheet.create({
  iconimage:{
    height: 35,
    width: 35,
  },
  item:{
    height: 160,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  separator:{
    height: 15,
    backgroundColor:'transparent'
  },
  itemtitle:{
    flexDirection: 'row',
    marginTop: 15,
  },
  bottomBtn:{
    height: 40,
    width: width,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems:'center',
  },
  btntitle:{
    color: 'gray'
  }
});
export default MessageList;
