//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image,PixelRatio, Alert, Dimensions} from 'react-native';
import {Heading, Paragraph,} from '../widget/Text.js';
import mPubSub from 'pubsub-js';
const { width, height } = Dimensions.get('window');

const _dataInfo = [
    {
        imageUrl: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Name',
        subTitle: '157*****14'
    },
    {
        imageUrl: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Name',
        subTitle: '157*****14'
    },
    {
        imageUrl: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Name',
        subTitle: '157*****14'
    },
    {
        imageUrl: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Name',
        subTitle: '157*****14'
    },
    {
        imageUrl: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Name',
        subTitle: '157*****14'
    }
];

// create a component
class Mine extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(_dataInfo)
        };        
    }
   mySubcriber = (msg, data) => {
    console.log( msg, data );
    Alert.alert(
        '收到广播',
        `${msg}内容是：${data.message},此alert来自mine组件`,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
   }
   componentDidMount() {
    var token = PubSub.subscribe( 'PublishMessage', this.mySubcriber );
    //unsubscribe this subscriber from this topic
    //PubSub.unsubscribe( token );
   }
    _renderRow(rowData,rowId, rowIndex ) {
        return rowIndex == 0 ? (
            <View style = {{backgroundColor: '#c60c1b', padding: 20, flexDirection: 'row'}}>
                <Image source = {{uri: rowData.imageUrl}} style = {styles.image}/>
                <View style = {{flexDirection: 'column',paddingLeft: 10, paddingTop: 20}}>
                    <Heading style = {{color: 'white'}}>{rowData.title}</Heading>
                    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
                        <Heading style = {{color: 'white', fontWeight: '200'}}>{rowData.subTitle}</Heading>
                    </View>
                </View>
            </View>
        ) : (
            <View style = {[styles.whiteRowContainer,styles.bottomBorder, {height: 60, paddingLeft: 20}]}>
                <Image source = {{uri: rowData.imageUrl}} style = {[styles.image, {width: 40, height: 40}]}/>
                <View style = {[styles.whiteRowContainer,{justifyContent: 'space-between'}]}>
                    <Heading>{rowData.title}</Heading>
                    <Heading style = {{color: 'gray'}}>{rowData.subTitle}</Heading>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style = {styles.container}>
                <ListView style ={{backgroundColor: 'white'}}
                    dataSource = {this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c60c1b'
    },

    whiteRowContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 8
    },

    bottomBorder: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 5
    },
});

//make this component available to the app
export default Mine;
