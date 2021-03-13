import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar} from 'react-native-elements';


const ListItems = ({name, subject, room, session, time, date}) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar
                    rounded
                    source={{
                        uri: "https://i.pravatar.cc/150?img=48"
                    }}
                />
            </View>
            <View style={styles.title}>
                <Text style={styles.subject}>Tên môn học</Text>
                <Text style={styles.name}> gv : tên giảng viên</Text>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.room}> Phòng: B204</Text>
                <Text style={styles.session}>Tiết: 6-7</Text>

            </View>
        </View>
    )
}

export default ListItems

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex : 1,
        backgroundColor : 'white',
        padding : 10
    },
    avatar:{
        justifyContent: 'center',
        flex : 1,
    },
    title:{
        marginLeft : 10,
        flex : 5,
        flexDirection : 'column',
    },
    subject:{
        fontSize : 20,
        fontWeight : '500',
        flex : 4
    },
    session:{
        marginLeft : 2,
        flex :  1
    },  
    subtitle:{
        marginTop:5,
        marginLeft:10,
        flex : 4,
        flexDirection : 'column'
    },
    name:{
        flex : 3

    },
    room:{
        flex :  1

    }
})
