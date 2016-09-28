import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
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
                    onPress={() => this.onBackPress()}
                    style={{marginLeft: 15}}
                    >
                    <Text>
                        <Text style={{color: '#fff'}}>&lt; Back</Text>
                        <Text>The title of the Chat</Text>
                    </Text>
                </TouchableHighlight>
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
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(55, 55, 55, 0.6)',
        paddingTop: 20,
        paddingBottom: 20
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
