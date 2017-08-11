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
            offsetY: 0,
            //默认向上滑动 1向上 0 向下
            direction: 1,
            searchHeaderOpacity: 1,
            navigantionHeaderOpacity: 0,
        };
    }
    componentDidMount() {
        this.scrollView = this.refs.scrollview;
    }
    
    handleScroll = (e) => {
       var windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height,
            offset = e.nativeEvent.contentOffset.y;
       var absOffset = Math.abs(offset) > 60 ? 60 : Math.abs(offset);
        console.log(`输出offset${offset} contentSize${height}`);
        // //去除顶部statusbar
        // if(absOffset===20){
        //     absOffset=0;
        // }
        if(offset>0){
          this.setState({
            offsetY: offset,
            navigantionHeaderOpacity: absOffset/60,
            searchHeaderOpacity: 1-absOffset/80,
          });
        }else{
            this.setState({
                offsetY: 0,
                navigantionHeaderOpacity: 0,
                searchHeaderOpacity: 1,
          });
        }
        //加载更多
        // if( windowHeight + offset >= height ){

        // } 
    }
    static navigationOptions = {
         header:null
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView
                    bounces = {false}
                    ref='scrollview'
                    onLayout={(event) => {
                        console.log(event.layout);
                    }}
                    scrollEnabled={this.state.scrollEnable}
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    onScroll={(e) => this.handleScroll(e)}
                    
                    onPanResponderMove={(e,gesture)=>{
                         if (getDirection(gesture)==='draggedDown'&&this.scrollView.offsetY<-20) {
                            this.setState({scrollEnable:false});
                        }else{
                            this.setState({scrollEnable:true});
                        }
                    }}
                    onMoveShouldSetResponder={(e,gesture)=>{
                        if (getDirection(gesture)==='draggedDown'&&this.scrollView.offsetY<-20) {
                            this.setState({scrollEnable:false});
                        }else{
                            this.setState({scrollEnable:true});
                        }
                        return true;
                    }}
                    onStartShouldSetResponderCapture={(e,gesture)=>{
                        console.log('事件是否被劫持4');
                        return true;
                    }}
                    onMoveShouldSetResponderCapture={(e,gesture)=>{
                        console.log('事件是否被劫持5');
                        return true;
                    }}
                >
                    <SearchHeader opacity={this.state.searchHeaderOpacity}/>
                    <SecondHeader opacity={this.state.searchHeaderOpacity}/>
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
