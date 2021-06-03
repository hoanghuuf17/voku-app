import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator()
const NotifyStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </>
    )
}
export default NotifyStack
