import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio } from 'react-native';
import {Heading, Paragraph} from '../../widget/Text.js';

class InstallViewCell extends React.Component {
    
    render() {
        let {info} = this.props;
        let imageUrl = info.imageUrl.replace('w.h', '160.0');
        return (
            <View/>
            // <TouchableOpacity style = {styles.container}>
            //     <Image source = {{uri: imageUrl}} style = {styles.image}/>

            //     <View style = {styles.detailContainer}>
            //         <Heading>{info.title}</Heading>
            //         <Paragraph numberOfLines = {0} style = {{marginTop: 8}}>{info.subTitle}</Paragraph>
            //         <View style = {{flex: 1, justifyContent: 'flex-end'}}>
            //             <Heading style = {styles.price}>{info.price}元></Heading>
            //         </View>
            //     </View>
            // </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 5
    },

    detailContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5
    }
});

export default InstallViewCell;