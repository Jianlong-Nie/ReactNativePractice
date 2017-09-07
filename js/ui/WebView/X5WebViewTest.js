import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Platform
} from 'react-native';
import X5WebView from './X5WebView';
const {width,height}  = Dimensions.get('window');

export default class X5WebViewTest extends Component{
    constructor(props) {
        super(props);
        
    }
    // static navigationOptions = {
    //     header: null
    // };
    render(){
        return(
            <View style = {styles.container}>
                <X5WebView
                    style = {styles.webView}
                    url = {'http://192.168.31.243:3000/'}/>
            </View>
        );
    }
    


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    text:{
        color:'black',
        fontSize:16,
        textAlign:'center',
    },
    webView:{
        height:height,
        width:width,
        flex:1,
    }

});

