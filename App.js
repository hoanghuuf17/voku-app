import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Create from './screens/Create';
// import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App(navigation) {
  return(
    <View style={styles.container}>
      <StatusBar style={'dark'}/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home">
          {/* Chưa làm chức năng login */}
          {/* <Stack.Screen name="Login" component= {LoginScreen}/> */}
            <Stack.Screen name="Home" component= {HomeScreen}/>

          {/* Screen này để add dữ liệu firebase */}
          {/* <Stack.Screen name="Create" component= {Create}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
