import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';


//Screens
import Home from './Mainstack/Home';
import Credit from './Mainstack/Credit';
import Fovourite from './Mainstack/Fovourite';
import ChatScreen from './Mainstack/ChatScreen'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// BottomTab
const Tab = createBottomTabNavigator();

//Stacks
const homeStack = createStackNavigator();
const chatScreenStack = createStackNavigator();
const fovouriteStack = createStackNavigator();
const creditStack = createStackNavigator();


// const CreateHomeStack = () =>
//     <homeStack.Navigator initialRouteName="Home">
//         <homeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//     </homeStack.Navigator>

// const CreateChatStack = () =>
//     <chatScreenStack.Navigator initialRouteName="ChatScreen">
//         <chatScreenStack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
//     </chatScreenStack.Navigator>

// const CreateFavourStack = () =>
//     <fovouriteStack.Navigator initialRouteName="Fovourite">
//         <fovouriteStack.Screen name="Fovourite" component={Fovourite} options={{ headerShown: false }} />
//     </fovouriteStack.Navigator>

// const CreateCreditStack = () =>
//     <creditStack.Navigator initialRouteName="Credit">
//         <creditStack.Screen name="Credit" component={Credit} options={{ headerShown: false }} />
//     </creditStack.Navigator>

const CreateBottomTabNavigator = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#8fbc8f',
                tabBarinactiveTintColor: '#000',
                tabBarstyle: {
                    backgroundColor: '#000',
                    color: '#000',
                }
            }
            }
        >
            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Feather name="home" color={'#8fbc8f'} size={25} />
                    ),
                }} />
            <Tab.Screen
                name={"Credit"}
                component={Credit}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Credit',
                    tabBarIcon: () => (
                        <Ionicons name="speedometer-outline" color={'#8fbc8f'} size={25} />
                    ),
                }} />
            <Tab.Screen
                name={"Fovourite"}
                component={Fovourite}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Favourite',
                    tabBarIcon: () => (
                        <Ionicons name="md-heart-outline" color={'#8fbc8f'} size={25} />
                    ),
                }} />
            <Tab.Screen
                name={"ChatScreen"}
                component={ChatScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'ChatScreen',
                    tabBarStyle: { display: "none" },
                    tabBarIcon: () => (
                        <Octicons name="comment-discussion" color={'#8fbc8f'} size={25} />
                    ),
                }} />

        </Tab.Navigator>
    )
}

export default CreateBottomTabNavigator;