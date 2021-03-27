import React, {useEffect,useState, useLayoutEffect} from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import Content from './../components/Content';
import Footer from './../components/Footer';
import { auth, db } from '../firebase';
import {useSelector} from 'react-redux';
import { selectDateId } from '../features/appDate';
import {useDocument} from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'

const HomeScreen = ({navigation}) => {
    const [user] = useAuthState(auth);
    const [dates ,setDates] = useState([])
    const [id ,setId] = useState([])
    const dateId = useSelector(selectDateId)

    const [dateDetail] = useDocument(
        dateId && db.collection('dates').doc(dateId)
    );

    const signOutUser = () =>{
            auth.signOut().then(()=> {
                navigation.replace('Login');
            })
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title : user?.displayName,
            headerStyle : {backgroundColor : '#fed014'},
            headerTitleStyle : {color : 'black'},
            headerTintColor : 'black',
            headerLeft : () =>(
                <View style={{marginLeft: 20}}>
                <TouchableOpacity  activeOpacity={0.5}>
                    <Avatar
                        rounded
                        source ={{ uri : user?.photoURL }}
                    />
                </TouchableOpacity>
                </View>
            ),
            headerRight : () => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width : 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="notification" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <SimpleLineIcons name="logout" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            )
        })
       
    }, [navigation])
    
    useEffect(()=>{
        const unsubscribe = db
            .collection('dates')
            .orderBy('date', 'asc')
            .onSnapshot((snapshot) => 
            setDates(snapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            }))
        ))
        return unsubscribe;
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.date}>
                    <Text>{dateDetail?.data().date}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Content/>
            </View>
            <View style={styles.footer}>
                {
                    dates.map(({id, data: {date}})=> (
                    <Footer date={date} id={id} key={id}/>
                    ))
                } 
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    date:{
        backgroundColor : '#8ff',
        padding : 7,
        borderRadius : 10
    },
    container:{
        display : 'flex',
        justifyContent : 'center',
        flex : 1
    },
    header:{
        flex : 0.5,
        justifyContent : 'center',
        alignItems : 'center',
    },
    content:{
        flex : 8,
        backgroundColor  : '#ddd'
    },
    footer:{
        justifyContent : 'center',
        flexDirection : 'row',
        flex : 1,
        marginBottom : 5,
    }
})
