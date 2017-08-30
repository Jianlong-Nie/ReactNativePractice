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
import EditWeb from './js/weblist';
import AntDesign from './js/antDesign';
import AntDesignTwo from './js/antDesinTwo';
import AntDesignThree from './js/antDesinThree';
import MapScene from './js/home/map/index';
import MapTypes from './js/home/map/map-types';
import Layers from './js/home/map/layers';
import Indoor from './js/home/map/indoor';
import Animated from './js/home/map/animated';
import Controls from './js/home/map/controls';
import Gestures from './js/home/map/gestures';
import Marker from './js/home/map/marker';
import Polyline from './js/home/map/polyline';
import Polygon from './js/home/map/polygon';
import Circle from './js/home/map/circle';
import Events from './js/home/map/events';
import Navigation from './js/home/map/navigation';
import Login from './js/login/login';


export const NavBarConfig = {
    headerStyle: { backgroundColor: NavColor },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
    tabBarVisible: false,
    headerBackTitle: '',
};

const Routes = {
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

};

export default Routes;
