import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contact = () => {
  useEffect(() => {
    
    getData();
  }, []);


  const getData = async () => {
    try {

      const EMAIL = await AsyncStorage.getItem('EMAIL');
      Alert.alert('Email', EMAIL);
      const PASSWORD = await AsyncStorage.getItem('PASSWORD');
      
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <View>
      <Text>Contact</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})