import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { auth, db } from '../firebase';
import { Avatar } from 'react-native-elements';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'

const ProfileScreen = () => {
    const [user] = useAuthState(auth);
    const signOutUser = () =>{
        auth.signOut().then(()=> {
            navigation.replace('Login');
        })
    }
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <LinearGradient style={styles.linearGradient} colors={['#4dd9ff', '#0099c2', '#029fc9']}>
                        <View style={{alignSelf : 'center'}}>
                            <Avatar
                                size ={200}
                                rounded
                                source ={{ uri : user?.photoURL }}
                            />   
                        </View>
                        <Text style={{alignSelf : 'center', color : 'white', fontSize : 22, fontWeight : '700', top : 10}}>Trịnh Hữu Hoàng</Text>
                        <Text style={{alignSelf : 'center', color : 'white', fontSize : 18, fontWeight : '500', top : 10}}>Mail: {user.email}</Text>
                        <Text style={{alignSelf : 'center', color : 'white', fontSize : 18, fontWeight : '600', top : 10}}>Khóa :  2017 - 2022</Text>
                    </LinearGradient>
                </View>   
                <View style={styles.bottom}>
                        <LinearGradient style={styles.item} colors={['#78DDF9', '#78DDF9', '#0fc7fa']}>
                                <MaterialCommunityIcons style={{left : 20}} name="google-classroom" size={29} color='#565656'/>
                                <Text style={{right: 85, color : '#565656', fontSize : 20,fontWeight : '500'}}>Mã SV: 17IT060</Text>
                        </LinearGradient>

                        <LinearGradient style={styles.item} colors={['#78DDF9', '#78DDF9', '#0fc7fa']}>
                                <SimpleLineIcons style={{left : 20}} name="graduation" size={29} color='#565656'/>
                                <Text style={{right: 130, color : '#565656', fontSize : 20,fontWeight : '500'}}>Lớp: 17IT2</Text>
                        </LinearGradient>

                        <LinearGradient style={styles.item} colors={['#78DDF9', '#78DDF9', '#0fc7fa']}>
                                <Feather style={{left : 20}} name="phone-call" size={29} color='#565656'/>
                                <Text style={{right: 10, color : '#565656', fontSize : 20,fontWeight : '500'}}>Điện thoại: 0935801030</Text>
                        </LinearGradient>
                        <Button 
                            onPress={signOutUser}
                            title="Đăng xuất"  
                            buttonStyle={{
                                backgroundColor: "#78DDF9",
                                borderRadius : 7,
                                width : 200,
                                borderRadius : 20,
                        }}/> 
                </View> 
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : 'white',
        flexDirection : 'column'
    },  
    top:{
        flex : 4,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        top : 50
    },
    linearGradient:{
        padding : 30,
        borderRadius : 40,
    },  
    bottom:{
        flex : 6,
        alignItems : 'center',
        top : 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        top : 100
    },
    item:{
        marginBottom : 30,
        padding : 10,
        width : '78%',
        borderRadius : 10,
        alignContent : 'center',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    }
})
