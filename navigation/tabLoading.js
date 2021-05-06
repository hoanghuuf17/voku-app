import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Create from '../screens/Create';
import NotifyScreen from './notifyStack';
import SchedualScreen from '../screens/SchedualScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import DetailScreen from '../screens/DetailScreen'
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import TabBar from './TabBar';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()
const tabNavigation = () => {
    const [user] = useAuthState(auth);

    return (
        <Tab.Navigator tabBar={props => <TabBar {...props}/>}>
            <Tab.Screen name="Login" component={LoginScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export default tabNavigation

const styles = StyleSheet.create({})
