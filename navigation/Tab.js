import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Tab = ({tab, color, onPress, icon}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
           {icon && <AntDesign name={icon} size={22} color={color} />} 
        </TouchableOpacity>
    )
}

export default Tab

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 5
    }
})
