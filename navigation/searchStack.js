import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator()
const NotifyStack = () => {
    return (
    <>
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
    </>
    )
}

export default NotifyStack

const styles = StyleSheet.create({})
