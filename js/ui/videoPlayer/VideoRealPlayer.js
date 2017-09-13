//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        return (
            <View style={styles.container}>
                <Player source={{uri: 'http://ovw1j2fft.bkt.clouddn.com/%E5%BC%A0%E4%B8%9C%E6%AD%A6%E5%A4%AA%E6%9E%81_24_%E7%AC%AC%E5%8D%81%E4%B9%9D%E5%BC%8F%EF%BC%9A%E8%82%98%E5%BA%95%E7%9C%8B%E6%8B%B3_%E9%AB%98%E6%B8%85_id19531177.mp4'}}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref;
                    }}                                      // Store reference
                    rate={1.0}                              // 0 is paused, 1 is normal.
                    volume={1.0}                            // 0 is muted, 1 is normal.
                    muted={false}                           // Mutes the audio entirely.
                    paused={false}                          // Pauses playback entirely.
                    resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                    repeat={true}                           // Repeat forever.
                    playInBackground={false}                // Audio continues to play when app entering background.
                    playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                    ignoreSilentSwitch={'ignore'}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                    progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                    style={styles.backgroundVideo} />
            </View>
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
