import React, {Component} from 'react';
import {
    Text, 
    Alert,
} from 'react-native';

import { QRScannerView } from 'ac-qrcode';

export default class DefaultScreen extends Component {
    render() {
        return (
            <QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => this._renderTitleBar()}

                renderBottomMenuView={() => this._renderMenu()}
            />
        );
    }

    _renderTitleBar(){
        return(
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >Here is title bar</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >Here is bottom menu</Text>
        );
    }

    barcodeReceived(e) {
        Alert.alert(
            'Type: ' + e.type,
            'Data: ' + e.data,
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
        //console.log(e)
    }
}