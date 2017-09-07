import React, {Component} from 'react'
import {StyleSheet, View, FlatList, TextInput, TouchableHighlight, Text, Dimensions} from 'react-native'
import {Navigation} from 'react-native-amap3d'
import Search from 'react-native-search-box'
import MapView from 'react-native-amap3d'

const { width, height } = Dimensions.get('window');

export default class NavigationExample extends Component {
  static navigationOptions = {
    title: '导航',
  }

  componentDidMount() {
    // this._navigation.calculateRoute(
    //   {
    //     latitude: 39.906901,
    //     longitude: 116.397972,
    //   },
    //   {
    //     latitude: 39.806901,
    //     longitude: 116.397972,
    //   },
    //   [
    //     {
    //       latitude: 39.866901,
    //       longitude: 116.407972,
    //     },
    //   ]
    // )
  }

  _start = () => {
    this._navigation.start()
  }
  
  _searchPress = () => {
    let text = this._searchInput.value
    let inputText = this.inputText
    let lo = this._longitude
    let la = this._latitude
    console.log(inputText)
    let url = `http://restapi.amap.com/v3/assistant/inputtips?key=01a399055caec0666eba92117eaed544&location=${lo},${la}&keywords=${inputText}`
    _searchFromURL(url)
  }

  async _searchFromURL(url) {
    let response = await fetch(url)
    let json = await response.json()

  }

  render() {
    return (
      <View style = {{flex:1}}>
        <View style = {{height: 48,  flexDirection: 'row', 
                        justifyContent: 'center', margin: 8}}>
          <TextInput ref={ref => this._searchInput = ref}
                     style = {{flex: 1, height: 40,  
                               borderColor: 'gray', borderWidth: 1, marginRight: 10}}
                     onChangeText = {(text) => {
                       this.inputText = text 
                     }}/>
          <TouchableHighlight style = {{width: 44, height: 40, borderColor: 'gray', borderWidth: 1}}
            onPress = {this._searchPress}>
            <Text>搜索</Text>
          </TouchableHighlight>
        </View>
        <MapView
          locationEnabled={true}
          showsLocationButton
          showsZoomControls
          style={{flex: 1}}
          onLocation = {(e) => {
            this._latitude = e.nativeEvent.latitude
            this._longitude = e.nativeEvent.longitude
          }}/>
      </View>
    )
  }
}


