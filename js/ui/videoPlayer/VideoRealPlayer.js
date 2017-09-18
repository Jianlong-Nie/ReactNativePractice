//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Player from 'react-native-video';
// create a component
class Video extends Component {
    componentDidMount() {
        // Later to trigger fullscreen
        this.player.presentFullscreenPlayer();
        // To set video position in seconds (seek)
        this.player.seek(0);
    }
    
    render() {
        const { navigation } = this.props;
        const { state } = navigation;
        const murl = state.params.url;
        console.log('====================================');
        console.log(`播放视频url${murl}`);
        console.log('====================================');
        return (
            <Player source={{uri: murl}}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref;
                }}                                      // Store reference
                rate={1.0}                              // 0 is paused, 1 is normal.
                volume={1.0}                            // 0 is muted, 1 is normal.
                muted={false}                           // Mutes the audio entirely.
                paused={false}                          // Pauses playback entirely.                   // Fill the whole screen at aspect ratio.*
                repeat={true}                           // Repeat forever.
                playInBackground={false}                // Audio continues to play when app entering background.
                playWhenInactive={true}                // [iOS] Video continues to play when control or notification center are shown.
                ignoreSilentSwitch={'ignore'}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                style={styles.backgroundVideo} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

//make this component available to the app
export default Video;
