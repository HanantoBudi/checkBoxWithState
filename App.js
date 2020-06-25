/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, CheckBox,} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      check: false
    }
  }
  checkBoxChange() {
    alert("Test Check Box")
  }
  checkBoxState() {
    this.setState({
      check: !this.state.check
    })
    alert("Now value of checkBox is "+this.state.check)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>React-Native Check Box</Text>
        <CheckBox value={this.state.check} onChange={()=>this.checkBoxState()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
