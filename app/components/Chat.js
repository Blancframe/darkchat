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
        return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight
                    underlayColor={'#4e4273'}
                    onPress={() => this.onBackPress()}>
                    <View style={styles.backContainer}>
                        <Image
                            style={styles.backBtn}
                            source={require('./../images/plus.png')}
                        />
                    </View>
                </TouchableHighlight>
                <View style={styles.chatTitle}>
                    <Text
                        source={require('./../images/plus.png')}>
                        Text from chat
                    </Text>
                </View>
                <View style={styles.removeContainer}>
                    <Image
                        style={styles.removeChatBtn}
                        source={require('./../images/plus.png')}
                    />
                </View>
            </View>
            <Messages />
            <View style={styles.inputContainer}>
                <View style={styles.textContainer}>
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
    chatTitle: {
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
});
