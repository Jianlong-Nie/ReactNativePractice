//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Dimensions} from 'react-native';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
const { height, width} = Dimensions.get('window');
// create a component
class CarouralDemo extends Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg', 
        'http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg', 
        'http://pic62.nipic.com/file/20150319/12632424_132215178296_2.jpg'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank>
        <Text className="sub-title">normal</Text>
        <Carousel
          className="my-carousel"
          autoplay={false}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
              <Image
                source={{uri:ii}}
                style ={{width: width,height:200}}
              />
          ))}
        </Carousel>

        <WhiteSpace />
        <Text className="sub-title">vertical</Text>
        <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
        >
          <Text style ={{width: width,height:60,backgroundColor:'gray'}}>Carousel 1</Text>
          <Text style ={{width: width,height:60,backgroundColor:'gray'}}>Carousel 2</Text>
          <Text style ={{width: width,height:60,backgroundColor:'gray'}}>Carousel 3</Text>
        </Carousel>

        <WhiteSpace />
        <Text className="sub-title">lottery</Text>
        <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
          speed={200}
          autoplayInterval={300}
          resetAutoplay={false}
        >
          {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(it => (
            <Text style ={{width: width,height:60,backgroundColor:'gray'}}>{it}</Text>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CarouralDemo;
