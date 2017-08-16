//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableHighlight,Platform } from 'react-native';
import { Button, TabBar, Icon, InputItem } from 'antd-mobile';
import SearchImage from '../../images/home/search.png';
import MicImage from '../../images/home/mic.png';
import TongXunLuImage from '../../images/home/tongxunlu.png';
import JiaHaoImage from '../../images/home/jiahao.png';
import MorePopWindow from '../home/MorePopWindow.js';
const headH = 64;
const { width, height } = Dimensions.get('window');

// create a component
const CustomSearchBar = () => {
    return (
        <View style={styles.customSearchBar}>
            <Image source={SearchImage} style={styles.searchIcon}/>
            <TextInput
                defaultValue="真诚超市满六减一"
                style={{width: width-180, height: 35, color: 'white'}}
                editable = {false}
            />
            <Image source={MicImage} style={styles.searchIcon}/>
        </View>
    );
};

// create a component
class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: false,
        };
    }

    showPop = () => {
        this.setState({ showPop: !this.state.showPop });
    }
    render() {
        return (
            <View style={[styles.container,{opacity:this.props.opacity}]}>
                <View style={styles.content}>
                    <CustomSearchBar />
                    <View style={{flexDirection:'row', width: 80, marginRight: 15,marginTop: 5,marginLeft:10}}>
                        <TouchableHighlight>
                            <Image source={TongXunLuImage} style={styles.btnIcon}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {this.showPop}>
                            <Image source={JiaHaoImage} style={styles.btnIcon}/>
                        </TouchableHighlight>
                    </View>
                    <View style={{ position: 'absolute', top: 300, left: 0, width: width, height: height }}>
                        <MorePopWindow width={90} height={100} show={this.state.showPop} closeModal={(show) => {
                            this.setState({showPop: show});
                        }} {...this.props}/>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c60c1b',
        height: 64,
    },
    content:{
        marginTop: 20,
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    customSearchBar:{
        marginLeft: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 6,
        height: 35,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchIcon:{
        margin: 10,
        height: 20,
        width: 20,
    },
    btnIcon:{
        height: 23,
        width: 23, 
        marginRight: 15,
    }
});

//make this component available to the app
export default SearchHeader;
