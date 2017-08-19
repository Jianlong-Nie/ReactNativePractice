import WebView from './js/WebView/WebViewExample';
import CustomWebView from './js/WebView';
import SegmentComponent from './js/home/SegmentComponent';
import AnimateComponent from './js/home/AnimateComponent';

import InstallView from './js/home/install';
import PickerDemo from './js/picker/EricDemo';
const NavColor = '#c60c1b';
import QRScanner from './js/qrScanner';
import BattleOrder from './js/battleOrder';
import WaterStore from './js/home/WaterStore';
import EditWeb  from './js/weblist';
import AntDesign from './js/antDesign';
import AntDesignTwo from './js/antDesinTwo';
import AntDesignThree from './js/antDesinThree';

export const NavBarConfig = {
    headerStyle:{backgroundColor:NavColor},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    tabBarVisible: false,
    headerBackTitle: '',
};

const Routes = {
    EditWeb: {
        name: 'EditWeb',
        description: 'EditWeb',
        screen: EditWeb,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions :{
            ...NavBarConfig,
            title: '添加网站',
        }
    },
    AntDesignTwo: {
        name: 'AntDesignTwo',
        description: 'AntDesignTwo',
        screen: AntDesignTwo,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions :{
            ...NavBarConfig,
            title: 'antDesign',
        }
    },
    AntDesignThree: {
        name: 'AntDesignThree',
        description: 'AntDesignThree',
        screen: AntDesignThree,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions :{
            ...NavBarConfig,
            title: 'antDesign',
        }
    },
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
        }
    },
    WebView: {
        name: 'WebView',
        description: 'WebView',
        screen: WebView,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions: {
            title: '网页',
            ...NavBarConfig,
        }
    },
    CustomWebView: {
        name: 'CustomWebView',
        description: 'WebView',
        screen: CustomWebView,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}`,
        // }),
        navigationOptions: {
            title: '网页',
            ...NavBarConfig,
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
    AntDesign:{
        name:'AntDesign',
        description:'AntDesign',
        screen:AntDesign,
        navigationOptions:{
            title: 'AntDesign',
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
    PickerDemo:{
        name:'PickerDemo',
        description:'DatePicker and ImagePicker',
        screen:PickerDemo,
        navigationOptions:{
            title:'Picker',
            ...NavBarConfig,

        }
    },
    WaterStore:{
        name:'WaterStore',
        description:'WaterStore',
        screen:WaterStore,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}`,
            ...NavBarConfig,
        }),
    },
    QRScanner: {
        name: 'QRScanner',
        screen: QRScanner,
        navigationOptions:{
            title: '扫描二维码',
            ...NavBarConfig,
        }
    },
    BattleOrder : {
        name: 'BattleOrder',
        screen: BattleOrder,
        navigationOptions:{
            title: '抢单',
            ...NavBarConfig,
        }
    }
};

export default Routes;
