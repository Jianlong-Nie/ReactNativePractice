import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './js/ui/home';
import ZhiFubaoIconSelected from './images/home/haier/zhuye_selected.png';
import ZhiFubaoIconNormal from './images/home/haier/zhuye.png';
import MineIconSelected from './images/home/haier/wode.png';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Controllers from  './controllers';
import Mine from './js/ui/mine';
import { Image, Dimensions, View} from 'react-native';
import './js/ui/customComponent/CustomView';
import ProgressHud from './js/ui/ProgressHud';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeProgress } from './js/redux/Actions';

const HomeRouter = StackNavigator(
    {
        ...Controllers,
        Main:{
            screen: Home,
        }
    },
    {
        initialRouteName: 'Main',
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
    tintColor: PropTypes.string.isRequired,
};

const tabBarIcon = ({ tintColor, focused }) => (
    <TabBarItem
        tintColor={tintColor}
        focused={focused}
        normalImage= { ZhiFubaoIconNormal }
        selectedImage= {ZhiFubaoIconSelected}
    />
);

const tabBarMineIcon = ({ tintColor, focused }) => (
    <TabBarItem
        tintColor={ tintColor }
        focused={focused}
        normalImage= {MineIconSelected}
        selectedImage= {MineIconSelected}
    />
);

const Router = TabNavigator(
    {
        MainTab: {
            screen: HomeRouter,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: tabBarIcon,
            },
        },
        SettingsTab: {
            screen: MineTab,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: tabBarMineIcon,
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

const { width,height } = Dimensions.get('window');
// create a component
class mrouter extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.progressHud !== nextProps.progressHud) {
            return true;
        } 
        return false;  
    }
    render() {
        return (
            <View style={{ width,height }}>
                <Router />
                {
                    this.props.progressHud ?  <ProgressHud /> : null
                }
               
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(changeProgress, dispatch),
});

const mapStateToProps = (state, ownProps) => {
    return {
        progressHud: state.progressHud,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(mrouter);
