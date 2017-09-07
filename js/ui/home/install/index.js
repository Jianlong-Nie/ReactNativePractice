//import liraries
import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Dimensions,
    Platform, 
    ListView,
    RefreshControl,
    TouchableOpacity,
    PixelRatio,
    Image,
    FlatList
} from 'react-native';
import InstallViewCell from './InstallViewCell.js'
import {Heading, Paragraph} from '../../widget/Text.js';
import RefreshableFlatList, {RefreshState} from '../../widget/RefreshableFlatList/RefreshableFlatList.js'
const recommend = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind'
const { width, height } = Dimensions.get('window');
import testData from './data'

// create a component
class InstallView extends Component {
    _flatList;
    
    state: {
        discounts: Array <Object> ,
        dataList: [Object], 
        refreshing: boolean,
        refreshState: number
    }

    constructor(props, context) {
        super(props, context)
        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
            refreshState: RefreshState.Idle
        }
    }

    componentDidMount() {
        this._requestData()
    }
    
    _requestData() {
        this._headerRequest()
    }

    _headerRequest() {
        this.setState({
            refreshState: RefreshState.HeaderRefreshing
        })        
        try {
           this._requestData()
        }catch(error) {
            this.setState({
                refreshState: RefreshState.Failure
            })
        }
    }

    async _requestData() {
        let response = await fetch(recommend)
        let json = await response.json()
        let dataList = json.data.map(
            (info) => {
                return {
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            }
        );
        for (let i = 0; i < dataList.length; i++) {
            dataList[i].id = i
        }
        this.setState({
            dataList: dataList,
            refreshState: RefreshState.Idle
        })
    }

    keyExtractor(item: Object, index: number) {
        return item.id
    }

    renderCell(info: Object) {
        return (
          <InstallViewCell info = {info.item}/>
        )
    }

    onFooterRefresh = () => {
        this.setState({
            refreshState: RefreshState.FooterRefreshing
        })
        // 模拟网络请求
        setTimeout(() => {
            // 模拟网络加载失败的情况
            if (Math.random() < 0.2) {
                this.setState({refreshState: RefreshState.Failure})
                return
            }

            let newList = testData.map((data) => {
                return {
                    imageUrl: data.squareimgurl,
                    title: data.mname,
                    subtitle: `[${data.range}]${data.title}`,
                    price: data.price,
                }
            })

            //获取测试数据
            let dataList = [...this.state.dataList, ...newList]
            
            for (let i = 0; i < dataList.length; i++) {
                dataList[i].id = i
            }

            this.setState({
                dataList: dataList,
                refreshState: dataList.length > 500 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        }, 2000)
    }

    render() {
        return (
            <RefreshableFlatList 
                ref={(flatList) => this._flatList = flatList}
                data = {this.state.dataList}
                keyExtractor = {this.keyExtractor.bind(this)}
                renderItem = {this.renderCell.bind(this)}
                refreshState = {this.state.refreshState}
                onHeaderRefresh={this.onHeaderRefresh}
                onFooterRefresh={this.onFooterRefresh}
            />
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

//make this component available to the app
export default InstallView;
