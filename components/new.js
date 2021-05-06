import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const New = (props) => {
    const {title, duration, picture, onPress} = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: `${picture}`}}/>
            </View>
            <View style={styles.right}>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', top : 20}}>
                    <Text style={styles.title}>Thông báo</Text>
                    <Text style={styles.time}><AntDesign name="calendar" size={20} color="#363636"/>{' '}{duration} </Text>
                </View>
                <Text style={styles.content}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default New

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flexDirection : 'row',
        borderBottomWidth : 0.3,
        borderBottomColor : '#ddd'
    },
    left:{
        flex : 2,
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
    image:{
       height : 90,
       width : 90,
       borderRadius : 25,
    },
    right:{
        flex : 8,
    }, 
    title:{
        left : 10,
        fontWeight : '500'
    },
    time:{
        right : 10,
        color : '#363636'
    },
    content:{
        top : 30,
        textAlign : 'justify',
        padding : 10,
        fontWeight : '600'
    }
})
