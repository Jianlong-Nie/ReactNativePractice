import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
// import PropsTypes from 'props-type';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onClick } from '../../redux/Actions';

class ReduxTest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.content}
                </Text>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.button} onPress={()=> {
                        {/* this.props.onClick('Redux on click Red!'); */}
                        this.props.dispatch({type: 'textReducer/onClick', payload: {content: 'Redux on click Red!'}});
                    }}>
                        <Text>redClick</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: 'blue'}]} onPress={()=> {
                        {/* this.props.onClick('Redux on click Blue!'); */}
                        this.props.dispatch({type: 'textReducer/onClick', payload: {content: 'Redux on click Blue!'}});
                    }}>
                        <Text>blueClick</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
        margin: 24,
        backgroundColor: 'red',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = state => ({
    content: state.textReducer.content,
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//     onClick,
// }, dispatch);


export default connect(mapStateToProps)(ReduxTest);