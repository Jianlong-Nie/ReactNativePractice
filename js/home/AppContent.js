//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Grid} from 'antd-mobile';
import AnZhuangImage from '../../images/home/haier/peisonganzhuang.png';
import QiangDImage from '../../images/home/haier/qiangdan.png';
import ShuizhanImage from '../../images/home/haier/shuizhan.png';
import XiaoGuanJiaImage from '../../images/home/haier/xiaoguanjia.png';
import YanBaoFuWu from '../../images/home/haier/yanbao-fuwu.png';
import ZhengChePeiSong from '../../images/home/haier/zhengche-peisong.png';


const data = [
    {
        icon: AnZhuangImage,
        text: '安装',
    },
    {
        icon: QiangDImage,
        text: '抢单',
    },
    {
        icon: ShuizhanImage,
        text: '水站',
    },
    {
        icon: XiaoGuanJiaImage,
        text: '小管家',
    },
    {
        icon: YanBaoFuWu,
        text: '延保服务',
    },
    {
        icon: ZhengChePeiSong,
        text: '整车配送',
    },

];

// create a component
class AppContent extends Component {
    onClick = (dataItem) => {
        const {navigation} = this.props;
        //const { screen } = Contollers.WebView;
        switch (dataItem.text){
            case 'xxxxxxx' :
                navigation.navigate('WebView', {name: '网页'});
                break;
            case '安装':
                navigation.navigate('InstallView',{name: '安装'});
            case '整车配送':
                navigation.navigate('SegmentComponent', {name: 'SegmentComponent'});
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
                    renderItem={(dataItem) => {
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
        marginBottom: 15,
    },
});

//make this component available to the app
export default AppContent;
