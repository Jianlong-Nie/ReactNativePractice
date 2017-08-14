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
        dest: 'InstallView'
    },
    {
        icon: QiangDImage,
        text: '抢单',
        dest: 'PickerDemo'
    },
    {
        icon: ShuizhanImage,
        text: '水站',
        dest: 'PickerDemo'
    },
    {
        icon: XiaoGuanJiaImage,
        text: '小管家',
        dest: 'PickerDemo'
    },
    {
        icon: YanBaoFuWu,
        text: '延保服务',
        dest: 'PickerDemo'
    },
    {
        icon: ZhengChePeiSong,
        text: '整车配送',
        dest: 'SegmentComponent'
    },

];

// create a component
class AppContent extends Component {
    onClick = (dataItem) => {
        const {navigation} = this.props;
        //const { screen } = Contollers.WebView;
        navigation.navigate(dataItem.dest,{name: '网页'});
    }
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
        marginBottom: 15,
    },
});

//make this component available to the app
export default AppContent;
