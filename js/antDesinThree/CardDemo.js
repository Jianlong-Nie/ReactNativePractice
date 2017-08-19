//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, WhiteSpace } from 'antd-mobile';
// create a component
class CardDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="This is title"
                        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<Text>this is extra</Text>}
                    />
                    <Card.Body>
                        <Text>This is content of `Card`</Text>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<Text>extra footer content</Text>} />
                </Card>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
});

//make this component available to the app
export default CardDemo;
