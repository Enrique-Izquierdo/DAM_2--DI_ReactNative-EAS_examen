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
import {StyleSheet, ScrollView} from 'react-native';
import {personatges} from '../../Utils/Dades';

export class LlistaPersonatges extends Component {
  render() {
    return (
      <ScrollView horizontal={true}>
        {/* Ací has de recorrer l'array de personatges
            i per a cada element cridar al component que et mostra
            un element de la llista de personatges
          */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({});
