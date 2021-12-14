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


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.estilTitol}> Benvingut a l'examen</Text>
        <Text style={{fontFamily: 'evanescent', color: 'red', fontSize: 70}}>
          Molta Sort!!
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  estilTitol: {
    fontFamily: 'evanescent',
    fontSize: 60,
  },
  cosCentral: {},
  selectorPersonatges: {},
});
