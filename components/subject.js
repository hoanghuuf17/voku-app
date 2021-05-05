import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Subject = (props) => {
    const {name, subject, session, room} = props;

    const getTime = (session) => {
        var char = session.charAt(0);
        if(char == 1){
            return '7:30 am - 9:30 am';
        }
        if(char == 3){
            return '9:30 am - 11:30 am';
        }
        if(char == 6){
            return '1:00 pm - 3:00 pm';
        }
        if(char == 8){
            return '3:00 pm - 5:00 pm';
        }
    }

    return (
            <View style={styles.container}>
                <Text style={styles.session}>Tiết {session}</Text>
                <LinearGradient colors={['#bdf1ff', '#4dd9ff', '#14cdff']} style={styles.detail}>
                    <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                        <Text style={styles.name}>{subject}</Text>
                        <Text style={styles.name}>Giảng viên: {name}</Text>
                    </View>
                    <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                        <Text style={styles.time}>{getTime(session)}</Text>
                        <Text style={styles.time}>Phòng: {room}</Text>
                    </View>
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
        fontWeight : 'bold'
    },detail:{
        top : 15,
        flex: 8,
        padding : 10,
        alignSelf : 'flex-start',
        borderRadius : 20,
        left : 5
        
    },
    name:{
        color : '#565656',
        fontSize : 17,
        fontWeight : '600'

    },
    time:{
        top : 5,
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
