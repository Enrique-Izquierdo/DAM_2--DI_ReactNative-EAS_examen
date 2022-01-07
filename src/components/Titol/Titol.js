/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class Titol
 * @summary Component que serveix per a representar un títol
 * @property text: Conté el text del títol
 * @property estil: Objecte amb l'estil a aplicar al títol
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Titol extends Component {
  render() {
    return (
      <View style={styles.caixaTitol}>
        <Text style={this.props.estil}>{this.props.text}</Text>
        <Text style={{alignSelf: 'flex-end'}}> By Enrique Izquierdo</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  caixaTitol: {
    //Acabeu d'omplir l'estil
    margin: 5,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 3,
  },
});
