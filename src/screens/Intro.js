import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Intro = () => {

  const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },3000)
    },[])
  return (
    <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20, color:'blue'}}>Intro</Text>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})