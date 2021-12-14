/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class InfoPersonatge
 * @summary Component que serveix per a mostrar La informació d'un personatge
 * @property personatge: Objecte amb la informació d'un personatge
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

export class InfoPersonatge extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Ompli ací la informació del personatge */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  text: {},
});
