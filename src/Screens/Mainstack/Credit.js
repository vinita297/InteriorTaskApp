import React, { Component } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Credit = () => {

    return (
        <SafeAreaView>

            <View>
                <Text>
                    Read the docs to discover what to do next:
                </Text>
                <FontAwesome5 name="comments" size={30} color="#900" />
            </View>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
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

export default Credit;
