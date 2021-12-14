/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class
 * @summary Classe base per a iniciar una app en React Native
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Titol} from './components/Titol/Titol';
import {LlistaPersonatges} from './components/LlistaPersonatges/LlistaPersonatges';
import {Central} from './components/Central/Central';

export default class App extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
        <Titol style={styles.capsalera} />
        <Central style={styles.cosCentral} />
        <LlistaPersonatges style={styles.selectorPersonatges} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },
  capsalera: {
    borderColor: 'red',
    borderWidth: 3,
    margin: 1,
  },
  estilTitol: {
    fontFamily: 'evanescent',
    fontSize: 60,
  },
  cosCentral: {
    flex: 2,
    borderColor: 'blue',
    borderWidth: 3,
    margin: 1,
  },
  selectorPersonatges: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 3,
    margin: 1,
  },
});
