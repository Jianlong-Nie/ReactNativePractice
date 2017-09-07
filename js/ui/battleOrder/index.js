import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import BattleList from './BattleList';
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';

class BattleOrder extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        const data = [];
        this.state = {
            dataSource: dataSource.cloneWithRows(data),
            loading: true,
        };
    }
    
    componentDidMount() {
        setTimeout(() => this.initData(), 3000);
    }

    initData = () => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                key: `r${i}`,
                customerLeval: ['Vip客户', '普通客户'][Math.round(Math.random())],
                adress: ['北京市', '山东省青岛市', '山东省济南市', '安徽省合肥市', '安徽省安庆市'][Math.round(Math.random() * 4)],
                name: ['张飞', '关羽', '赵云', '黄忠', '马超'][Math.round(Math.random() * 4)],
                distance: `距离您${Math.round(Math.random() * 100)}公里`,
                type: ['文件', '包裹'][Math.round(Math.random())],
                expendTime: `${Math.round(Math.random()) * 10}小时到达`
            });
        }
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.setState({
          dataSource: dataSource.cloneWithRows(data),
          loading: false,
        })
    }

    render() {
        return (
            <View style={{flex: 1}} >
                <IndicatorViewPager
                    style={{flexDirection: 'column-reverse', flex: 1, width: width}}
                    indicator={this.renderTitleIndicator()}
                    onPageScroll={this.onPageScroll}
                >
                    <BattleList dataSource={this.state.dataSource}/>
                    <BattleList dataSource={this.state.dataSource}/>
                </IndicatorViewPager>
                {this.state.loading && <LoadingView />}
            </View>
        );
    }

    renderTitleIndicator = () => {
        return (
            <PagerTitleIndicator
                style={styles.indicatorContainer}
                itemTextStyle={styles.indicatorText}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={['待抢订单', '已抢订单']}
            />
        )
    }

    onPageScroll = (scrollData) => {
        let {offset, position} = scrollData
        if (position < 0 || position >= 2) return
        // this._setBgColor({bgColor: offset + position})
    }
}


const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    indicatorContainer: {
        backgroundColor: '#EFEFEF',
        height: 48
    },
    indicatorText: {
        fontSize: 14,
        color: '#969696'
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: '#3894A2'
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: '#EFEFEF',
        backgroundColor: '#3894A2'
    }
});

export default BattleOrder;

