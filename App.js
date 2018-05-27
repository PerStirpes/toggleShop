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
          <Switch
            thumbTintColor={'grey'}
            onValueChange={this.switchOne}
            value={this.state.switchone}
            tintColor={'red'}
            onTintColor={'purple'}>
            {'Hi im a switch'}
          </Switch>

          <Divider />

          <Switch
            thumbTintColor={'grey'}
            onValueChange={this.switchTwo}
            value={this.state.switchtwo}
            tintColor={'red'}
            onTintColor={'purple'}
          />
          <Divider />


          <Switch
            thumbTintColor={'grey'}
            onValueChange={this.switchThree}
            value={this.state.switchthree}
            tintColor={'red'}
            onTintColor={'purple'}
          />
          <Divider />
          <Switch
            thumbTintColor={'grey'}
            onValueChange={this.switchFour}
            value={this.state.switchfour}
            tintColor={'red'}
            onTintColor={'lime'}
          />
          <Divider />
        </View>
        <Text style={styles.test}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url.
        </Text>
          <Text style={styles.paragraph}>
            Change code in the editor and watch it change on your phone!
            Save to get a shareable url.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    borderRadius: 100,
  },
  separator: {
    // Darker color if hairlineWidth is not thin enough
    backgroundColor: hairlineWidth < 1 ? '#BCBBC1' : 'rgba(0, 0, 0, 0.12)',
    height: hairlineWidth,
    margin: 5,
    alignItems: 'flex-start',
    
  },
  row: {
    flex: 1,
    margin: 10,
    padding: 5,
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    borderBottomColor: '#bbb',
    borderWidth: 10,
    borderColor: '#d6d7da',
    backgroundColor: 'white'
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  test: {
    margin: 5,
    borderWidth: 10,
    opacity: 0.5,
    padding: 3,
    borderRadius: 10,
  },
});
