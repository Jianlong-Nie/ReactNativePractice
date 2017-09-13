//import liraries
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { Grid } from 'antd-mobile';

// create a component
class AppContent extends Component {
    constructor(props, context) {
        super(props, context);
        AsyncStorage.getItem('items', (error, items) => {
            console.log(`输出items${items}`);
            if (items) {
                this.state = {
                    data: JSON.parse(items)
                };
            }
        });
    }
    
    shouldComponentUpdate(nextProps, nextState) {
       if (this.props.mainReducer !== nextProps.mainReducer) {
           return true;
       } 
       return false;
    }
    
    addAction = (item) => {
        var mdata = this.state.data;
        mdata.splice(mdata.length - 1, 0, item);
        this.setState({data: mdata});
        // AsyncStorage.setItem('items', JSON.stringify(mdata), () => {
        // });
    }
    onClick = (dataItem) => {
        const {navigation, setParams} = this.props;
        switch (dataItem.type) {
            case '1': 
                navigation.navigate(dataItem.key, {name: dataItem.appName});
                break;
            default:
                break;
        }
    };

    render() {
        let apps = [];
        const { homeApps } = this.props.mainReducer;
        if (homeApps !== undefined) {
           apps = homeApps.filter((item) => item.type === '1'); 
        }
        return (
            <View style={styles.container}>
                <Grid
                    data={apps}
                    hasLine={false}
                    renderItem={dataItem => {
                        return (
                            <TouchableOpacity
                                onPress={() => this.onClick(dataItem)}
                                style={styles.itemcontainer}
                            >
                                <View style={styles.itemcontainer}>
                                    <Image resizeMode='contain'
                                           source={{uri: dataItem.appIcon}}
                                           style={styles.itemimage}/>
                                    <Text>{dataItem.appName}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemimage: {
        height: 30,
        width: 30,
        marginBottom: 10,
    },
});

//make this component available to the app
export default AppContent;
