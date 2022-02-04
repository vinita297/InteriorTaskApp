import React from 'react';
import {
    SafeAreaView,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import images from '../../res/images';
import Fontisto from 'react-native-vector-icons/Fontisto';

var { height, width } = Dimensions.get('window');

const VideoScreen = () => {
    return (
        <View style={styles.viewstyle}>
            <VideoPlayer
                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                videoWidth={1270}
                videoHeight={height - 50}
                thumbnail={images.ImagesHome.png3}
            />
            <Text style={styles.txtstyle1}>
                Live demo: Home buying sources
            </Text>
            <Text style={styles.txtstyle}>
                Join us any day for a live demo of Home Buying source
            </Text>
            <Text style={styles.txtstyle}>
                Time: 11:00 AM PT| 2:00 PM ET
            </Text>
            <Text style={styles.txtstyle}>
                Duration: 30 minutes plus live Q & A
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.txtstyle2}>Register now</Text>
                </TouchableOpacity>
                <View style={{
                    borderRadius: 30,
                    backgroundColor: '#8fbc8f',
                    width: 55,
                    height: 55,
                    alignSelf: 'center',
                    marginRight: 10,
                    marginTop: 10
                }}>

                    <Fontisto
                        style={{ alignSelf: 'center', margin: 10 }}
                        name='bell'
                        color={'#fff'}
                        size={30}
                    />
                </View>
            </View>
        </View>
    );
};

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    viewstyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: height / 2,
        width: width / 1.07,
        backgroundColor: '#fff',
        marginLeft: 10,
        borderRadius: 12,
    },
    txtstyle1: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        color: '#8fbc8f'
    },
    txtstyle: {
        marginTop: 5,
        fontSize: 15,
        marginLeft: 10
    },
    btnstyle: {
        height: 40,
        width: width / 2.9,
        backgroundColor: '#8fbc8f',
        borderRadius: 30,
        margin: 10,
        marginTop: 20
    },
    txtstyle2: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 8,
        fontSize: 15,
        color: '#fff'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default VideoScreen;