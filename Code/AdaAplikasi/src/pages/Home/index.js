import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header, Logo} from '../../assets';
import {Saldo} from '../../components';

// function Home() {
//     return (
//       <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Header} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.textHeader}>
            <Text style={styles.halo}>Halo...</Text>
            <Text style={styles.selamat}>Selamat datang</Text>
            <Text style={styles.nama}>Yos Sularko</Text>
        </View>
      </ImageBackground>
      <Saldo />
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.34,
    paddingHorizontal: windowWidth*0.04,
    paddingTop: 10,
  },
  logo: {
      width: windowWidth*0.25,
      height: windowHeight*0.06,
  },
  textHeader: {
    marginTop: windowHeight*0.07,
    paddingLeft: windowWidth*0.08,
  },
  halo: {
      fontSize: 14,
      fontFamily: 'TitilliumWeb-Regular',
  },
  selamat: {
      fontSize: 18,
      fontFamily: 'TitilliumWeb-Regular',
  },
  nama: {
      fontSize: 24,
      fontFamily: 'TitilliumWeb-Bold',
  }
});
