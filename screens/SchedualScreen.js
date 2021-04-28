import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native'
import { auth, db} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from 'react-native-elements'
import Item from '../components/item';
import Subject from '../components/subject';


const SchedualScreen = () => {
    const [user] = useAuthState(auth);
    const [dates, setDates] = useState([])

    useEffect(() => {
       const unsubscribe = db.collection('dates').orderBy('date').onSnapshot((snapshot) =>
                {
                    setDates(snapshot.docs.map(doc => ({
                        id : doc.id,
                        data : doc.data()
                    }))
                )}
        )
       return unsubscribe
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>THỨ TƯ, 07</Text>
                <Avatar
                size ={50}
                    rounded
                    source ={{ uri : user?.photoURL }}
                    containerStyle={{right : 10}}
                />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Lịch học hôm nay</Text>
            </View>
            <View style={styles.menu}>
            <FlatList
                horizontal
                data={dates}
                renderItem={Item}
                keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.news}>
                <Subject/>
                <Subject/>
            </View>
        </SafeAreaView>
    )
}

export default SchedualScreen

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flex : 1,
        backgroundColor : 'white'
    },
    header:{
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
        
    },  
    date:{
        fontWeight : 'bold',
        fontSize : 25,
        left : 10,
    },
    title:{
        flex : 0.5,
        backgroundColor : '#fff',

    },
    titleText:{
        fontWeight : '500',
        fontSize : 16,
        left : 10,
        color : '#616161'
    }, 
    menu:{
        flex : 2,
        flexDirection : 'row',
    },
    news:{
        flex : 7.5,
    },
})
