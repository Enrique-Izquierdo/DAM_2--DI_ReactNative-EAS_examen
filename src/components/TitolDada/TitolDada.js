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
        <Text style={styles.titol}>{this.props.titol}: </Text>
        <View style={{flex: 1, margin: 5}}>
          <Text style={styles.dada}>{this.props.dada}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
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
