import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';

import Messages from './Messages';

const windowSize = Dimensions.get('window');

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    render() {
        let chatTitle = `${this.props.chatInfo}`;
        return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight
                    underlayColor={'#4e4273'}
                    onPress={() => this.onBackPress()}>
                    <View style={styles.backContainer}>
                        <Image
                            style={styles.backBtn}
                            source={require('./../images/back.png')}
                        />
                    </View>
                </TouchableHighlight>
                <View style={styles.titleContainer}>
                    <Text style={styles.chatTitle}>
                        {chatTitle}
                    </Text>
                </View>
                <View style={styles.removeContainer}>
                    <Image
                        style={styles.removeChatBtn}
                        source={require('./../images/close.png')}
                    />
                </View>
            </View>
            <Messages />
            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
                    <Image
                        style={styles.wallpaper}
                        source={require('./../images/wallpaper/space_wallpaper-1.jpg')}>
                    </Image>
                    <TextInput
                        style={styles.input}
                        value={this.state.message}
                        onChangeText={(text) => this.setState({message: text})}
                        />
                </View>
                <View style={styles.sendContainer}>
                    <TouchableHighlight
                        underlayColor={'#4e4273'}
                        onPress={() => this.onSendPress()}
                        >
                        <Text style={styles.sendLabel}>SEND</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        )
    }

    onBackPress() {
        this.props.navigator.pop();
    }

    onSendPress() {
        console.log(this.state.message);
        this.setState({message: ''});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#1C1C1C'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowSize.width,
        height: 54,
        backgroundColor: 'rgba(55, 55, 55, 0.6)',
        paddingLeft: 20,
        paddingRight: 20
    },
    backContainer: {
        alignItems: 'flex-start',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    removeContainer: {
        alignItems: 'flex-end',
    },
    backBtn: {
        width: 30,
        height: 30
    },
    removeChatBtn: {
        width: 30,
        height: 30
    },
    chatContainer: {
        flex: 11,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    chatTitle: {
        color: '#fff',
        fontSize: 18
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    sendContainer: {
        justifyContent: 'flex-end',
        paddingRight:  10
    },
    sendLabel: {
        color: '#ffffff',
        fontSize: 15
    },
    input: {
        width: windowSize.width - 70,
        color: '#555555',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        height: 32,
        borderColor: '#6E5BAA',
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
 },
 wallpaper: {
     width: windowSize.width,
     height: windowSize.height
 }
});
