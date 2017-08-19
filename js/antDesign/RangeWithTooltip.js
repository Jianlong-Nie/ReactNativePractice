//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
/* eslint arrow-body-style: 0 */
import { Range, WingBlank, WhiteSpace, } from 'antd-mobile';


const AppRange = () => {
    const log = (name) => {
        return (value) => {
            console.log(`${name}: ${value}`);
        };
    };
    return (
        <View>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <Text style={{fontSize:18}}>Basic Range</Text>
                <Range
                    min={0}
                    max={20}
                    defaultValue={[3, 10]}
                    onChange={log('change')}
                    onAfterChange={log('afterChange')}
                    style = {{height:60, width: 300}}
                />
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <Text style={{fontSize:18}}>Range with Tooltip</Text>
                
            </WingBlank>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
                <Text style={{fontSize:18}}>Disabled Range</Text>
                <Range
                    min={0}
                    max={20}
                    defaultValue={[3, 10]}
                    onChange={log('change')}
                    onAfterChange={log('afterChange')}
                    disabled
                />
            </WingBlank>
            <WingBlank size="lg">
                <Text style={{fontSize:18}}>Range with Customized Style</Text>
                <Range
                    min={0}
                    max={20}
                    defaultValue={[3, 10]}
                    onChange={log('change')}
                    onAfterChange={log('afterChange')}
                    trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
                    handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
                    railStyle={{ backgroundColor: 'black' }}
                />
            </WingBlank>
        </View>
    );
};


//make this component available to the app
export default AppRange;
