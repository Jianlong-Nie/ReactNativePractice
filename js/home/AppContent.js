//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Grid } from 'antd-mobile';
import AnZhuangImage from '../../images/home/haier/peisonganzhuang.png';
import QiangDImage from '../../images/home/haier/qiangdan.png';
import ShuizhanImage from '../../images/home/haier/shuizhan.png';
import XiaoGuanJiaImage from '../../images/home/haier/xiaoguanjia.png';
import YanBaoFuWu from '../../images/home/haier/yanbao-fuwu.png';
import ZhengChePeiSong from '../../images/home/haier/zhengche-peisong.png';


// const data = Array.from(new Array(12)).map((_val, i) => ({
//     icon: YueEBaoImage,
//     text: `name${i}`,
// }));
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
    onClick = dataItem => {
        const { navigation } = this.props;
        //const { screen } = Contollers.WebView;
        navigation.navigate('WebView',{name: '网页'});
    }
    render() {
        return (
            <View style={styles.container}>
                <Grid 
                    data={data} 
                    hasLine={false} 
                    renderItem={dataItem => {   
                        return (
                            
                                <View style={styles.itemcontainer}>
                                    <TouchableHighlight activeOpacity={0} underlayColor='transparent' onPress={() => this.onClick(dataItem)}>
                                       <Image source={dataItem.icon} style={styles.itemimage}/>
                                    </TouchableHighlight>
                                    <Text>{dataItem.text}</Text>
                                </View>
                            
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
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    itemimage:{
        height: 30,
        width: 30,
        marginBottom: 15,
    },
});

//make this component available to the app
export default AppContent;
