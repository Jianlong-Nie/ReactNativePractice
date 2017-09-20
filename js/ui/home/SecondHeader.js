import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Grid } from 'antd-mobile';
import ScanImage from '../../../images/home/haier/icon_saoyisao.png';
import PayImage from '../../../images/home/haier/icon_pay.png';
import XiuImage from '../../../images/home/haier/icon_shouqian.png';
import CardImage from '../../../images/home/haier/icon_kabao.png';
import AntDesign from '../antDesign';
import GlobalStyle from '../../config/theme';


class SecondHeader extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.mainReducer !== nextProps.mainReducer) {
            return true;
        } 
        return false;
     }
    onClick = (dataItem) => {
        this.props.navigation.navigate(dataItem.key, {name: dataItem.appName});
    }
    
    render() {
        let apps = [];
        const { homeApps } = this.props.mainReducer;
        if (homeApps !== undefined) {
           apps = homeApps.filter((item) => item.type === '2'); 
        }
        return (
            <View style={styles.container}>
                <Grid 
                    data={apps} 
                    hasLine={false}
                    renderItem={dataItem => {   
                        return (
                            <TouchableOpacity style={styles.itemcontainer} onPress={() => this.onClick(dataItem)}>
                                <View style={[styles.itemcontainer,{opacity:this.props.opacity}]}>
                                    <Image source={{uri: dataItem.appIcon}} resizeMode = "contain" style={styles.itemimage}/>
                                    <Text style={styles.desctext}>{dataItem.appName}</Text>
                                </View>
                            </TouchableOpacity>
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
        backgroundColor: GlobalStyle.themeColor,
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
