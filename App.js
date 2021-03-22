import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
// import Create from './screens/Create';
import store from './app/store';
import { Provider } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
const Stack = createStackNavigator();

export default function App(navigation) {

  return(
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style={'dark'}/>
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home">
                    <Stack.Screen name="Home" component= {HomeScreen}/>
                    <Stack.Screen name="Login" component= {LoginScreen}/>
              </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
