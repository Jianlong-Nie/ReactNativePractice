import WebView from './js/ui/WebView/WebViewExample';
import CustomWebView from './js/ui/WebView';
import SegmentComponent from './js/ui/home/SegmentComponent';
import AnimateComponent from './js/ui/home/AnimateComponent';

import InstallView from './js/ui/home/install';
import PickerDemo from './js/ui/picker/EricDemo';
const NavColor = '#c60c1b';
import QRScanner from './js/ui/qrScanner';
import BattleOrder from './js/ui/battleOrder';
import WaterStore from './js/ui/home/WaterStore';
import EditWeb from './js/ui/weblist';
import AntDesign from './js/ui/antDesign';
import AntDesignTwo from './js/ui/antDesinTwo';
import AntDesignThree from './js/ui/antDesinThree';
import MapScene from './js/ui/map/index';
import MapTypes from './js/ui/map/map-types';
import Layers from './js/ui/map/layers';
import Indoor from './js/ui/map/indoor';
import Animated from './js/ui/map/animated';
import Controls from './js/ui/map/controls';
import Gestures from './js/ui/map/gestures';
import Marker from './js/ui/map/marker';
import Polyline from './js/ui/map/polyline';
import Polygon from './js/ui/map/polygon';
import Circle from './js/ui/map/circle';
import Events from './js/ui/map/events';
import Navigation from './js/ui/map/navigation';
import Login from './js/ui/login/login';
import X5WebView from './js/ui/WebView/X5WebViewTest';
import CreactFactory from './js/ui/Creater';


export const NavBarConfig = {
    headerStyle: { backgroundColor: NavColor },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
    tabBarVisible: false,
    headerBackTitle: '',
};

const Routes = {
    CreactFactory: {
        name: 'CreactFactory',
        description: 'CreactFactory',
        screen: CreactFactory,
        navigationOptions: {
            ...NavBarConfig,
            title: '定制',
        } 
    },
    EditWeb: {
        name: 'EditWeb',
        description: 'EditWeb',
        screen: EditWeb,
        navigationOptions: {
            ...NavBarConfig,
            title: '添加网站',
        }
    },
    AntDesignTwo: {
        name: 'AntDesignTwo',
        description: 'AntDesignTwo',
        screen: AntDesignTwo,
        navigationOptions: {
            ...NavBarConfig,
            title: 'antDesign',
        }
    },
    AntDesignThree: {
        name: 'AntDesignThree',
        description: 'AntDesignThree',
        screen: AntDesignThree,
        navigationOptions: {
            ...NavBarConfig,
            title: 'antDesign',
        }
    },
    InstallView: {
        name: 'InstallView',
        description: 'InstallView',
        screen: InstallView,
        navigationOptions: {
            ...NavBarConfig,
            title: '安装',
        }
    },
    WebView: {
        name: 'WebView',
        description: 'WebView',
        screen: WebView,
        navigationOptions: {
            title: '网页',
            ...NavBarConfig,
        }
    },
    CustomWebView: {
        name: 'CustomWebView',
        description: 'WebView',
        screen: CustomWebView,
        navigationOptions: {
            title: '网页',
            ...NavBarConfig,
        }
    },


    SegmentComponent: {
        name: 'SegmentComponent',
        description: 'SegmentComponent',
        screen: SegmentComponent,
        navigationOptions: {
            title: 'SegmentComponent',
            ...NavBarConfig,
        }
    },
    AntDesign: {
        name: 'AntDesign',
        description: 'AntDesign',
        screen: AntDesign,
        navigationOptions: {
            title: 'AntDesign',
            ...NavBarConfig,
        }
    },
    AnimateComponent: {
        name: 'AnimateComponent',
        description: 'AnimateComponent',
        screen: AnimateComponent,
        navigationOptions: {
            title: 'AnimateComponent',
            ...NavBarConfig,
        }
    },
    PickerDemo: {
        name: 'PickerDemo',
        description: 'DatePicker and ImagePicker',
        screen: PickerDemo,
        navigationOptions: {
            title: 'Picker',
            ...NavBarConfig,

        }
    },
    WaterStore: {
        name: 'WaterStore',
        description: 'WaterStore',
        screen: WaterStore,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
            ...NavBarConfig,
        }),
    },
    QRScanner: {
        name: 'QRScanner',
        screen: QRScanner,
        navigationOptions: {
            title: '扫描二维码',
            ...NavBarConfig,
        }
    },
    BattleOrder: {
        name: 'BattleOrder',
        screen: BattleOrder,
        navigationOptions: {
            title: '抢单',
            ...NavBarConfig,
        }
    },
    MapScene: {
        name: 'MapScene',
        screen: MapScene,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    MapTypes: {
        screen: MapTypes,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Layers: {
        screen: Layers,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Indoor: {
        screen: Indoor,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Animated: {
        screen: Animated,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Controls: {
        screen: Controls,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Gestures: {
        screen: Gestures,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Marker: {
        screen: Marker,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Polyline: {
        screen: Polyline,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Polygon: {
        screen: Polygon,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Circle: {
        screen: Circle,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Events: {
        screen: Events,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Navigation: {
        screen: Navigation,
        navigationOptions: {
            title: '地图',
            ...NavBarConfig,
        }
    },
    Login: {
        name:'登录',
        screen: Login,
        navigationOptions: {
            title:'登录',
            ...NavBarConfig,
        }
    },
    X5WebViewTest:{
        name:'X5WebView',
        screen:X5WebView,
        navigationOptions: {
            title:'X5WebView',
            ...NavBarConfig,
        }
    },

};

export default Routes;
