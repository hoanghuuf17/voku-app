import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import NotifyScreen from '../screens/NotifyScreen';

const Stack = createStackNavigator()
const NotifyStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Notify" component={NotifyScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </>
    )
}
export default NotifyStack
