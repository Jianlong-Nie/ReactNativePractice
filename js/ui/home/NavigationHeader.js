import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';
import { Grid } from 'antd-mobile';
import ScanImage from '../../../images/home/home_scan.png';
import PayImage from '../../../images/home/home_pay.png';
import XiuImage from '../../../images/home/home_xiu.png';
import CardImage from '../../../images/home/home_card.png';
import JiaHaoImage from '../../../images/home/jiahao.png';
import GlobalStyle from '../../config/theme';


const { width } = Dimensions.get('window');

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
class NavigationHeader extends Component {
    render() {
        return (
            <View style={[styles.container,{opacity: this.props.opacity}]}>
                <View style={{width: width-90}}>
                    <Grid 
                        data={data} 
                        hasLine={false} 
                        renderItem={dataItem => {   
                            return (
                                <View style={styles.itemcontainer}>
                                    <Image source={dataItem.icon} style={styles.itemimage}/>
                                </View>
                            );
                        }
                        }
                    />
                </View>
                <View style={{width:90, flexDirection: 'row', justifyContent:'flex-end'}}>
                    <TouchableHighlight>
                        <Image source={JiaHaoImage} style={{width:30,height:30,marginRight:20}}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.themeColor,
        height: 64,
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: 20,

    },
    itemcontainer: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    itemimage:{
        height: 30,
        width: 30,
    },
    desctext:{
        fontSize: 16,
        color: 'white',
    }
});

//make this component available to the app
export default NavigationHeader;
