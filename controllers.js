import WebView from './js/WebView';
import SegmentComponent from "./js/home/SegmentComponent";
import InstallView from './js/home/install';
import PickerDemo from './js/EricDemo';
const NavColor = '#c60c1b';
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
    }
};

export default Routes;
