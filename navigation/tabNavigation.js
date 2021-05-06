import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Create from '../screens/Create';
import NotifyScreen from './notifyStack';
import SchedualScreen from '../screens/SchedualScreen';
import ProfileScreen from '../navigation/profileStack';
import SearchScreen from '../navigation/searchStack';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import TabBar from './TabBar';
import { NavigationContainer } from '@react-navigation/native';
import Loading from './tabLoading';

const Tab = createBottomTabNavigator()
const tabNavigation = () => {
    const [user] = useAuthState(auth);

    return (
        <NavigationContainer>
        <Tab.Navigator tabBar={props => <TabBar {...props}/>} initialRouteName="Home" >
            {user ? (
                <>
                    <Tab.Screen name="Home" component={HomeScreen} initialParams={{icon : 'home'}}/>
                    <Tab.Screen name="Notify"  component={NotifyScreen} initialParams={{icon : 'notification'}}/>
                    <Tab.Screen name="Schedual" component={SchedualScreen} initialParams={{icon : 'calendar'}}/>
                    <Tab.Screen name="Search" component={SearchScreen} initialParams={{icon : 'search1'}}/>
                    <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{icon : 'user'}}/>
                </>
            ) : (
                <>
                    <Tab.Screen name="Login" component={Loading}/>
                </>
            )}
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabNavigation

