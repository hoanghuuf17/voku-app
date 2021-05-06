import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator()
const tabNavigation = () => {

    return (
        <Tab.Navigator tabBar={props => <TabBar {...props}/>}>
            <Tab.Screen name="Login" component={LoginScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export default tabNavigation
