import React,{useLayoutEffect,useEffect} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button } from 'react-native-elements';
import { auth } from '../firebase';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import {useNavigation} from '@react-navigation/native'



const LoginScreen = () => {
    const navigation = useNavigation();
      useEffect(()=>{
        const unSubscrible = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                navigation.navigate("Home");
            }
        });
        return unSubscrible;
    },[])

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
        console.log('Google Auth Response', googleUser);
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
              console.log(result);
              console.log(result.user);
              console.log('passed')
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


    useLayoutEffect(()=>{
        navigation.setOptions({
            title : "Đăng nhập",
        })
    },[navigation])

    return (
        <View style={styles.container}>
              <View  style={styles.image}>
                <Image style={{height: 70, width: 400}} source={require('../images/logo2.png')} />
                <Image style={{ height: 200, width: '100%', marginTop : 10}} source={require('../images/sict2.jpg')} />
              </View>  

              <View style={styles.button}>
              <Button 
                    onPress={signInWithGoogleAsync}
                    title="Đăng nhập vào hệ thống đào tạo"  
                    buttonStyle={{
                        backgroundColor: "#5cb85c",
                        borderRadius : 7
                    }}/> 
              </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : 'white',
        flexDirection : 'column',
        alignItems : 'center'
    },
    image:{
        marginTop : 20,
    flex: 4 ,
    alignItems : 'center',
       height : '100%',
       width : '100%'
    },
    button:{
        marginTop : 150,
        flex :6,
        width  :"70%"
    },


})
