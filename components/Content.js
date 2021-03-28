import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ListItem, Avatar} from 'react-native-elements';
import { db } from '../firebase'
import ListItems from './listItems'
import {useSelector} from 'react-redux';
import { selectDateId } from '../features/appDate';
import {useCollection,useDocument} from 'react-firebase-hooks/firestore';


const Content = () => {
    const dateId = useSelector(selectDateId)

    const [dateDetail] = useDocument(
        dateId && db.collection('dates').doc(dateId)
    );

    const [dateSubjects] = useCollection(
        dateId && db.collection('dates').doc(dateId).collection('subjects').orderBy('session', "asc")
    );

    return (
        <View>
            <ScrollView style={styles.scrollview}>
            {dateDetail && dateSubjects && (
                <>
                {dateSubjects?.docs.map(doc=> {
                    const {name, subject, session, room} = doc.data();
                     return(
                            <View  key={doc.id} id = {doc.id} style={styles.container}>
                                <View style={styles.avatar}>
                                    <Avatar
                                        rounded
                                        source={{
                                            uri: "https://i.pravatar.cc/150?img=48"
                                        }}
                                    />
                                </View>
                                <View style={styles.title}>
                                    <Text style={styles.subject}>{subject}</Text>
                                    <Text style={styles.name}> {name}</Text>
                                </View>
                                <View style={styles.subtitle}>
                                    <Text style={styles.room}> {room}</Text>
                                    <Text style={styles.session}>{session}</Text>
                                </View>
                            </View>
                            )
                     })} 
                </>
            )}
            </ScrollView>
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    scrollview:{
        height:'100%',
    },
    container:{
        flexDirection: 'row',
        flex : 1,
        backgroundColor : 'white',
        padding : 10,
        marginTop : 10
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
