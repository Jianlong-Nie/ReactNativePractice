import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    TextInput,
    TouchableHighlight,
    Button,
    Alert
} from 'react-native';
import IconHead from '../../images/home/haier/wode.png';
import IconPassWord from '../../images/home/pass_word.png';
import IconShowPassWord from '../../images/home/pass_word_selected.png';
import IconArrow from '../../images/home/arrow.png';
import {Toast} from 'antd-mobile';
const {width, height} = Dimensions.get('window');

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassWord: true,
            account: '',
            password: '',
            canLogin: false,
        }
        }

    login = () => {
        if(this.state.account.length == 0){
            Toast.info('请输入账号',1);
            return;
        } else if(this.state.password.length == 0){
            Toast.info('请输入密码',1);
            return;
        } else {
            Alert.alert('登录成功\n账号:' + this.state.account + '\n密码:' + this.state.password);
            // Toast.info('账号:' + this.state.account + '密码:' + this.state.password, 1);
        }
    }

    showPassWord = () => {
        this.setState({
            showPassWord: !this.state.showPassWord
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headImageContainer}>
                    <Image source={IconHead} style={styles.headImage}/>
                </View>
                <View style={styles.accountContainer}>
                    <View style={styles.accountContent}>
                        <Text style={styles.textStyle}>账号</Text>
                        <TextInput
                            autoCapitalize = 'none'
                            multiline={false}
                            style={styles.accountTextInput}
                            underlineColorAndroid='transparent'
                            onChangeText={(account) => {
                            this.setState({account});
                        }}
                            placeholder='请输入账号（邮箱或手机号）'/>
                        <Image source={IconArrow} style={styles.rightImage}/>
                    </View>
                    <View
                        style={{
                        height: 1,
                        backgroundColor: '#bdbdbd'
                    }}/>
                </View>
                <View style={styles.accountContainer}>
                    <View style={styles.accountContent}>
                        <Text style={styles.textStyle}>密码</Text>
                        <TextInput
                            multiline={false}
                            autoCapitalize = 'none'
                            style={styles.accountTextInput}
                            secureTextEntry={this.state.showPassWord}
                            underlineColorAndroid='transparent'
                            maxLength={16}
                            onChangeText={(password) => {
                            this.setState({password});
                            if (password.length > 0) {
                                this.setState({canLogin: true})
                            } else {
                                this.setState({canLogin: false});
                            }
                        }}
                            placeholder='请输入登录密码'/>
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            onPress={this
                            .showPassWord
                            .bind(this)}>
                            <Image
                                source={this.state.showPassWord
                                ? IconPassWord
                                : IconShowPassWord}
                                style={styles.rightImage}/>
                        </TouchableHighlight>
                    </View>
                    <View
                        style={{
                        height: 1,
                        backgroundColor: '#bdbdbd'
                    }}/>
                </View>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={this.login.bind(this)}>
                    <View style={styles.buttonStyle}>
                        <Text
                            style={{
                            color: this.state.canLogin? '#fff' : '#7ccbf1',
                            fontSize: 14
                        }}>
                            登录
                        </Text>
                    </View>
                </TouchableHighlight>

                <Text style={styles.blueText}>
                    登录遇到问题？
                </Text>
                <Text
                    style={[
                    styles.blueText, {
                        marginTop: 5
                    }
                ]}>
                    注册
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    headImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 120,
        marginTop: 80
    },
    headImage: {
        height: 120,
        width: 108
    },
    accountContainer: {
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center'
    },
    accountContent: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    textStyle: {
        color: 'black',
        fontSize: 14
    },
    accountTextInput: {
        flex: 1,
        color: 'black',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
        fontSize: 14
    },
    rightImage: {
        height: 15,
        width: 15
    },
    buttonStyle: {
        margin: 20,
        borderRadius: 5,
        backgroundColor: '#44a9e8',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: '#7ccbf1',
        fontSize: 14
    },
    blueText: {
        color: '#44a9e8',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20
    }
});