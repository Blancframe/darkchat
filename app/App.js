import React, { Component } from 'react';
import {
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
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#1E1E1E',
      paddingTop: 20,
    }
});
