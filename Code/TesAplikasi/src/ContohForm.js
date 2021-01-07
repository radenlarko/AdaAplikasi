import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export default class ContohForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLogin: false,
    };
  }

  login = () => {
    if (!this.state.username || !this.state.password) {
      Alert.alert('Error', 'Username dan Password harus diisi');
    } else {
      this.setState({
        isLogin: true,
      });
    }
  };

  render() {
    const {username, password, isLogin} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Form</Text>
        <View style={styles.garis} />

        {/* Isi */}
        <View style={styles.divider}>
          <View style={styles.wrapInput}>
            <Text>Username :</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan Username"
              value={username}
              onChangeText={(username) => this.setState({username})}
            />
          </View>
          <View style={styles.wrapInput}>
            <Text>Password :</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan Password"
              value={password}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>

          {isLogin && (
            <Text style={{marginTop: 20}}>
              Selamat berhasil Login {username}
            </Text>
          )}
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
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 5,
  },
  wrapInput: {
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'tomato',
    borderRadius: 10,
    padding: 10,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
