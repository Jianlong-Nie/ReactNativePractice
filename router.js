import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    Platform,
} from 'react-native';
import { Button, TabBar, Icon } from 'antd-mobile';
import Home from './js/home';
import WebView from './js/WebView';
import ZhiFubaoIcon from './images/home/zhifubao.png';
import MineIcon from './images/home/mine.png';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Controllers from  './controllers';
import Mine from './js/mine';

// create a component
const tabIcon = props => <Image style={{ height:30, width: 30 }} source={props.image} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: -20,
    }
});


const HomeRouter = StackNavigator(
{
  ...Controllers,
  Main:{
      screen: Home,
  }
},

{
    initialRouteName: 'Main',
    //headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: 'card',
  }
);
// const MainTab = StackNavigator({
//   Home: {
//     screen: MyHomeScreen,
//     path: '/',
//     navigationOptions: {
//       title: 'Welcome',
//     },
//   },
//   Profile: {
//     screen: MyProfileScreen,
//     path: '/people/:name',
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name}'s Profile!`,
//     }),
//   },
// });

const MineTab = StackNavigator({
  Mine:{
      screen: Mine,
      navigationOptions :{
         title: '个人中心',
         headerStyle:{backgroundColor:'#c60c1b'},
         headerTitleStyle:{color:'white'},
         headerTintColor:'white',
    }
  }
},
{
    initialRouteName: 'Mine',
    headerMode: 'float',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode:  'card',
  }
);

const router = TabNavigator(
  {
    MainTab: {
      screen: HomeRouter,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
           <Image />
        ),
      },
    },
    SettingsTab: {
      screen: MineTab,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Image />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions:{
      activeTintColor: '#c60c1b',
      inactiveTintColor: 'gray',
      style: { backgroundColor: 'white'},
      upperCaseLabel: false,
    }
  }
);


//make this component available to the app
export default router;
