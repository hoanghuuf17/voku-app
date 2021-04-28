import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Subject = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.session}>Tiết 1 - 3</Text>
                <LinearGradient colors={['#bdf1ff', '#4dd9ff', '#14cdff']} style={styles.detail}>
                    <Text style={styles.name}>Hệ thống phân tán</Text>
                    <Text style={styles.time}>9:30 am - 11:30 am</Text>
                </LinearGradient>
                <View style={styles.line}></View>
            </View>
    )
}

export default Subject

const styles = StyleSheet.create({
    container:{
        display :'flex',
        height : 100,
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
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
    session:{
        flex: 2,
        color : '#3d3d3d',
    },detail:{
        flex: 8,
        padding : 10,
        alignItems : 'center',
        borderRadius : 20,
    },
    name:{
        color : '#565656',
        fontSize : 17,
        fontWeight : '600'

    },
    time:{
        color : '#565656',
    },
    line:{
        height : 1,
        backgroundColor : '#ddd',
        width : '90%',
        position : 'absolute',
        top : 100,
        left : 60,
    }

})
