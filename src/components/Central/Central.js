import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {personatges} from '../../Utils/Dades';
import {TitolDada} from '../TitolDada/TitolDada';

export class Central extends Component {
  render() {
    return (
      <View style={styles.cosCentral}>
        <ScrollView vertical={true}>
          {personatges.map((item, pos) => {
            return (
              <View style={styles.text}>
                <Text>{item.nom}</Text>
                <TitolDada titol="COLOR MONYO" dada={item.colorMonyo} />
                <TitolDada titol="ANIVERSARI" dada={item.dades.aniversari} />
                <TitolDada titol="DESCRIPCIO" dada={item.dades.descripcio} />
              </View>
            );
          })}
          {/* <Text>Componente central</Text> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cosCentral: {
    flex: 2,
    borderColor: 'blue',
    borderWidth: 3,
    margin: 1,
  },
  text: {
    color: 'black',
    fontSize: 22,
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
