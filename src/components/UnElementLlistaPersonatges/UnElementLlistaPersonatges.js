/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class UnElementLlistaPersonatges
 * @summary Component que serveix per a mostrar una Card amb la info d'un personatge.
 * @property objecte: Un Objecte amb totes les dades d'un Personatge
 */

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import {personatges} from '../../Utils/Dades';

export class UnElementLlistaPersonatges extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={this.props.imatge} style={styles.estilImatge} />
        <Text style={styles.estilText}>{this.props.nom}</Text>
        {/* <Image source={personatges[0].imatge} style={styles.estilImatge} />
        <Text style={styles.estilText}>{personatges[0].nom}</Text> */}
        {/*Elements del component tal i com diu l'enunciat */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    //Acabeu d'omplir l'estil
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
  },
  estilImatge: {
    //Acabeu d'omplir l'estil
    margin: 2,
    width: 100,
    height: 100,
  },
  estilText: {
    backgroundColor: 'black',
    color: 'white',
  },
});
