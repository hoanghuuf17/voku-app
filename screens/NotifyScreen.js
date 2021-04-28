import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,Image, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth, db} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import New from './../components/new';

const NotifyScreen = () => {
    const [user] = useAuthState(auth);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>TIN NỔI BẬT</Text>
                <Avatar
                size ={50}
                    rounded
                    source ={{ uri : user?.photoURL }}
                    containerStyle={{right : 10}}
                />
            </View>
            <View style={styles.menu}>
                <Image style={styles.slide} source={require('./../assets/slide.png')}/>
            </View>
            <View style={styles.news}>
                <New/>
                <New/>
                <New/>
                <New/>
            </View>
        </SafeAreaView>
    )
}

export default NotifyScreen

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flex : 1,
        backgroundColor : 'white'
    },
    header:{
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
        
    },  
    date:{
        fontWeight : 'bold',
        fontSize : 25,
        left : 10,
    },
    titleText:{
        fontWeight : '500',
        fontSize : 16,
        left : 10,
        color : '#616161'
    }, 
    menu:{
        flex : 2,
        flexDirection : 'row',
        padding : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    news:{
        borderTopColor : '#ddd',
        borderTopWidth : 0.3,
        flex : 5,
    },
    slide:{
        height : '100%',
        width : '100%',
        resizeMode : 'contain',
        
    }
})
