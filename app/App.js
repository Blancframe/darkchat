
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

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

let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

let MOCKED_CHAT_DATA = [
    {roomName: 'Office Talk', status: 'activity', id:1},
    {roomName: 'Gamers for live', status: 'no activity', id:2},
    {roomName: '(╯°□°）╯︵ ┻━┻', status: 'activity', id:7},
    {roomName: 'The next office manager', status: 'no activity', id:4},
    {roomName: 'Best kept secrets', status: 'activity', id:3},
    {roomName: 'All about coffee', status: 'no activity', id:5},
    {roomName: 'Just rage!!', status: 'activity', id:6},
    {roomName: '┬──┬ ノ( ゜-゜ノ)', status: 'no activity', id:8},
];

export default class darkchat extends Component {
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
            dataSource: this.state.dataSource.cloneWithRows(MOCKED_CHAT_DATA),
            loaded: true,
        });
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

    renderBlabla() {
        return (
            <View style={styles.addChat}>
                <Image source={require('./images/add.png')} style={styles.add}>
                </Image>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        )
    }

    _onPressCell() {
        this.refs.nav.push(
            <View>
                <Text>
                    Testt
                </Text>
            </View>
        )
    }

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)'
  },
  leftContainer: {
      flex: 1,
      alignItems: 'flex-start',
  },
  righContainer: {
      flex: 1,
      alignItems: 'flex-end',
      paddingTop: 15,
  },
  thumbnail: {
      width: 53,
      height: 81
  },
  roomName: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'left',
      color: '#ffffff'
  },
  status: {
      textAlign: 'left',
      color: '#ABABAB',
      fontSize: 12
  },
  listView: {
      paddingTop: 20,
      backgroundColor: '#919191'
  },
  arrow: {
      width: 11.12,
      height: 19.41
  },
  addChat: {
      flex: 1,
      flexDirection: 'row',
      padding: 30
  }
});
