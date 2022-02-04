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

const Advertise = () => {
    return (
        <View style={styles.viewstyle}>
            <ImageBackground
                style={{
                    height: height / 5,
                    width: width / 1.07,
                }}
                source={images.ImagesHome.png5}
                resizeMode={'cover'}
                imageStyle={{ borderRadius: 18 }}

            >
                <View style={{ width: width / 2.7 }}>
                    <Text style={styles.txtstyle1}>
                        Find properties which match your budget
                    </Text>
                    <Text style={styles.txtstyle2}>
                        With affordability calculator
                    </Text>
                    <TouchableOpacity style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={styles.txtstyle3}>
                            Match now
                        </Text>
                        <Fontisto
                            style={{ alignSelf: 'center', margin: 10 }}
                            name='arrow-right-l'
                            color={'#808080'}
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

var styles = StyleSheet.create({

    viewstyle: {
        // paddingLeft: 15,
        // paddingRight: 15,
        height: height / 5,
        width: width / 1.07,
        backgroundColor: '#fff',
        marginLeft: 10,
        borderRadius: 18,
        marginBottom: 20,
        marginTop: 20
    },
    txtstyle1: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
        color: '#000'
    },
    txtstyle2: {
        alignSelf: 'center',
        marginTop: 8,
        fontSize: 14,
        color: '#000'
    },
    txtstyle3: {
        fontWeight: 'bold',
        marginTop: 12,
        fontSize: 15,
        color: '#808080',
        marginLeft: 10,
    },

});

export default Advertise;