//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, WebView, TouchableHighlight} from 'react-native';

export default class WebViewExample extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            messagesReceivedFromWebView: 0,
            message: '',
        }
    }
   //injectedJavaScript = "confirm('注入的一段js代码injectedJavaScript')"
    onMessage = e => {
        console.log(`收到了Message === ${e.nativeEvent.data}`);
        const { navigation } = this.props;
        navigation.navigate('QRScanner', {name: '扫一扫'});
        // this.setState({
        //     messagesReceivedFromWebView: this.state.messagesReceivedFromWebView + 1,
        //     message: e.nativeEvent.data,
        // });
    };

    injectJS = () => {
        console.log('点击了按键');
        const script = 'confirm(\'注入的一段js代码injectJavaScript\')';  // eslint-disable-line quotes
        if (this.refs.webView) {
            this.refs.webView.injectJavaScript(script);
        }
    };
    // postMessage = () => {
    //     console.log('发送了Message');
    //     if (this.refs.webView) {
    //         // this.refs.webView.postMessage('"Hello" from React Native!');
    //         this.refs.webView.injectJavaScript('window.postMessage(\'Hello\')');
    //     }
    // };

    render() {
        let text1 = `Messages received: ${this.state.messagesReceivedFromWebView}`;
        let text2 = this.state.message ? this.state.message : '(No message)';

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this.injectJS}
                >
                    <Text style={{height: 30, width: 200, backgroundColor: 'blue', color: 'white'}}>点击注入一段JS代码</Text>
                </TouchableHighlight>
                <Text>{text1}</Text>
                <Text>{text2}</Text>
                <WebView
                    ref="webView"
                    injectedJavaScript = "confirm('注入的一段js代码injectedJavaScript')"
                    automaticallyAdjustContentInsets={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate='normal'
                    startInLoadingState={true}
                    style={styles.container}
                    source={{html: HTML}}
                    scalesPageToFit={true}
                    onMessage={this.onMessage}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>Hello Static World</h1>
    <button onclick={window.postMessage('Hello-from-React-Native')}>点我调用系统摄像头</button>
  </body>
</html>
`;
