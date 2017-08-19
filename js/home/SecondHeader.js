import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Grid } from 'antd-mobile';
import ScanImage from '../../images/home/haier/icon_saoyisao.png';
import PayImage from '../../images/home/haier/icon_pay.png';
import XiuImage from '../../images/home/haier/icon_shouqian.png';
import CardImage from '../../images/home/haier/icon_kabao.png';
import AntDesign from '../antDesign';
// const data = Array.from(new Array(4)).map((_val, i) => ({
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//     text: `name${i}`,
// }));
const data = [
    {
        icon: ScanImage,
        text: '扫一扫', 
    },
    {
        icon: PayImage,
        text: '付款', 
    },
    {
        icon: XiuImage,
        text: '收款', 
    },
    {
        icon: CardImage,
        text: '卡包', 
    },
];
// create a component
class SecondHeader extends Component {
    onClick = (dataItem) => {
        switch(dataItem.text) {
            case '扫一扫':
                this.props.navigation.navigate('QRScanner', {name: '网页'});
                break;
            case '付款':
                this.props.navigation.navigate('AntDesign', {name: 'antDesign'});
                break;
            case '收款':
                this.props.navigation.navigate('AntDesignTwo', {name: 'AntDesignTwo'});
                break;
            case '卡包':
                this.props.navigation.navigate('AntDesignThree', {name: 'AntDesignThree'});
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Grid 
                    data={data} 
                    hasLine={false}
                    renderItem={dataItem => {   
                        return (
                            <TouchableHighlight style={styles.itemcontainer} onPress={() => this.onClick(dataItem)} activeOpacity={0}>
                                <View style={[styles.itemcontainer,{opacity:this.props.opacity}]}>
                                    <Image source={dataItem.icon} resizeMode = "contain" style={styles.itemimage}/>
                                    <Text style={styles.desctext}>{dataItem.text}</Text>
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
        backgroundColor: '#c60c1b',
        height: 110,
    },
    itemcontainer: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    itemimage:{
        marginTop: 20,
        height: 35,
        width: 35,
        marginBottom: 20,
    },
    desctext:{
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        marginBottom: 15
    }
});

//make this component available to the app
export default SecondHeader;
