import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  Dimensions
} from 'react-native';

const windowSize = Dimensions.get('window');

let MOCKED_CHAT_DATA = [
    {channelURL: 'office-talk', channelName: 'Office Talk', status: 'activity', id:1},
    {channelURL: 'gamers-for-live', channelName: 'Gamers for live', status: 'no activity', id:2},
    {channelURL: 'flip-table', channelName: '(╯°□°）╯︵ ┻━┻', status: 'activity', id:7},
    {channelURL: 'The-next-office-manager', channelName: 'The next office manager', status: 'no activity', id:4},
    {channelURL: 'best-kept-secrets', channelName: 'Best kept secrets', status: 'activity', id:3},
    {channelURL: 'all-about-coffee', channelName: 'All about coffee', status: 'no activity', id:5},
    {channelURL: 'just-rage', channelName: 'Just rage!!', status: 'activity', id:6},
    {channelURL: 'set-table', channelName: '┬──┬ ノ( ゜-゜ノ)', status: 'no activity', id:8},
];

export default class channels extends Component {
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

    renderLoadingView() {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>
                    Loading chat list
                </Text>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View>
                <View style={styles.addGroupBlock}>
                    <Image
                        source={require('./../images/add.png')}
                        style={styles.addGroupIcon}/>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderChannels.bind(this)}
                    style={styles.ListView}
                />
            </View>
        )
    }

    renderChannels(rowData) {
        return (
            <TouchableHighlight onPress={() => this.onChannelPress(rowData)}>
                <View  style={styles.container}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <View style={styles.leftContainer}>
                        <Text style={styles.channelName}>{rowData.channelName}</Text>
                        <Text style={styles.status}>{rowData.status}</Text>
                    </View>
                    <View style={styles.righContainer}>
                        <Image source={require('./../images/arrow.png')} style={styles.arrow}>
                        </Image>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    onChannelPress(info) {
        this.props.navigator.push({
            name: 'chat',
            passProps: {
                chatInfo: info
            }
        });
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
      maxWidth: 15,
      paddingTop: 15,
  },
  thumbnail: {
      width: 53,
      height: 81
  },
  channelName: {
      fontSize: 20,
      marginBottom: 0.7,
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
  addGroupBlock: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: windowSize.width,
      maxHeight: 54
  },
  addGroupIcon: {
      width: 30,
      height: 30
  },
  addChat: {
      flex: 1,
      flexDirection: 'row',
      padding: 30
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
