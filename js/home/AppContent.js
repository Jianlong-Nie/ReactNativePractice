//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Grid} from 'antd-mobile';
import ShuizhanImage from '../../images/home/haier/shuizhan.png';
import ZhengChePeiSong from '../../images/home/haier/zhengche-peisong.png';
import PeiSongAnZhuang from '../../images/home/haier/peisonganzhuang.png';
import XiaoGuanJia from '../../images/home/haier/xiaoguanjia.png';
import AnZhuangImage from '../../images/home/haier/peisonganzhuang.png';
import QiangDImage from '../../images/home/haier/qiangdan.png';
import XiaoGuanJiaImage from '../../images/home/haier/xiaoguanjia.png';
import YanBaoFuWu from '../../images/home/haier/yanbao-fuwu.png';
import More from '../../images/home/haier/more.png';


const data = [
    {
        icon: ShuizhanImage,
        text: '水站',
        dest: 'PickerDemo'
    },
    {
        icon: ZhengChePeiSong,
        text: '整车配送',
        dest: 'SegmentComponent'
    },
    {
        icon: PeiSongAnZhuang,
        text: '配送安装',
        dest: 'SegmentComponent'
    },
    {
        icon: XiaoGuanJia,
        text: '小管家',
        dest: 'SegmentComponent'
    },
    {
        icon: QiangDImage,
        text: '抢单',
        dest: 'PickerDemo'
    },
    {
        icon: YanBaoFuWu,
        text: '延保服务',
        dest: 'PickerDemo'
    },
    {
        icon: More,
        text: '更多',
        dest: 'PickerDemo'
    },

];

// create a component
class AppContent extends Component {
    onClick = (dataItem) => {
        const {navigation} = this.props;
        //const { screen } = Contollers.WebView;
        switch (dataItem.text){
            case '小管家' :
                navigation.navigate('WebView', {name: '网页'});
                break;
            case '安装':
                navigation.navigate('InstallView',{name: '安装'});
                break;
            case '整车配送':
                navigation.navigate('SegmentComponent', {name: 'SegmentComponent'});
                break;
            case '延保服务':
                navigation.navigate('AnimateComponent',{name:'AnimateComponent'});
                break;
            case '抢单':
                navigation.navigate('BattleOrder');
                break;
            case '水站':
                navigation.navigate('WaterStore',{name:'测试Toast'});
                break;
            case '小管家':
                navigation.navigate('PickerDemo', {name:'选择器'});
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Grid 
                    data={data} 
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
                                    <Image resizeMode='contain' source={dataItem.icon} style={styles.itemimage}/>
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
