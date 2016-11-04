import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';

let MOCKED_MESSAGES_DATA = [
    {
        temporaryID: 1,
        channelID: 1,
        text: 'Let me tell you about this event yesterday. It was so crazy! We party all night long! Anyone of you went to this?',
        timestamp: Date.now(),
        inappropriateCount: 0
    },
    {
        temporaryID: 2,
        channelID: 1,
        text: 'Nope, you suck!',
        timestamp: Date.now(),
        inappropriateCount: 0
    },
    {
        temporaryID: 3,
        channelID: 1,
        text: 'I once went to the Warehouse 33. ',
        timestamp: Date.now(),
        inappropriateCount: 0
    },
    {
        temporaryID: 2,
        channelID: 1,
        text: 'Woow! I was there. I liked the dancing act. Everyone went crazy. Next time I definitely going to dress up as a jedi.',
        timestamp: Date.now(),
        inappropriateCount: 0
    },
    {
        temporaryID: 3,
        channelID: 1,
        text: `Godard iPhone pop-up blog. Fingerstache biodiesel raw denim, readymade vinyl franzen celiac hammock aesthetic. Meggings chicharrones gentrify intelligentsia, ugh small batch williamsburg.com organic bitters try-hard authentic kombucha.Slow-carb meditation meggings, `,
        timestamp: Date.now(),
        inappropriateCount: 0
    },
    {
        temporaryID: 1,
        channelID: 1,
        text: 'Nope, you suck!',
        timestamp: Date.now(),
        inappropriateCount: 0
    }
]

const windowSize = Dimensions.get('window');

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(MOCKED_MESSAGES_DATA),
            loaded: true,
        });
    }

    renderLoadingView() {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>
                    Loading message list
                </Text>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMessages.bind(this)}
                style={styles.ListView}
            />
        )
    }

    renderMessages(rowData) {
        return (
            <View style={styles.messages}>
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{rowData.text}</Text>
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
    chatContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        borderWidth: 1,
        borderColor: 'red'
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#919191'
    },
    loadingContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 30,
      backgroundColor: '#1E1E1E'
    },
    loadingText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    messages: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: windowSize.width - 20,
        marginRight: 10,
        marginLeft: 10,
        zIndex: 2
    },
    messageContainer: {
        backgroundColor: '#000',
        marginTop: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgba(212, 212, 212, 0.5)'
    },
    messageText: {
        color: '#fff'
    }
});
