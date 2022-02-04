import React, { useState, useCallback, useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { GiftedChat, InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';



var { height, width } = Dimensions.get('window');

const customtInputToolbar = props => {
    return (
        <InputToolbar
            {...props}
            containerStyle={{
                position: 'absolute',
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 25,
                marginTop: 10,
                borderWidth: 0.5,
                borderColor: '#555',
                borderRadius: 35

            }}
        />
    );
};

const renderSend = (props) => {
    return (
        <Send
            {...props}
            containerStyle={{
                borderColor: '#fff',
                marginRight: 10,
                marginBottom: 6,
            }}>
            <MaterialIcons
                name="send"
                size={35}
                color='#8fbc8f'
            />
        </Send>
    );
}

const renderBubble = props => {
    return (
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#8fbc8f',
                    // borderRadius: 30,
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 0,
                    padding: 5,
                },
                left: {
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 0,
                    padding: 5,
                }
            }}
        />
    )
};

const ChatScreen = () => {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    return (
        <View style={styles.viewstyle}>
            <View style={styles.viewstyle2}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{ alignSelf: 'center', marginLeft: 10 }}>
                    <Fontisto
                        name='arrow-left-l'
                        color={'#fff'}
                        size={25}
                    />
                </TouchableOpacity>
                <View style={styles.viewstyle4}></View>
                <Text style={styles.textstyle}>Amma Watson</Text>
                <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 50 }}>
                    <MaterialIcons
                        name='phone-in-talk'
                        color={'#fff'}
                        size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 20 }}>
                    <MaterialIcons
                        name='videocam'
                        color={'#fff'}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.viewstyle3}>
                <GiftedChat
                    placeholder={'Type Something...'}
                    alignTop={true}
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    renderInputToolbar={props => customtInputToolbar(props)}
                    renderBubble={props => renderBubble(props)}
                    renderSend={props => renderSend(props)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        </View>
    )
}
var styles = StyleSheet.create({

    viewstyle: {
        flex: 1,
        height: height,
        width: width / 1.03,
        backgroundColor: '#8fbc8f',
        marginLeft: 5,
        marginRight: 5,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40

    },
    viewstyle2: {
        height: height / 12,
        width: width / 1.03,
        backgroundColor: '#8fbc8f',
        flexDirection: 'row',
        borderRadius: 40

    },
    viewstyle3: {
        height: height - 50,
        width: width / 1.03,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    viewstyle4: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 40,
        alignSelf: 'center',
        marginLeft: 10
    },
    textstyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 10,
        color: '#fff',
        fontSize: 17
    }

});
export default ChatScreen;
