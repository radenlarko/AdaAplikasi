import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Operan from './Operan';

export default class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sekolah: 'Univ Yos Sularko',
    };
  }

  gantiState() {
    this.setState({
      sekolah: 'Univ Perwira',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> State dan Props</Text>
        <View style={styles.garis} />

        {/* Isi */}
        <View style={styles.divider}>
          <Text>Ini adalah state: {this.state.sekolah}</Text>
          <Operan sekolah={this.state.sekolah} />
          <TouchableOpacity
            style={styles.tombol}
            onPress={() => this.gantiState()}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Ganti State
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 0.7,
    marginTop: 8,
    marginHorizontal: 40,
  },
  divider: {
    marginTop: 30,
  },
  tombol: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
