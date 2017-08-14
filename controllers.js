import WebView from './js/WebView';

import SegmentComponent from "./js/home/SegmentComponent";

import InstallView from './js/home/install';

export const NavBarConfig = {
    headerStyle:{backgroundColor:'#c60c1b'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    tabBarVisible: false
};

const Routes = {
    InstallView: {
        name: 'InstallView',
        description: 'InstallView',
        screen: InstallView,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions :{
            title: '安装',
            headerStyle:{backgroundColor:'#c60c1b'},
            headerTitleStyle:{color:'white'},
            headerTintColor:'white',
            tabBarVisible: false
        }
    },
    SegmentComponent:{
        name:'SegmentComponent',
        description:'SegmentComponent',
        screen:SegmentComponent,
        navigationOptions:{
            title: 'SegmentComponent',
            headerStyle:{backgroundColor:'#c60c1b'},
            headerTitleStyle:{color:'white'},
            headerTintColor:'white',
            tabBarVisible: false
        }
    },
    WebView: {
        name: 'WebView',
        description: 'WebView',
        screen: WebView,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions :{
            title: '网页',
            headerStyle:{backgroundColor:'#c60c1b'},
            headerTitleStyle:{color:'white'},
            headerTintColor:'white',
            tabBarVisible: false
        }
    },
};

export default Routes;
