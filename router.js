import React from 'react';
import Home from './js/home';
// import HomeTest from './js/home/HomeTest';
import ZhiFubaoIconSelected from './images/home/haier/zhuye_selected.png';
import ZhiFubaoIconNormal from './images/home/haier/zhuye.png';
import MineIcon from './images/home/mine.png';
import MineIconSelected from './images/home/haier/wode.png';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Controllers from  './controllers';
import Mine from './js/mine';
import { Image} from 'react-native';
import './js/customComponent/CustomView';
//import { QRScannerView } from 'ac-qrcode';
// create a component
// const tabIcon = props => <Image style={{ height:30, width: 30 }} source={props.image} />;
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

const TabBarItem = props => {
    return (
        <Image
            resizeMode = "contain"
            source = {props.focused ? props.selectedImage : props.normalImage}
            style = {{tintColor: props.tintColor, width: 25, height: 25}}
        />
    );
}

const router = TabNavigator(
    {
        MainTab: {
            screen: HomeRouter,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor, focused }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage= {ZhiFubaoIconNormal}
                        selectedImage= {ZhiFubaoIconSelected}
                    />
                ),
            },
        },
        SettingsTab: {
            screen: MineTab,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor, focused }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage= {MineIconSelected}
                        selectedImage= {MineIconSelected}
                    />
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
//const router = codePush(mrouter);

//make this component available to the app
export default router;
