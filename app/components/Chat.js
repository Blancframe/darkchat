import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Chat extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TouchableHighlight
                        underlayColor={'#4e4273'}
                        onPress={this.onBackPress}
                        style={{marginLeft: 15}}
                        >
                        <Text style={{color: '#fff'}}>&lt; Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.chatContainer}>
                    <Text style={{color: '#000'}}>Chat</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={{color: '#000'}}>Input</Text>
                </View>
            </View>
        )
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(55, 55, 55, 0.6)',
        paddingTop: 20,
    },
    chatContainer: {
        flex: 11,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    }
});
