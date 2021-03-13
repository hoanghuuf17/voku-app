import React, {useEffect,useState, useLayoutEffect} from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import Content from './../components/Content';
import Footer from './../components/Footer';
import { db } from '../firebase';

const HomeScreen = ({navigation}) => {
    const [dates ,setDates] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            title : "Tên Sinh Viên",
            headerStyle : {backgroundColor : '#fed014'},
            headerTitleStyle : {color : 'black'},
            headerTintColor : 'black',
            headerLeft : () =>(
                <View style={{marginLeft: 20}}>
                        <Avatar
                            rounded
                            source ={{ uri : 'https://yt3.ggpht.com/yti/ANoDKi6B2Vz6ba7rPetrK3HNmHuhVJZWSvfpvpro6CyYWQ=s48-c-k-c0x00ffffff-no-rj' }}
                        />
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
                    <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
                        <SimpleLineIcons name="logout" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    //không delete đoạn này
    // useEffect(()=>{
    //     const unsubscribe = db
    //         .collection('dates')
    //         .orderBy('date', 'asc')
    //         .onSnapshot(snapshot => (
    //         setDates(snapshot.docs.map(doc => ({
    //             id : doc.id,
    //             data : doc.data()
    //         })))
    //     ))
    //     return unsubscribe;
    // },[]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.date}>
                    <Text>Thứ 3</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Content/>
            </View>
            <View style={styles.footer}>
                {/* code chính */}
                    {/* 
                        {dates.map(({id, data: {date}})=> (
                            <Footer date={date} id={id} key={id}/>
                        ))} 
                    */}
                {/* code chính */}

                {/* code để test edit giao diện */}
                <Footer/>
                {/* code để test edit giao diện */}
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
