//import liraries
import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Dimensions,
    Platform, 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchHeader from './SearchHeader';
import AppContent from './AppContent';
import SecondHeader from './SecondHeader';
import MessageList from './MessageList';
import NavigationHeader from './NavigationHeader';
const { width, height } = Dimensions.get('window');


const getDirection = ({ moveX, moveY, dx, dy}) => {
  const draggedDown = dy > 20;
  const draggedUp = dy < -20;
  const draggedLeft = dx < -20;
  const draggedRight = dx > 20;
  let dragDirection = '';

  if (draggedDown || draggedUp) {
    if (draggedDown) dragDirection += 'dragged down '
    if (draggedUp) dragDirection +=  'dragged up ';
  }

  if (draggedLeft || draggedRight) {
    if (draggedLeft) dragDirection += 'dragged left '
    if (draggedRight) dragDirection +=  'dragged right ';
  }
  if (dragDirection) return dragDirection;
}


// create a component
class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            scrollEnable:true,
            //默认向上滑动 1向上 0 向下
            direction: 1,
            searchHeaderOpacity: 1,
            navigantionHeaderOpacity: 0,
        };
    }
    componentDidMount() {
        this.scrollView = this.refs.scrollview;
        this.searchHeader = this.refs.searchheader;
    }
    
    handleScroll = (e) => {
    //    var windowHeight = Dimensions.get('window').height,
    //         height = e.nativeEvent.contentSize.height,
    //         offset = e.nativeEvent.contentOffset.y;
    //    var absOffset = Math.abs(offset) > 60 ? 60 : Math.abs(offset);
    //     console.log(`输出offset${offset} contentSize${height}`);
    //    var opacity1 = absOffset/60;
    //    if(opacity1<0.3){
    //        opacity1=0;
    //    }
    //     if(offset>0){
    //         // this.setNativeProps({
    //         //      navigantionHeaderOpacity: opacity1,
    //         //      searchHeaderOpacity: 1-opacity1,    
    //         // });
    //         this.searchHeader.setNativeProps({style:{opacity:1-opacity1}});

    //     //   this.setState({
           
    //     //   });
    //       console.log('输出上拉操作');
    //     }else{
    //         // this.setNativeProps({
    //         //     navigantionHeaderOpacity: 0,
    //         //     searchHeaderOpacity: 1, 
    //         // });
    //     //     this.setState({
    //     //         navigantionHeaderOpacity: 0,
    //     //         searchHeaderOpacity: 1,
    //     //   });
    //        console.log('输出下拉操作');
    //     }

    }
    static navigationOptions = {
         header:null
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView
                    bounces = {false}
                    scrollEventThrottle={400}
                    ref='scrollview'
                    onLayout={(event) => {
                        console.log(event.layout);
                    }}
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    onScroll={(e) => this.handleScroll(e)}
                >
                    <View style={{opacity: this.state.opacity}} ref='searchheader'>
                    <SearchHeader />
                    </View>
                    {
                       this.state.searchHeaderOpacity < 0.3 ? null : <SecondHeader {...this.props} opacity={this.state.searchHeaderOpacity} ref='secondheader'/>
                    }
                    <AppContent {...this.props}/>
                    <View style={{ backgroundColor:'transparent',height:15 }}/>
                    <MessageList />
                </ScrollView>
                <NavigationHeader opacity={this.state.navigantionHeaderOpacity}/>
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
    menuheader:{
    }
});



//make this component available to the app
export default Home;
