import React, { Component } from 'react';
import {
    Text,
    Dimensions,
    View,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import CreateBottomTabNavigator from '../BottomStack';

var { height, width } = Dimensions.get('window');

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    async componentDidMount() {

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            );
        }
        return (
            <View style={{
                flex: 1,
                marginBottom: 10,
                width: width,
                borderRadius: 10,
                alignSelf: 'center',
            }}>
                <StatusBar
                    backgroundColor='#8fbc8f'
                    barStyle="light-content"
                />
                <CreateBottomTabNavigator />
            </View>
        );
    }
}

export default Layout;