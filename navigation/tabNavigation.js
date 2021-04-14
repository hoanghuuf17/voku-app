import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Create from '../screens/Create';
import NotifyScreen from '../screens/NotifyScreen';
import SchedualScreen from '../screens/SchedualScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import TabBar from './TabBar';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()
const tabNavigation = () => {
    const [user] = useAuthState(auth);

    return (
        <NavigationContainer>
        <Tab.Navigator tabBar={props => <TabBar {...props}/>} initialRouteName="Home" >
            {user ? (
                <>
                    <Tab.Screen name="Notify"  component={NotifyScreen} initialParams={{icon : 'notification'}}/>
                    <Tab.Screen name="Schedual" component={SchedualScreen} initialParams={{icon : 'calendar'}}/>
                    <Tab.Screen name="Home" component={HomeScreen} initialParams={{icon : 'home'}}/>
                    <Tab.Screen name="Search" component={SearchScreen} initialParams={{icon : 'search1'}}/>
                    <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{icon : 'user'}}/>
                </>
            ) : (
                <>
                    <Tab.Screen name="Login" component={LoginScreen}/>
                </>
            )}
            
            {/* <Tab.Screen name="Create" component={Create}/> */}
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabNavigation

const styles = StyleSheet.create({})
