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
import { changeHomeApp, changeProgress } from '../../redux/Actions';
import ProgressHud from '../ProgressHud';

import { createAction } from '../../util/utils';

const { width, height } = Dimensions.get('window');
const NavigationBar = Animated.createAnimatedComponent(NavigationHeader);


class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            navigantionHeaderOpacity: 0,
            headerOpacity: new Animated.Value(0),
        };
    }
    async fetchApps() {
        this.props.dispatch(createAction('progressHud/changeProgress')( true ));
    //   this.props.changeProgress(true);
      const url = 'studyapps?filter={"where":{},"skip":0,"limit":20}';
       try {
          const json = await getJSON(url);
          this.props.dispatch(createAction('progressHud/changeProgress')( false ));
        //   this.props.changeProgress({ visible: false });
          console.log('====================================');
          console.log(`请求接口数据${JSON.stringify(json)}`);
          console.log('====================================');
          this.props.dispatch(createAction('mainReducer/changeHomeApp')({ homeApps: json}));
        //   this.props.changeHomeApp(json);
       } catch (error) {
            this.props.dispatch(createAction('progressHud/changeProgress')( false ));
        //    this.props.changeProgress(false);
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
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center'}}>
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

Home.navigationOptions = {
    header: null
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E7E7E7',
        height: height,
        
    },
    messagelist: {
        marginTop: 20,
    },
    spinner: {
        position:'absolute',
        alignSelf: 'center',
    }
});


// const mapDispatchToProps = dispatch => bindActionCreators({
//     changeHomeApp,changeProgress
// },dispatch);

const mapStateToProps = (state, ownProps) => {
    return {
        mainReducer: state.mainReducer,
        progressHud: state.progressHud,
    }
}

export default connect(mapStateToProps)(Home);
