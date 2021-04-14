import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import NotifyScreen from '../screens/NotifyScreen'
import SchedualScreen from '../screens/SchedualScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import DetailScreen from '../screens/DetailScreen'

 
const Stack = createStackNavigator()
const Stack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Notify" component={NotifyScreen}/>
            <Stack.Screen name="Schedual" component={SchedualScreen}/>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default Stack

const styles = StyleSheet.create({})
