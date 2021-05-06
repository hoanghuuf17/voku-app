import React,{useLayoutEffect,useEffect} from 'react'
import { StyleSheet, View, Image,SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { auth } from '../firebase';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import {useNavigation} from '@react-navigation/native'



const LoginScreen = () => {
    const navigation = useNavigation();
    const [user] = useAuthState(auth);
    
    useEffect(()=>{
          if(user){
              navigation.navigate("Home");
          }
    },[])

    useLayoutEffect(() => {
      navigation.setOptions({
        title : "false",
        headerStyle : {backgroundColor : '#2CC5EF'},
        headerTitleStyle : {color : 'white'},
        headerTintColor : 'white',
    })
    }, [navigation])

    const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }

    const onSignIn = (googleUser) => {
        // console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.idToken,
              googleUser.accessToken
            );

            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).then(function(result) {
            })
            .catch((error) => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
            });
          } else {
            console.log('User already signed-in Firebase.');
          }
        });
      }
    const signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            // androidClientId: YOUR_CLIENT_ID_HERE,
            iosClientId: '426159745159-gfg2oi9jv9j2cr3q7rua639ftuvpddhp.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }

    return (
        <SafeAreaView style={styles.container}>
              <View  style={styles.image}>
                <Image style={{height: 70, width: 400}} source={require('../images/logo2.png')} />
                <Image style={{ height: 200, width: '100%', marginTop : 10}} source={require('../images/sict2.jpg')} />
                <Text style={{padding : 20, color : '#858282', fontSize : 16}}>Bắt đầu từ 14/8/2020, tài khoản đăng nhập của sinh viên có cú pháp họ đêm viết tắt + tên + lớp sinh hoạt @vku.udn.vn.</Text>
              </View>  

              <View style={styles.button}>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={signInWithGoogleAsync}>
                  <Text style={styles.txt}>ĐĂNG NHẬP HỆ THỐNG ĐÀO TẠO</Text>
                </TouchableOpacity>  
                
                <TouchableOpacity activeOpacity={0.5} style={[styles.btn,{backgroundColor : '#FEC27D', top : 20}]} onPress={()=> console.log("pressed")}>
                  <Text style={styles.txt}>ĐĂNG NHẬP E-LEARNING</Text>
                </TouchableOpacity>  
              </View>
              
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flex : 1,
        backgroundColor : 'white'
    },
    image:{
        marginTop : 20,
        flex: 5 ,
        alignItems : 'center',
        height : '100%',
        width : '100%',
    },
    button:{
      top : 30,
      flex :5,
      width: "70%",
      alignSelf : 'center'
    },
    btn:{
      backgroundColor : '#2CC5EF', 
      padding : 20,
      alignItems : 'center',
      borderRadius : 10,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    txt:{
      color : 'white',
      fontSize : 15,
      fontWeight : '700'
    }


})
