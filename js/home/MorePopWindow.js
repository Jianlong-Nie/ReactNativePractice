import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Dimensions,
} from 'react-native';
import {WhiteSpace,} from 'antd-mobile';
import IconScan from '../../images/home/home_scan.png';
import IconXiu from '../../images/home/home_xiu.png';
const {height,width} = Dimensions.get('window');
const basePx = 375;

const mTop =  64;

let mwidth = 95;
let mheight = 100;
const marginTop = mTop;
export default class MorePopWindow extends Component {

    pix2dp = (px) => {
        return px *  width / basePx
    }
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        }
        mwidth = this.props.width ;
        mheight = this.props.height ;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.show });
    }

    closeModal() {
        this.setState({
            isVisible: false
        });
        this.props.closeModal(false);
    }

    scan() {
       alert('点击了扫一扫');
    }

    render() {
        return (
            <View style={styles.container}>
              <Modal
                  transparent={true}
                  visible={this.state.isVisible}
                  animationType={'fade'}
                  onRequestClose={() => this.closeModal()}>
                <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => this.closeModal()}>

                  <View style={styles.modal}>
                    <TouchableOpacity activeOpacity={1} onPress={this.scan.bind(this)} style={styles.itemView}>
                      <Image style={styles.imgStyle} source={IconScan} />
                      <Text style={styles.textStyle}>扫一扫</Text>
                    </TouchableOpacity>
                     <View style= {{backgroundColor:'white',height:0.5,width:mwidth}}/>
                    <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了付款码')} style={styles.itemView}>
                      <Image style={styles.imgStyle} source={IconXiu} />
                      <Text style={styles.textStyle}>付款码</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor:'rgba(0, 0, 0, 0.4)',
    },
    modal: {
        backgroundColor: '#696969',
        width: mwidth,
        height: mheight,
        position: 'absolute',
        left: width - mwidth - 10,
        top: marginTop,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 2,
    },
    imgStyle: {
        width: 20,
        height: 20,
    }
});