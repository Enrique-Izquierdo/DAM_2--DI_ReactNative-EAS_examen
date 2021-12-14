/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class TitolDada
 * @summary Component que serveix per a mostrar un titol amb la font evanescent i una dada en negreta amb font normal
 * @property titol: Text a mostrar en font evanescent
 * @property dada: Text a mostrar en negreta i font normal
 *
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class TitolDada extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  titol: {
    fontSize: 25,
    fontFamily: 'evanescent',
  },
  dada: {
    color: 'black',
    fontSize: 18,
  },
});
