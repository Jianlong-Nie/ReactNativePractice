//import liraries
import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';

export const RefreshState = {
    Idle: 0,
    HeaderRefreshing: 1,
    FooterRefreshing: 2,
    NoMoreData: 3,
    Failure: 4,
}


const footerRefreshingText = '数据加载中…'
const footerFailureText = '点击重新加载'
const footerNoMoreDataText = '已加载全部数据'

class RefreshableFlatList extends Component {

    props: {
        refreshState: number,
        onHeaderRefresh: (refreshState: number) => void,
        onFooterRefresh: (refreshState: number) => void,
        footComponent: React.Component,
        data: Array<any>
    }

    constructor(prop, context) {
        super(prop, context);
    }

    // 下拉刷新
    _onHeaderRefresh() {
        if (this._shouldStartHeaderRefresh()) {
            this.props.onHeaderRefresh(RefreshState.HeaderRefreshing)
        }
    }

    _shouldStartHeaderRefresh() {
        // 当前正在下拉刷新或者正在加载更多时都不要再次进入刷新状态
        if (this.props.refreshState == RefreshState.HeaderRefreshing || 
            this.props.refreshState == RefreshState.FooterRefreshing) {
                return false
        }
        return true
    }

    // 上拉加载更多
    _onEndReached() {
        if(this._shouldStartFooterRefresh()) {
            this.props.onFooterRefresh(RefreshState.FooterRefreshing)
        }
    }

    _shouldStartFooterRefresh() {
        let {refreshState, data} = this.props
        if (data.length == 0) {  // 没有数据时不要上拉加载
            return false
        }
        return (refreshState == RefreshState.Idle)        
    }

    // 创建 footer 组件
    _renderFootComponent() {
         let foot = null
         switch (this.props.refreshState) {
            case RefreshState.Idle:
                footer = (<View style={styles.footerContainer} />)
            break
            case RefreshState.Failure: {
                footer = (
                    <TouchableOpacity
                        style={styles.footerContainer}
                        onPress={() => {
                            this.props.onFooterRefresh(RefreshState.FooterRefreshing)
                        }}
                    >
                        <Text style={styles.footerText}>{footerFailureText}</Text>
                    </TouchableOpacity>
                )
                break
            }
            case RefreshState.FooterRefreshing: {
                footer = (
                    <View style={styles.footerContainer} >
                        <ActivityIndicator size="small" color="#888888" />
                        <Text style={[styles.footerText, {marginLeft: 7}]}>{footerRefreshingText}</Text>
                    </View>
                )
                break
            }
            case RefreshState.NoMoreData: {
                footer = (
                    <View style={styles.footerContainer} >
                        <Text style={styles.footerText}>{footerNoMoreDataText}</Text>
                    </View>
                )
                break
            }
        }

        return footer
    }

    render() {
        return(
            <FlatList
                onEndReachedThreshold = {0.3}
                onEndReached = {(info) => this._onEndReached(info)} // 触发的上拉加载更多时的回调
                onRefresh = {() => this._onHeaderRefresh.bind(this)}
                refreshing = {this.props.refreshState == RefreshState.HeaderRefreshing}
                ListFooterComponent = {this._renderFootComponent.bind(this)}
                // 达到类似继承的功效
                {...this.props}
            />
        )
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 44,
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
})

export default RefreshableFlatList;