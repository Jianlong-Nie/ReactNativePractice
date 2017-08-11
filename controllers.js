import WebView from './js/WebView';

const Routes = {
  WebView: {
    name: 'WebView',
    description: 'WebView',
    screen: WebView,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
    }),
  }
};

export default Routes;
