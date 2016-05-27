import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Channels from './components/Channels';
import Chat from './components/Chat';

const ROUTES = {
    channels: Channels,
    chat: Chat
}

export default class darkchat extends Component {
    renderScene(route, navigator) {
        let Component = ROUTES[route.name];
        return <Component navigator={navigator} {...route.passProps} />
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.HorizontalSwipeJump
    }

    render() {
        return (
            <Navigator
                style={styles.container}
                configureScene={this.configureScene}
                initialRoute={{name: 'channels'}}
                renderScene={this.renderScene}
              />
        );
    }

    /*
    renderLoadingView() {
        return (
            <View style={styles.container}>
            <Text>
            Loading...
            </Text>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <Navigator ref='nav'
                initialRoute={{name: 'My First Scene', index: 0}}
                renderScene={(route, navigator) =>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderChat}
                        style={styles.ListView}
                    />
                }
              />
        );
    }
    */

    /*
    renderChat(chat) {
        return (
            <TouchableHighlight onPress={this._onPressCell} underlayColor='pink'>
                <View  style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.roomName}>{chat.roomName}</Text>
                        <Text style={styles.status}>{chat.status}</Text>
                    </View>
                    <View style={styles.righContainer}>
                        <Image source={require('./images/arrow.png')} style={styles.arrow}>
                        </Image>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    */
}
/*
const ChatList = React.createClass({
    _navigate(name, type='Normal') {
        this.props.navigator.push({
            component: ChatRoom,
            passProps: {
                name: name
            },
            type: type
        })
    },
    render() {
        return (
            <TouchableHighlight onPress={()=> this._navigate('Testtt')}>
                <View  style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.roomName}>Office Talk</Text>
                        <Text style={styles.status}>active</Text>
                    </View>
                    <View style={styles.righContainer}>
                        <Image source={require('./images/arrow.png')} style={styles.arrow}>
                        </Image>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
});

const ChatRoom = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.roomName}>
                    Hello {this.props.name}
                </Text>
                <TouchableHighlight onPress={()=> this.props.navigator.pop()}>
                    <Text style={styles.roomName}> Go back </Text>
                </TouchableHighlight>
            </View>
        )
    }
})
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#1E1E1E'
    }
});
