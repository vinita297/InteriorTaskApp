import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/Screens/Authstack/SplashScreen';

import CreateAppStack from './src/Screens/Mainstack/Appstack';

const authStack = createStackNavigator();
const mainStack = createStackNavigator();


class App extends Component {

  createAuthStack = () => (
    <authStack.Navigator initialRouteName="SplashScreen">
      <authStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </authStack.Navigator>
  );

  createMainStack = () => (
    <mainStack.Navigator initialRouteName="authStack">
      <mainStack.Screen
        name={'AuthStack'}
        component={this.createAuthStack}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name={'AppStack'}
        component={CreateAppStack}
        options={{ headerShown: false }}
      />
    </mainStack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor='#fff'
          barStyle={'dark-content'}
        />
        {this.createMainStack()}
      </NavigationContainer>
    );
  }
}

export default App;