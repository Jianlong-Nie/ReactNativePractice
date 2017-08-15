import WebView from './js/WebView';
import SegmentComponent from "./js/home/SegmentComponent";
import AnimateComponent from './js/home/AnimateComponent';

import InstallView from './js/home/install';
import PickerDemo from './js/EricDemo';
const NavColor = '#c60c1b';
import QRScanner from './js/qrScanner';
import BattleOrder from './js/battleOrder';
export const NavBarConfig = {
    headerStyle:{backgroundColor:NavColor},
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
            ...NavBarConfig,
            title: '安装',
    WebView: {
        name: 'WebView',
        description: 'WebView',
        screen: WebView,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions: {
            title: '网页',
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
            ...NavBarConfig,
        }
    },
    AnimateComponent:{
        name:'AnimateComponent',
        description:'AnimateComponent',
        screen:AnimateComponent,
        navigationOptions:{
            title: 'AnimateComponent',
            ...NavBarConfig,
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
            ...NavBarConfig,
        }
    },
    PickerDemo:{
        name:'PickerDemo',
        description:'DatePicker and ImagePicker',
        screen:PickerDemo,
        navigationOptions:{
            title:'Picker',
            ...NavBarConfig,

        }
    },
    QRScanner: {
        name: 'QRScanner',
        screen: QRScanner,
        navigationOptions:{
            title: '扫描二维码',
            headerStyle:{backgroundColor:'#c60c1b'},
            headerTitleStyle:{color:'white'},
            headerTintColor:'white',
            tabBarVisible: false
        }
    },
    BattleOrder : {
        name: 'BattleOrder',
        screen: BattleOrder,
        navigationOptions:{
            title: '抢单',
            headerStyle:{backgroundColor:'#c60c1b'},
            headerTitleStyle:{color:'white'},
            headerTintColor:'white',
            tabBarVisible: false
        }
    }
};

export default Routes;
