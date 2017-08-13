import React from 'react';  
import {  
  AppRegistry,
  PanResponder,
  StyleSheet,
  View,
  processColor,
  ScrollView,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

var CIRCLE_SIZE = 80;  
var CIRCLE_COLOR = 'blue';  
var CIRCLE_HIGHLIGHT_COLOR = 'green';

export default class extends React.Component {

  _panResponder = {};
  _previousLeft= 0;
  _previousTop= 0;
  _circleStyles= null;
  offsetY = 0;

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        // left: this._previousLeft,
        top: this._previousTop
      }
    };
  }

  componentDidMount() {
    // this._updatePosition();
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <View
  //         ref={(circle) => {
  //           this.circle = circle;
  //         }}
  //         style={styles.circle}
  //         {...this._panResponder.panHandlers}
  //       />
  //     </View>
  //   );
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          {...this._panResponder.panHandlers}
          ref={(circle) => {
            this.circle = circle;
          }}
          scrollEventThrottle={100}
          onScroll={this.onScroll}
          automaticallyAdjustContentInsets={false}
          scrollEnabled={true}
          style={[styles.containerScr]}>
          <View style={{width: width, height: 80, backgroundColor: 'red', marginTop: 0}} ref={(c) => this._refButton = c} />
        </ScrollView>
      </View>
    );
  }
  onScroll = (value) => {
    console.log('调用次数', value.nativeEvent.contentOffset.y);
    this.offsetY = value.nativeEvent.contentOffset.y;
    // // this.setState({marginTop: value.nativeEvent.contentOffset.y});
    this._refButton.setNativeProps({
        style: {marginTop: value.nativeEvent.contentOffset.y}
    });
  }

  _highlight = () => {
    // const circle = this.circle;
    // circle && circle.setNativeProps({
    //   style: {
    //     backgroundColor: processColor(CIRCLE_HIGHLIGHT_COLOR)
    //   }
    // });
    // this.circle.setNativeProps({
    //     style: {backgroundColor: processColor(CIRCLE_HIGHLIGHT_COLOR)}
    // });
  }

  _unHighlight = () => {
    // const circle = this.circle;
    // circle && circle.setNativeProps({
    //   style: {
    //     backgroundColor: processColor(CIRCLE_COLOR)
    //   }
    // });

    this._refButton.setNativeProps({
        style: {backgroundColor: processColor(CIRCLE_COLOR)}
    });
  }

  _updatePosition = () => {
    // this.circle && this.circle.setNativeProps(this._circleStyles);
    // console.log('y===',this.circle);
  }

  _handlePanResponderGrant = (e, gestureState) => {
    this._highlight();
  }
  _handlePanResponderMove = (e, gestureState) => {
    // this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    // console.log(e.nativeEvent.contentOffset.y);
    this._updatePosition();
  }
  _handlePanResponderEnd = (e, gestureState) => {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;

    this._updatePosition();
  }
}

var styles = StyleSheet.create({ 
  container: {
        backgroundColor: '#E7E7E7',
        height: height,
    }, 
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: CIRCLE_COLOR,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  containerScr: {
    flex: 1,
    paddingTop: 64,
    marginTop: 10,
    backgroundColor: 'blue'
  },
});