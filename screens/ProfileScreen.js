import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements';
import { auth, db } from '../firebase'


const ProfileScreen = () => {
    const signOutUser = () =>{
        auth.signOut().then(()=> {
            navigation.replace('Login');
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                
            </View>   
            <View style={styles.bottom}>
                    <Button 
                    onPress={signOutUser}
                    title="Đăng xuất"  
                    buttonStyle={{
                        backgroundColor: "#2CC5EF",
                        borderRadius : 7
                    }}/> 
            </View>   
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
