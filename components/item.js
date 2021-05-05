import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

 
const Item = (props) => {
    const {onPress, item} = props;
    const date = item.data.date;
    const num = item.data.date;
    return (
        <TouchableOpacity onPress={() => onPress(item.id)} style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.top}>{date.slice(0, -1)}</Text>
                <Text style={styles.bottom}>{num.slice(4)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    item:{
        height : 100,
        width : 49,
        margin : 10,
        borderRadius : 30,
        borderWidth : 1,
        borderColor : '#5c5c5c',
        alignItems: 'center',
        justifyContent : 'center',
    },
    top:{
        textAlign: 'center',
        fontSize : 16,
        padding : 2,
        color : '#3d3d3d'
    },
    bottom:{
        textAlign: 'center',
        fontSize : 36,
        fontWeight : 'bold',
        color : '#3d3d3d'
    }
})
