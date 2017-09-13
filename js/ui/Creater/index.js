//import liraries
import React, { Component } from 'react';
import WKWebView from 'react-native-wkwebview-reborn';
import { connect } from 'react-redux';
import { changeProgress } from '../../redux/Actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const config = {
    'models': [
        {
            'name': 'qianpian',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001175.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LS-F21A01-17001.jpg',
            'textureS': 'http://cdn.models.3vyd.com/clothes/leather/textures/spc/LS-F21A01-17001_spc.jpg',
            //   "textureS": "./model/spc.jpg",
            'textureN': 'http://cdn.models.3vyd.com/clothes/leather/textures/DS_NOR.jpg',
            'textureRepeat': 6,
            'reflection': true,
            'doubleSide': true
        },
        {
            'name': 'qianpianlalian',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001928.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LALIAN_COR.jpg',
            'textureS': 'http://cdn.models.3vyd.com/clothes/leather/textures/LALIAN_SPC.jpg',
            'textureN': 'http://cdn.models.3vyd.com/clothes/leather/textures/DS_NOR.jpg',
            'textureRepeat': 1,
            'reflection': true
        },
        {
            'name': 'xiuzilaliankou',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001931.obj',
            'color': 8421504,
            'reflection': true
        },
        {
            'name': 'houpian',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001176.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LS-F21A01-17001.jpg',
            'textureS': 'http://cdn.models.3vyd.com/clothes/leather/textures/spc/LS-F21A01-17001_spc.jpg',
            'textureN': 'http://cdn.models.3vyd.com/clothes/leather/textures/DS_NOR.jpg',
            'textureRepeat': 6,
            'reflection': true,
            'doubleSide': true
        },
        {
            'name': 'lingzi',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001170.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LUOWEN_COR.jpg',
            'textureRepeat': 35
        },
        {
            'name': 'bu',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/BU.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LUOWEN_COR.jpg',
            'textureRepeat': 35
        },
        {
            'name': '003款袖兜',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001174.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LS-F21A01-17001.jpg',
            'textureS': 'http://cdn.models.3vyd.com/clothes/leather/textures/spc/LS-F21A01-17001_spc.jpg',
            'textureN': 'http://cdn.models.3vyd.com/clothes/leather/textures/DS_NOR.jpg',
            'textureRepeat': 6,
            'reflection': true
        },
        {
            'name': '003款袖子',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001177.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LS-F21A01-17001.jpg',
            'textureS': 'http://cdn.models.3vyd.com/clothes/leather/textures/spc/LS-F21A01-17001_spc.jpg',
            'textureN': 'http://cdn.models.3vyd.com/clothes/leather/textures/DS_NOR.jpg',
            'textureRepeat': 6,
            'reflection': true
        },
        {
            'name': '003款袖兜',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001174.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LS-F21A01-17001.jpg',
            'textureS': 'http://cdn.models.3vyd.com/clothes/leather/textures/spc/LS-F21A01-17001_spc.jpg',
            'textureN': 'http://cdn.models.3vyd.com/clothes/leather/textures/DS_NOR.jpg',
            'textureRepeat': 6,
            'reflection': true
        },
        {
            'name': 'xiuzilalian',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001933.obj',
            'texture': 'http://cdn.models.3vyd.com/clothes/leather/textures/LALIAN_COR.jpg',
            'textureS': 'http://cdn.models.3vyd.com/clothes/leather/textures/LALIAN_SPC.jpg',
            'textureN': 'http://cdn.models.3vyd.com/clothes/leather/textures/DS_NOR.jpg',
            'textureRepeat': 1,
            'reflection': true
        },
        {
            'name': 'xiuzilaliankou',
            'url': 'http://cdn.models.3vyd.com/clothes/leather/TCU001935.obj',
            'color': 8421504,
            'reflection': true
        }
    ]
};


class CreactFactory extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isRefreshing: false,
        };   
    }
    componentDidMount() {
        this.props.changeProgress(true);
    }
    go3D() {
        this.mwebview.evaluateJavaScript(`getInitialConfig('${JSON.stringify(config)}')`);
    }
    render() {
        const { navigation } = this.props;
        let murl = 'http://106.14.116.170/leather/3d.html';
        if (this.props.url) {
            murl = this.props.url;
        }
        if (navigation) {
            if (navigation.state.params.url) {
                murl = navigation.state.params.url;
            }  
        }
       
        return (
            <WKWebView
                source={{uri: murl}}
                scalesPageToFit={true}
                onMessage={(e) => {
                    const json = JSON.parse(e.body);
                    if (json.code === 200) {
                        this.props.changeProgress(false);
                        console.log('====================================');
                        console.log(`收到webview信息${JSON.stringify(e)}`);
                        console.log('====================================');
                    }
                    
                }}
                onLoadEnd= {(e) => {
                    this.go3D();
                }}
                ref={(mwebview)=>{this.mwebview = mwebview;}}
            />
        );
    }
}

CreactFactory.propTypes = {
    changeProgress: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({changeProgress}, dispatch),
});

const mapStateToProps = (state, ownProps) => {
    return {
        progressHud: state.progressHud,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreactFactory);
