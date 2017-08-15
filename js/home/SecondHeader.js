import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Grid } from 'antd-mobile';
import ScanImage from '../../images/home/home_scan.png';
import PayImage from '../../images/home/home_pay.png';
import XiuImage from '../../images/home/home_xiu.png';
import CardImage from '../../images/home/home_card.png';
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
        text: '收钱', 
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
                            <TouchableHighlight style={styles.itemcontainer} onPress={() => this.onClick(dataItem)}>
                                <View style={[styles.itemcontainer,{opacity:this.props.opacity}]}>
                                    <Image source={dataItem.icon} style={styles.itemimage}/>
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
        height: 120,
    },
    itemcontainer: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    itemimage:{
        marginTop: 20,
        height: 50,
        width: 50,
        marginBottom: 20,
    },
    desctext:{
        fontSize: 16,
        color: 'white',
        marginBottom: 15
    }
});

//make this component available to the app
export default SecondHeader;
