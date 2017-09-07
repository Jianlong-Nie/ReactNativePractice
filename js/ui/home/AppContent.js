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
import { Grid } from 'antd-mobile';
import ShuizhanImage from '../../../images/home/haier/shuizhan.png';
import ZhengChePeiSong from '../../../images/home/haier/zhengche-peisong.png';
import PeiSongAnZhuang from '../../../images/home/haier/peisonganzhuang.png';
import XiaoGuanJia from '../../../images/home/haier/xiaoguanjia.png';
import AnZhuangImage from '../../../images/home/haier/peisonganzhuang.png';
import QiangDImage from '../../../images/home/haier/qiangdan.png';
import XiaoGuanJiaImage from '../../../images/home/haier/xiaoguanjia.png';
import YanBaoFuWu from '../../../images/home/haier/yanbao-fuwu.png';
import More from '../../../images/home/haier/more.png';


// const data = [
//     {
//         icon: ShuizhanImage,
//         text: '水站',
//         dest: 'PickerDemo',
//         type: 0,
//     },
//     {
//         icon: ZhengChePeiSong,
//         text: '整车配送',
//         dest: 'SegmentComponent',
//         type: 0,
//     },
//     {
//         icon: PeiSongAnZhuang,
//         text: '配送安装',
//         dest: 'SegmentComponent',
//         type: 0,
//     },
//     {
//         icon: XiaoGuanJia,
//         text: '小管家',
//         dest: 'SegmentComponent',
//         type: 0,
//     },
//     {
//         icon: QiangDImage,
//         text: '抢单',
//         dest: 'PickerDemo',
//         type: 0,
//     },
//     {
//         icon: YanBaoFuWu,
//         text: '延保服务',
//         dest: 'PickerDemo',
//         type: 0,
//     },
//     {
//         icon: More,
//         text: '更多',
//         dest: 'PickerDemo',
//         type: 0,
//     },
//     {
//         icon: More,
//         text: '地图',
//         dest: 'PickerDemo',
//         type: 0,
//     }

// ];

// create a component
class AppContent extends Component {
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     data: data
        // };
        AsyncStorage.getItem('items', (error, items) => {
            console.log(`输出items${items}`);
            if (items) {
                this.state = {
                    data: JSON.parse(items)
                };
            }
        });

    }
    
    shouldComponentUpdate(nextProps, nextState) {
       if (this.props.mainReducer !== nextProps.mainReducer) {
           return true;
       } 
       return false;
    }
    
    addAction = (item) => {
        var mdata = this.state.data;
        mdata.splice(mdata.length - 1, 0, item);
        this.setState({data: mdata});
        AsyncStorage.setItem('items', JSON.stringify(mdata), () => {
        });
    }
    onClick = (dataItem) => {
        const {navigation, setParams} = this.props;
        switch (dataItem.type) {
            case '1': 
                navigation.navigate(dataItem.key, {name: item.appName});
                break;
            case '2':
                navigation.navigate('CustomWebView', {name: 'webView', url: dataItem.dest});
                break;
            default:
                break;
        }
    };

    render() {
        let apps = [];
        const { homeApps } = this.props.mainReducer;
        if (homeApps !== undefined) {
           apps = homeApps.filter((item) => item.type === '1'); 
        }
        return (
            <View style={styles.container}>
                <Grid
                    data={apps}
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
                                           source={{uri: dataItem.appIcon}}
                                           style={styles.itemimage}/>
                                    <Text>{dataItem.appName}</Text>
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
