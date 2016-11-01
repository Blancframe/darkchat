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
        temporaryID: 1,
        channelID: 1,
        text: 'Nope, you suck!',
        timestamp: Date.now(),
        inappropriateCount: 0
    }
]

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
            <View>
                <View>
                    <Text>{rowData.text}</Text>
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
        flex: 11,
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
    }
});
