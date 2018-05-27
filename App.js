import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { Constants } from 'expo';

// You can import from local files

// or any pure javascript modules available in npm

const Divider = ({ style }) => <View style={[styles.separator, style]} />;

const hairlineWidth = StyleSheet.hairlineWidth;

export default class App extends Component {
  state = {
    switchone: false,
    switchtwo: false,
    switchthree: false,
    switchfour: false,
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>

          <View style={styles.paragraph}>
            <Text>Airplane Mode</Text>
            <Switch
              onValueChange={this.switchOne}
              value={this.state.switchone}
              tintColor={'red'}
            />
          </View>

          <Divider />

          <View style={styles.paragraph}>
            <Text> Wi-Fi </Text>

            <Switch
              onValueChange={this.switchTwo}
              value={this.state.switchtwo}
              tintColor={'red'}
            />
          </View>
          <Divider />

          <View style={styles.paragraph}>
            <Text> Bluetooth </Text>
            <Switch
              thumbTintColor={'#d6d7da'}
              onValueChange={this.switchThree}
              value={this.state.switchthree}
              tintColor={'red'}
            />
          </View>

          <Divider />
          <View style={styles.paragraph}>
            <Text> {'Cellular'}</Text>
            <Switch
              thumbTintColor={'#d6d7da'}
              onValueChange={this.switchFour}
              value={this.state.switchfour}
              tintColor={'red'}
              onTintColor={'lime'}
            />
          </View>
        </View>
        <Divider />
        <Text />
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
  separator: {
    backgroundColor: hairlineWidth < 1 ? '#BCBBC1' : 'rgba(0, 0, 0, 0.12)',
    height: hairlineWidth,
    margin: 5,
  },

  row: {
    flex: 1,
    padding: 5,
    alignItems: 'stretch',
    borderBottomColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
  },

  paragraph: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#34495e',
  },
});
