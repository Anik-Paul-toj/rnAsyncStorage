import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { use, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigation = useNavigation();

  const saveEmailPass = async () => {
    try {
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('PASSWORD', password);
      Navigation.navigate('Contact');
    } catch (err) {
      console.log(err);
    }


  }


  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: '600', marginTop: 100 }}>Login</Text>
      <View>
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 20,
            color: 'grey',
            textAlign: 'center',
            paddingHorizontal: 20
          }}>
          Enter your email to login
        </Text>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            margin: 20,
            padding: 20,
            borderRadius: 20,
          }}>
        </TextInput>

        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 20,
            color: 'gray',
            textAlign: 'center',
            paddingHorizontal: 20
          }}>
          Enter your password to login
        </Text>
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            margin: 20,
            padding: 20,
            borderRadius: 20,
          }}>
        </TextInput>
      </View>
      <TouchableOpacity onPress={saveEmailPass}>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', padding: 15, borderRadius: 50, marginHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 12, color: 'white' }}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})