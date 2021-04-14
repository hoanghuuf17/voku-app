import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import store from './app/store';
import { Provider } from 'react-redux';
import TabNavigation from './navigation/tabNavigation';
// import { createStackNavigator } from '@react-navigation/stack'
// import HomeScreen from './screens/HomeScreen'
// import NotifyScreen from './screens/NotifyScreen'
// import SchedualScreen from './screens/SchedualScreen'
// import SearchScreen from './screens/SearchScreen'
// import ProfileScreen from './screens/ProfileScreen'
// import DetailScreen from './screens/DetailScreen'
// const Stack = createStackNavigator()
export default function App(navigation) {

  return(
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style={'dark'}/>
           <TabNavigation/>
           {/* <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Notify" component={NotifyScreen}/>
            <Stack.Screen name="Schedual" component={SchedualScreen}/>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
