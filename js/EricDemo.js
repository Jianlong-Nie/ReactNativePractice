import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DatePicker, List, ImagePicker} from 'antd-mobile';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];


class PickerDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startValue: undefined,
            endValue: null,
            endOpen: false,
            files: data,
        };
    }

    onStartChange (value){
        this.onDateChange('startValue', value);
    }
    onDateChange(field, value){
        this.setState({
            [field]: value,
        });
    }
    onImageChange(files, type, index){
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    render() {
        const { files } = this.state;
        return (
            <View style={{ marginTop: 30 }}>
                <List>
                    <DatePicker mode="date">
                        <List.Item arrow="horizontal">
                            选择日期
                        </List.Item>
                    </DatePicker>
                </List>

                <List>
                    <DatePicker mode="time">
                        <List.Item arrow="horizontal">
                            选择时间
                        </List.Item>
                    </DatePicker>
                </List>

                <View style={{ height: 30 }}/>

                <ImagePicker
                    files={files}
                    onChange={this.onImageChange.bind(this)}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 5}
                />
            </View>
        );
    }
}
export default PickerDemo;