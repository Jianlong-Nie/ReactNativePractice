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

// class router extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedTab: 'hometab',
//             hidden: false,
//         };
//     }
//     render() {
//         return (
//             <TabBar
//                 unselectedTintColor="#949494"
//                 tintColor="#33A3F4"
//                 barTintColor="white"
//                 hidden={this.state.hidden}
//             >
//                 <TabBar.Item
//                     title="首页"
//                     key="首页"
//                     icon={ZhiFubaoIcon}
//                     selected={this.state.selectedTab === 'hometab'}
//                     onPress={() => {
//                         this.setState({
//                             selectedTab: 'hometab',
//                         });
//                     }}
//                     data-seed="logId"
//                 >
//                     <HomeRouter />
//                 </TabBar.Item>
//                 <TabBar.Item
//                     title="我的"
//                     key="我的"
//                     icon={MineIcon}
//                     selected={this.state.selectedTab === 'minetab'}
//                     onPress={() => {
//                         this.setState({
//                             selectedTab: 'minetab',
//                         });
//                     }}
//                 >
//                     <View />
//                 </TabBar.Item>
//             </TabBar>
//         );
//     }
// }

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
    
    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: 'card',
  }
);

// const SimpleApp = StackNavigator(
//   { Home: { screen: HomeScreen }, 
//     LoginView: { screen: LoginView }, 
//  },navigationOptions:{ header:{ visible:false }});
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
  }
);


//make this component available to the app
export default router;
