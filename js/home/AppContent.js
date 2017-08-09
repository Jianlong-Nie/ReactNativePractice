//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Grid } from 'antd-mobile';
import ZhuanZhangImage from '../../images/home/zhuanzhang.png';
import CreditImage from '../../images/home/credit.png';
import ChongZhiImage from '../../images/home/chongzhi.png';
import YuEImage from '../../images/home/yuebao.png';
import TaoPiaoPiao from '../../images/home/taopiaopiao.png';
import DiDiImage from '../../images/home/didi.png';
import ShengHuoImage from '../../images/home/shenghuo.png';
import ZhiMaImage from '../../images/home/zhima.png';
import ChePiao from '../../images/home/chepiao.png';
import ShopImage from '../../images/home/shop.png';
import DanCheImage from '../../images/home/danche.png';
import MoreImage from '../../images/home/more.png';

// const data = Array.from(new Array(12)).map((_val, i) => ({
//     icon: YueEBaoImage,
//     text: `name${i}`,
// }));
const data = [
    { 
        icon: ZhuanZhangImage,
        text: '转账',
    },
    { 
        icon: CreditImage,
        text: '信用卡转账',
    },
    { 
        icon: ChongZhiImage,
        text: '充值中心',
    },
    { 
        icon: YuEImage,
        text: '余额宝',
    },
    { 
        icon: TaoPiaoPiao,
        text: '淘票票',
    },
    { 
        icon: DiDiImage,
        text: '滴滴打车',
    },
    { 
        icon: ShengHuoImage,
        text: '生活中心',
    },
    { 
        icon: ZhiMaImage,
        text: '芝麻信用',
    },
    { 
        icon: ChePiao,
        text: '汽车票机票',
    },
    { 
        icon: ShopImage,
        text: '商家服务',
    },
    { 
        icon: DanCheImage,
        text: '共享单车',
    },
    { 
        icon: MoreImage,
        text: '更多',
    },
];

// create a component
class AppContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Grid 
                    data={data} 
                    hasLine={false} 
                    renderItem={dataItem => {   
                        return (
                            <View style={styles.itemcontainer}>
                                <Image source={dataItem.icon} style={styles.itemimage}/>
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
