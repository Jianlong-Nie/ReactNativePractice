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
import SearchHeader from './SearchHeader';
import AppContent from './AppContent';
import SecondHeader from './SecondHeader';
import MessageList from './MessageList';
import NavigationHeader from './NavigationHeader';
const { width, height } = Dimensions.get('window');

// create a component
class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            navigantionHeaderOpacity: 0,
            // position:new Animated.ValueXY(),

        };
        /*this.state.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            // onPanResponderMove: (e)=>{
            //     console.log(`${e.gesture.moveY}`);
            // },
            onPanResponderMove: Animated.event([null,
                {
                    moveX: this.state.position.x,
                    moveY: this.state.position.y,
                }
            ])
        });*/
    }
    handleScroll = (e) => {
       var windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height,
            offset = e.nativeEvent.contentOffset.y;
       
            if(offset>64){
              this.setState({navigantionHeaderOpacity: 1});
              console.log('输出上拉操作');
            }else{
             this.setState({navigantionHeaderOpacity: 0});
               console.log('输出下拉操作');
            }

    }
    static navigationOptions = {
         header:null
    };
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView
                    /*{...this.state.panResponder.panHandlers}*/
                    bounces = {false}
                    scrollEventThrottle={16}
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    onScroll={(e) => this.handleScroll(e)}
                >
                    <SearchHeader /*style = {this.state.position.getLayout()*/ />
                    <SecondHeader {...this.props} />
                    <AppContent {...this.props} />
                    <View style={{ backgroundColor:'transparent',height:15 }} />
                    <MessageList />
                </ScrollView>
                {
                    this.state.navigantionHeaderOpacity === 0 ? null : <NavigationHeader opacity={this.state.navigantionHeaderOpacity}/>
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
    messagelist:{
        marginTop: 20,
    },
});



//make this component available to the app
export default Home;
