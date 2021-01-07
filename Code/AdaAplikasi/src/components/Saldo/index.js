import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import { TextColor } from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoSaldo}>
        <View style={styles.teks}>
            <Text style={styles.saldo}>Saldo : </Text>
            <Text style={styles.isiSaldo}>Rp. 120,000</Text>
        </View>
        <View style={styles.teks}>
            <Text style={styles.point}>Point : </Text>
            <Text style={styles.isiPoint}>450 Point</Text>
        </View>
      </View>
      <View style={styles.buttonAksi}>
        <ButtonIcon/>
        <ButtonIcon/>
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    marginTop: -windowHeight * 0.07,
    flexDirection: 'row',
  },
  teks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoSaldo: {
    width: '60%',
  },
  saldo: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Regular',
  },
  isiSaldo: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  point: {
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Regular',
  },
  isiPoint: {
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Bold',
    color: TextColor,
  },
  buttonAksi: {
    flexDirection: 'row',
    marginLeft: 10,
  }
});
