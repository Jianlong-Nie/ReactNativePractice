//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NoticeBar, WhiteSpace,} from 'antd-mobile';

/* eslint global-require: 0 */

const NoticeBarExample = () => (
    <View>
        <WhiteSpace size="lg" />
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" onClick={() => alert('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" icon={null}>Remove the default icon.</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable">
      Customized icon.
        </NoticeBar>
    </View>
);

//make this component available to the app
export default NoticeBarExample;
