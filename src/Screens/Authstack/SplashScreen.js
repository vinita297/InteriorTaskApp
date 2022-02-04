import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';

var { height, width } = Dimensions.get('window');


class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'AppStack' }],
            });
        }, 500);
    }


    render() {
        return (
            <View style={styles.__contianer}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor='#000'
                />
                <Text>
                    Vininere
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    __contianer: {
        flex: 1,
        // backgroundColor: Colors.white,
    },
    __imageContainer: {
        flex: 1,
        width: width,
        height: height,
    },
    __defaultLogo: {
        resizeMode: 'contain',
        width: width - 20,
        height: '60%',
    },
    __iconBg: {
        height: 80,
        width: 80,
        backgroundColor: '#fff',
        elevation: 6,
        borderRadius: 40,
        shadowColor: '#470000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default SplashScreen;