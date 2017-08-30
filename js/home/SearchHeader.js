//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableHighlight,Platform } from 'react-native';
import { Button, TabBar, Icon, InputItem } from 'antd-mobile';
import SearchImage from '../../images/home/haier/icon_search.png';
import MicImage from '../../images/home/mic.png';
import TongXunLuImage from '../../images/home/tongxunlu.png';
import JiaHaoImage from '../../images/home/haier/tianjia.png';
import MorePopWindow from '../home/MorePopWindow.js';
const headH = 64;
const { width, height } = Dimensions.get('window');

// create a component
const CustomSearchBar = () => {
    return (
        <View style={styles.customSearchBar}>
            <Image source={SearchImage} style={styles.searchIcon}/>
            <TextInput
                defaultValue=""
                style={{flex: 1, height: 20, color: 'white'}}
                editable = {false}
            />
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
        console.log('点击弹窗');
        this.setState({ showPop: !this.state.showPop });
    }
    render() {
        return (
            <View style={[styles.container,{opacity:this.props.opacity}]}>
                <View style={styles.content}>
                   <CustomSearchBar />
                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'flex-end'}}>                            
                    <TouchableHighlight
                        underlayColor={'transparent'}
                            onPress = {this.showPop}>                   
                            <Image source={JiaHaoImage} style={styles.btnIcon}/>            
                    </TouchableHighlight>               
                    </View>
                    <View style={{ position: 'absolute', top: 300, left: 0, width: width, height: height,backgroundColor:'white'}}>
                    <MorePopWindow width={90} height={100} show={this.state.showPop} closeModal={(show) => {
                        this.setState({showPop: show})
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
        marginTop: 25,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'transparent',        
        flexDirection: 'row',        
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    customSearchBar:{
        flex: 1,
        borderRadius: 22.5,
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        paddingLeft: 15
    },
    searchIcon:{
        height: 15,
        width: 15,
    },
    btnIcon:{
        height: 15,
        width: 15, 
    }
});

//make this component available to the app
export default SearchHeader;
