import WebView from './js/WebView';
import SegmentComponent from "./js/home/SegmentComponent";
export const NavBarConfig = {
    headerStyle:{backgroundColor:'#c60c1b'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    tabBarVisible: false
};

const Routes = {
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
};

export default Routes;
