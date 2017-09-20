//import liraries
import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
// create a component

var functions = [];

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        functions = [];
        functions.push('constructor');
        this.state = {
            functions
        };
        console.log('====================================');
        console.log('constructor方法');
        console.log('====================================');
    }

    componentWillMount() {
        functions.push('componentWillMount');
        console.log('====================================');
        console.log('componentWillMount方法');
        console.log('===================================='); 
    }

    componentDidMount() {
        functions.push('componentDidMount');
        this.setState({
            functions
        });
        console.log('====================================');
        console.log('componentDidMount方法');
        console.log('===================================='); 
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        functions.push('shouldComponentUpdate');
        this.setState({
            functions
        });
        console.log('====================================');
        console.log(`shouldComponentUpdate方法${JSON.stringify(nextProps)}`);
        console.log('===================================='); 
        return true;
    }
    
    componentWillReceiveProps(nextProps) {
        functions.push('componentWillReceiveProps');
        console.log('====================================');
        console.log(`shouldComponentUpdate方法${JSON.stringify(nextProps)}`);
        console.log('===================================='); 
    }
    
    componentWillUpdate() {
        functions.push('componentWillUpdate');
        console.log('====================================');
        console.log('componentWillUpdate方法');
        console.log('====================================');
    }

    componentDidUpdate(prevProps, prevState) {
        functions.push('componentDidUpdate');
        console.log('====================================');
        console.log('数据类型',typeof prevProps);
        console.log('====================================');
        console.log('====================================');
        console.log(`shouldComponentUpdate方法${JSON.stringify(prevProps)}`);
        console.log('===================================='); 
    }
    componentWillUnmount() {
        functions.push('componentWillUnmount');
        console.log('====================================');
        console.log('componentWillUnmount方法');
        console.log('====================================');
    }
    
    render() {
        console.log('====================================');
        console.log('render方法');
        console.log('====================================');
        functions.push('render');
        return (
            <View style={styles.container}>
                <FlatList 
                    style = {{height,width}}
                    data= { this.state.functions }
                    renderItem = {
                        (item)=> {
                            console.log('====================================');
                            console.log(item);
                            console.log('====================================');
                            return (<TouchableOpacity style={styles.item}>
                                <Text style={styles.itemText}>
                                    {item.item}
                                </Text>
                            </TouchableOpacity>);
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
        height,
        width
    },
    item: {
        height: 50,
    },
    itemText: {
        fontSize: 16,
        marginLeft: 15,
        height:50,
        lineHeight: 50,
    }
});

//make this component available to the app
export default LifeCycle;
