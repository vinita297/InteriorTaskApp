import React, { Component } from 'react'
import {
    SafeAreaView,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import images from '../../res/images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import VideoScreen from './VideoScreen'
import { ScrollView } from 'react-native-gesture-handler';
import Advertise from './Advertise';

var { height, width } = Dimensions.get('window');


const DATA = [
    {
        id: '1',
        title: images.ImagesHome.png1,
        disc: 'First time Home buyers Course',
    },
    {
        id: '2',
        title: images.ImagesHome.png2,
        disc: 'First time Home buyers Course'
    },
];

const DATA1 = [
    {
        id: '1',
        clr: '#8fbc8f',
        icon: 'home',
        title: 'Home Match',
        disc: `Let's find homes matching your budget and requirements`
    },
    {
        id: '2',
        clr: '#fff',
        icon: 'coins',
        title: 'Home Stash',
        disc: `Let's find homes matching your budget and requirements`
    },
];

const Home = () => {

    return (
        <ScrollView style={{ backgroundColor: '#fff', margin: 5 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.viewStyle2}>
                    <ImageBackground
                        style={{
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius: 40,
                            height: height / 4,
                        }}
                        opacity={0.6}
                        source={images.ImagesHome.png4}
                        resizeMode={'cover'}
                        imageStyle={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}

                    >


                        <View style={styles.viewStyle3}>

                            <MaterialCommunityIcons style={{ marginLeft: 20, alignSelf: 'center' }} name="menu" color={'#fff'} size={25} />
                            <Text style={styles.textstyle}>Sell your home</Text>
                            <Fontisto style={{ marginLeft: 10, alignSelf: 'center' }} name="bell-alt" color={'#fff'} size={20} />

                        </View>
                        <View>
                            <Text style={styles.textstyle2}>
                                HOME
                            </Text>
                            <Text style={styles.textstyle3}>
                                By Champion Lender
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.txtstyle}>
                        Get started with
                    </Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={DATA1}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <View style={{
                                height: height / 7,
                                width: width / 2,
                                backgroundColor: '#fff',
                                marginLeft: 10,
                                borderRadius: 12,
                                borderRadius: 12,
                                backgroundColor: item.clr,
                            }}>
                                <View style={{
                                    padding: 10,
                                }}>
                                    <View style={{
                                        borderRadius: 20,
                                        backgroundColor: '#fff',
                                        width: 40,
                                        height: 40,
                                    }}>

                                        <FontAwesome5
                                            style={{ alignSelf: 'center', margin: 7 }}
                                            name={item.icon}
                                            color={'#8fbc8f'}
                                            size={20}
                                        />
                                    </View>

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        color: item.clr == '#8fbc8f' ? '#fff' : '#000'
                                    }}>
                                        {item.title}
                                    </Text>

                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 11,
                                        color: item.clr == '#8fbc8f' ? '#fff' : '#000'
                                    }}>
                                        {item.disc}
                                    </Text>
                                </View>

                            </View>
                        }
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.txtstyle1}>
                        See More
                    </Text>
                </View>

                <View>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <View style={{
                                height: height / 3.8,
                                width: width / 1.3,
                                backgroundColor: '#fff',
                                marginLeft: 10,
                                borderRadius: 12,
                            }}>
                                <Image
                                    source={item.title}
                                    style={{
                                        resizeMode: 'cover',
                                        width: width / 1.3,
                                        height: height / 5.2,
                                        borderRadius: 12
                                    }}
                                />
                                <Text style={{
                                    fontWeight: 'bold',
                                    padding: 10,
                                    marginTop: 5
                                }}>
                                    {item.disc}
                                </Text>
                            </View>
                        }
                    />
                </View>
                <Text style={styles.txtstyle}>
                    Upcoming webinars
                </Text>
                <VideoScreen />
                <Advertise />
            </SafeAreaView >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        flex: 1
    },
    faltlistStyle: {
        marginTop: 10
    },
    txtstyle: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    txtstyle1: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 13,
        color: '#8fbc8f'
    },
    viewStyle2: {
        height: height / 4,
    },
    viewStyle3: {
        flexDirection: 'row',
        marginTop: 20
    },
    textstyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: width / 2.5
    },
    textstyle2: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 26,
        marginLeft: width / 6,
        marginTop: 30
    },
    textstyle3: {
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        marginLeft: width / 6,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Home;
