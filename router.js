import React from 'react';
import PropTypes from 'prop-types';
import Home from './js/ui/home';
import ZhiFubaoIconSelected from './images/home/haier/zhuye_selected.png';
import ZhiFubaoIconNormal from './images/home/haier/zhuye.png';
import MineIconSelected from './images/home/haier/wode.png';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Controllers from  './controllers';
import Mine from './js/ui/mine';
import { Image} from 'react-native';
import './js/ui/customComponent/CustomView';

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
};

TabBarItem.propTypes = {
    focused: PropTypes.bool.isRequired,
    selectedImage: PropTypes.string.isRequired,
    normalImage: PropTypes.string.isRequired,
    tintColor: PropTypes.string.isRequired,
};

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
        showIcon: true,
        tabBarComponent: TabBarBottom, 
        tabBarOptions:{
            activeTintColor: '#c60c1b',
            inactiveTintColor: 'gray',
            style: { backgroundColor: 'white'},
            upperCaseLabel: false,
            showIcon: true,
        }
    }
);



export default router;
