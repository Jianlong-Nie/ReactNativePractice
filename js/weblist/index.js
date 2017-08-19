//import liraries
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import CustomWebView from '../WebView/index';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { Toast } from 'antd-mobile';

const mitem = {
    icon: '',
    text: '',
    dest: '',
    type: 1,
}
// create a component
class weblist extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            url: '',
            text: ''
        };
        mitem = {
            icon: '',
            text: '',
            dest: '',
            type: 1
        };
    }
    componentDidMount() {
        this.input = this.refs.input;
    }
    checkUrl(url){
        var str=url;
        //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
        //下面的代码中应用了转义字符"\"输出一个字符"/"
        var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var objExp=new RegExp(Expression);
        if(objExp.test(str)==true){
           return true;
        }else{
           return false;
        }
    }
    mClick = () => {
       dismissKeyboard();
       if(this.checkUrl(this.state.text)){
           this.setState({url: this.state.text});
       }else{
           Toast.info('请输入合法的url', 1);
       }
      console.log('输出点击事件 => 前往');
    //   const { navigation } = this.props; 
    //   navigation.navigate('CustomWebView', {name:'网页',navigation : navigation});
    }
    stateChange = event => {
        if (this.checkUrl(this.state.url)) {
            mitem.dest = this.state.url;
        }
        if (event.title) {
            mitem.text = event.title;
            if (mitem.text.length>5) {
                mitem.text =  `${mitem.text.substring(0,4)}……`;
            }
            mitem.icon = `${event.url}/favicon.ico`;
        }
        
      console.log(`输出event事件${event}`);
      console.log('输出event事件');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <TextInput 
                       style={styles.input} 
                       ref='input' 
                       onChangeText={(text) => this.setState({text})}
                       value={this.state.text}
                       defaultValue='请输入网址'
                    />
                    <TouchableHighlight style={styles.btn} onPress={this.mClick} activeOpacity={0}>
                        <Text style={styles.btntitle}>前往</Text>
                    </TouchableHighlight>
                </View>
                <CustomWebView {...this.state} stateChange={this.stateChange} />
            </View>
        );
    }
}

weblist.navigationOptions = props =>{
    const { navigation, setParams, } = props;
    return {
        headerRight: (
            <Button
                title='添加'
                color='white'
                onPress={() =>{
                    if (!mitem.dest.length) {
                        mitem = {
                            icon: 'http://www.baidu.com/favicon.ico',
                            text: '百度一下',
                            dest: 'http://www.baidu.com',
                            type: 1,
                        }
                    }
                    //navigation.dispatch(NavigationActions.back({key: 'id-1503109937977-3'}));
                    navigation.goBack();
                    navigation.state.params.add(mitem);
                    console.log('只是遇不见那年花开');
                }
                }
                    
            />
        ),};
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    topView: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    input: {
        height: 27,
        borderWidth: 0.5,
        width: 250
    },
    btn: {
        height: 27,
        borderWidth: 0.5,
        width: 50,
        backgroundColor: 'lightgray',
    },
    btntitle: {
        padding: 5,
        height: 27,
        width: 50,
        textAlign: 'center',
        backgroundColor: 'transparent',

    }
});

//make this component available to the app
export default weblist;
