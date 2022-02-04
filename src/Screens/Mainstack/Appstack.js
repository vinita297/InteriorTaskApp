import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//mainAppStack
import Layout from './Layout';
import ChatScreen from './ChatScreen'

// StackNavigation
const Appstack = createStackNavigator();

const CreateAppStack = () => {
    return (
        <Appstack.Navigator initialRouteName="Layout">
            <Appstack.Screen
                name="Layout"
                component={Layout}
                options={{ headerShown: false }}
            />
            <Appstack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ headerShown: false }}
            />
        </Appstack.Navigator>
    );
};

export default CreateAppStack;