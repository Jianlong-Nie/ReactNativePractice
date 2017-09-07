//import liraries
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
import {Grid} from 'antd-mobile';
import ShuizhanImage from '../../../images/home/haier/shuizhan.png';
import ZhengChePeiSong from '../../../images/home/haier/zhengche-peisong.png';
import PeiSongAnZhuang from '../../../images/home/haier/peisonganzhuang.png';
import XiaoGuanJia from '../../../images/home/haier/xiaoguanjia.png';
import AnZhuangImage from '../../../images/home/haier/peisonganzhuang.png';
import QiangDImage from '../../../images/home/haier/qiangdan.png';
import XiaoGuanJiaImage from '../../../images/home/haier/xiaoguanjia.png';
import YanBaoFuWu from '../../../images/home/haier/yanbao-fuwu.png';
import More from '../../../images/home/haier/more.png';


const data = [
    {
        icon: ShuizhanImage,
        text: '水站',
        dest: 'PickerDemo',
        type: 0,
    },
    {
        icon: ZhengChePeiSong,
        text: '整车配送',
        dest: 'SegmentComponent',
        type: 0,
    },
    {
        icon: PeiSongAnZhuang,
        text: '配送安装',
        dest: 'SegmentComponent',
        type: 0,
    },
    {
        icon: XiaoGuanJia,
        text: '小管家',
        dest: 'SegmentComponent',
        type: 0,
    },
    {
        icon: QiangDImage,
        text: '抢单',
        dest: 'PickerDemo',
        type: 0,
    },
    {
        icon: YanBaoFuWu,
        text: '延保服务',
        dest: 'PickerDemo',
        type: 0,
    },
    {
        icon: More,
        text: '更多',
        dest: 'PickerDemo',
        type: 0,
    },
    {
        icon: More,
        text: '地图',
        dest: 'PickerDemo',
        type: 0,
    }

];

// create a component
class AppContent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: data
        };
        AsyncStorage.getItem('items', (error, items) => {
            console.log(`输出items${items}`);
            if (items) {
                this.state = {
                    data: JSON.parse(items)
                };
            }
        });

    }

    addAction = (item) => {
        var mdata = this.state.data;
        //   const mitem = {
        //       icon: More,
        //       text: '京东',
        //       dest: '京东商城'
        //   };
        mdata.splice(mdata.length - 1, 0, item);
        this.setState({data: mdata});
        AsyncStorage.setItem('items', JSON.stringify(mdata), () => {
        });
        console.log('返回了连接水电费');
    }
    onClick = (dataItem) => {
        const {navigation, setParams} = this.props;
        switch (dataItem.type) {
            case 0: {
                switch (dataItem.text) {
                    // case '水站' :
                    //     navigation.navigate('WebView', {name: '网页'});
                    //     break;
                    case '配送安装':
                        navigation.navigate('InstallView', {name: '安装'});
                        break;
                    case '整车配送':
                        navigation.navigate('SegmentComponent', {name: 'SegmentComponent'});
                        break;
                    case '延保服务':
                        navigation.navigate('AnimateComponent', {name: 'AnimateComponent'});
                        break;
                    case '抢单':
                        navigation.navigate('BattleOrder');
                        break;
                    case '水站':
                        navigation.navigate('WaterStore',{name:'测试Toast'});
                        break;
                    case '小管家':
                        navigation.navigate('PickerDemo', {name: '选择器'});
                        break;
                    case '更多':
                        // setParams=setParams({add:this.addAction});
                        navigation.navigate('EditWeb', {name: '编辑网页', add: this.addAction});
                        break;
                    case '地图':
                        // setParams=setParams({add:this.addAction});
                        navigation.navigate('MapScene', {name: '地图', add: this.addAction});
                        break;
                    default:
                        break;
                }

            }
                break;
            case 1:
                navigation.navigate('CustomWebView', {name: 'webView', url: dataItem.dest});
                break;
            default:
                break;
        }
        //const { screen } = Contollers.WebView;
    };

    render() {
        return (
            <View style={styles.container}>
                <Grid
                    data={this.state.data}
                    hasLine={false}
                    renderItem={dataItem => {
                        return (
                            <TouchableHighlight
                                activeOpacity={0}
                                underlayColor='transparent'
                                onPress={() => this.onClick(dataItem)}
                                style={styles.itemcontainer}
                            >
                                <View style={styles.itemcontainer}>
                                    <Image resizeMode='contain'
                                           source={dataItem.type === 0 ? dataItem.icon : {uri: dataItem.icon}}
                                           style={styles.itemimage}/>
                                    <Text>{dataItem.text}</Text>
                                </View>
                            </TouchableHighlight>
                        );
                    }
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemimage: {
        height: 30,
        width: 30,
        marginBottom: 10,
    },
});

//make this component available to the app
export default AppContent;
