/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class LlistaPersonatges
 * @summary Component que serveix per a mostrar una llista de personatges scrollable horitzontalment
 * @property array: Llista de personatges
 */

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {personatges} from '../../Utils/Dades';
import {UnElementLlistaPersonatges} from '../UnElementLlistaPersonatges/UnElementLlistaPersonatges';

export class LlistaPersonatges extends Component {
  render() {
    return (
      <View style={styles.selectorPersonatges}>
        <ScrollView horizontal={true}>
          {/* <UnElementLlistaPersonatges /> */}
          {personatges.map((item, pos) => {
            return (
              <UnElementLlistaPersonatges
                key={pos}
                imatge={personatges[pos].imatge}
                nom={personatges[pos].nom}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  selectorPersonatges: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 3,
    margin: 1,
  },
});
