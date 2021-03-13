import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.element}>
                <Text style={styles.date}>2</Text>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        borderRadius : 40,
        margin : 5,
        justifyContent : 'center',
        alignItems : 'center'
    },
    element:{
        alignItems : 'center',
        borderRadius : 10,
        justifyContent : 'center',
        backgroundColor : '#ddd',
        width : 30, 
        height: 50,
        borderWidth : 1 ,
        borderColor : 'white'
    },
    date:{
        color : '#fff',
        fontSize : 20,
        fontWeight : '500'
    }
})
