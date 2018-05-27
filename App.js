import React, { Component } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Switch,
} from 'react-native';
import { Constants } from 'expo';

const Divider = ({ style }) => <View style={[styles.separator, style]} />;

export default class App extends Component {
  state = {
    switchone: false,
    switchtwo: false,
    switchthree: false,
    switchfour: false,
    switchfive: false,
    inputValue: 'You can change me!',
  };

  switchOne = () =>
    this.setState(({ switchone }) => ({
      switchone: !switchone,
    }));

  switchTwo = () =>
    this.setState(({ switchtwo }) => ({
      switchtwo: !switchtwo,
    }));

  switchThree = () =>
    this.setState(({ switchthree }) => ({
      switchthree: !switchthree,
    }));

  switchFour = () =>
    this.setState(({ switchfour }) => ({
      switchfour: !switchfour,
    }));

  switchFive = () =>
    this.setState(({ switchfive }) => ({
      switchfive: !switchfive,
    }));

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>

          <View style={styles.toggle}>
            <Text>Airplane Mode</Text>
            <Switch
              onValueChange={this.switchOne}
              value={this.state.switchone}
              tintColor={'red'}
            />
          </View>

          <Divider />

          <View style={styles.toggle}>
            <Text> Wi-Fi </Text>

            <Switch
              onValueChange={this.switchTwo}
              value={this.state.switchtwo}
              tintColor={'red'}
            />
          </View>
          <Divider />

          <View style={styles.toggle}>
            <Text> Bluetooth </Text>
            <Switch
              onValueChange={this.switchThree}
              value={this.state.switchthree}
              tintColor={'red'}
            />
          </View>

          <Divider />
          <View style={styles.toggle}>
            <Text> {'Cellular'}</Text>
            <Switch
              onValueChange={this.switchFour}
              value={this.state.switchfour}
              tintColor={'#bbb'}
            />
          </View>
          <Divider />
          <View style={styles.toggle}>
            <Text> {'Personal Hotspot'}</Text>
            <Switch
              onValueChange={this.switchFive}
              value={this.state.switchfive}
              tintColor={'#bbb'}
            />
          </View>
          <Divider />
        </View>
        <Divider />

        <View style={styles.card}>
          <TouchableOpacity>
            <Text>
              Notifications{' '}
            </Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity>
            <Text>
              Control Center
            </Text>

          </TouchableOpacity>
          <Divider />
          <TouchableOpacity>
            <Text>
              Do Not Distrub{' '}
            </Text>
             <Entypo name="chevron-thin-right" size={20} color="green" />
          </TouchableOpacity>
          <Divider />

          <TextInput
            value={this.state.inputValue}
            onChangeText={this._handleTextChange}
            style={{ width: 200, height: 44, padding: 8 }}
          />

        </View>
 <Entypo name="chevron-thin-right" size={20} color="green" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  row: {
    alignItems: 'stretch',
    padding: 9,
    borderBottomColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
  },
  card: {
    alignItems: 'stretch',

    padding: 9,
    borderWidth: 1,
    borderRadius: 20,
    borderBottomColor: '#bbb',
    borderColor: '#d6d7da',
    backgroundColor: 'white',
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: StyleSheet.hairlineWidth < 1
      ? '#BCBBC1'
      : 'rgba(0, 0, 0, 0.12)',
    height: StyleSheet.hairlineWidth,
    margin: 5,
  },
});
