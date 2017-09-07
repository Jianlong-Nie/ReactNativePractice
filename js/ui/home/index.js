//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Platform,
    PanResponder,
    Animated,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SplashScreen from 'react-native-splash-screen'
import SearchHeader from './SearchHeader';
import AppContent from './AppContent';
import SecondHeader from './SecondHeader';
import MessageList from './MessageList';
import NavigationHeader from './NavigationHeader';
import { getJSON } from '../../network';
import { changeHomeApp } from '../../redux/Actions';

const { width, height } = Dimensions.get('window');
const NavigationBar = Animated.createAnimatedComponent(NavigationHeader);

// create a component
class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            navigantionHeaderOpacity: 0,
            headerOpacity: new Animated.Value(0),
        };
    }
    async fetchApps() {
      const url = 'apps?filter={"where":{},"skip":0,"limit":20}';
       try {
          const json = await getJSON(url);
          console.log('====================================');
          console.log(`请求接口数据${JSON.stringify(json)}`);
          console.log('====================================');
          this.props.changeHomeApp(json);
       } catch (error) {
           console.log('====================================');
           console.log(`请求接口失败${error}`);
           console.log('====================================');
       }
    }
    componentDidMount() {
        SplashScreen.hide();
        this.fetchApps();
    }
    handleScroll = (e) => {
        var windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height,
            offset = e.nativeEvent.contentOffset.y;
        if (offset > 64) {
            this.setState({ navigantionHeaderOpacity: 1 });
            console.log('输出上拉操作');
        } else {
            this.setState({ navigantionHeaderOpacity: 0 });
        }

    }
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    /*{...this.state.panResponder.panHandlers}*/
                    bounces={false}
                    scrollEventThrottle={16}
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    onScroll={(e) => this.handleScroll(e)
                    }
                >
                    <SearchHeader /*style = {this.state.position.getLayout()*/{...this.props}/>
                    <SecondHeader {...this.props} />
                    <AppContent {...this.props} />
                    <View style={{ backgroundColor: 'gray', height: 15 }} />
                    <MessageList />
                </ScrollView>
                {
                    this.state.navigantionHeaderOpacity === 0 ? null : <NavigationHeader opacity={this.state.navigantionHeaderOpacity} />
                }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E7E7E7',
        height: height,
    },
    messagelist: {
        marginTop: 20,
    },
});


const mapDispatchToProps = dispatch => bindActionCreators({
    changeHomeApp
},dispatch);

const mapStateToProps = (state, ownProps) => {
    return {
        mainReducer: state.mainReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
