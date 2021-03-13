import React, {useLayoutEffect} from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import Content from './../components/Content';
import Footer from './../components/Footer';

const HomeScreen = ({navigation}) => {
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
                <Footer/>
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
        flex : 1,
    }
})
