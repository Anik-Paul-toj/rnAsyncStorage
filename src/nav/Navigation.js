import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Intro from '../screens/Intro'
import Login from '../screens/Login'
import Contact from '../screens/Contact'
import AddContact from '../screens/AddContact'

const Navigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={Intro}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Contact' component={Contact}/>
            <Stack.Screen name='AddContact' component={AddContact}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})