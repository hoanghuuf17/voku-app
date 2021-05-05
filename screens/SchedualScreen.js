import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native';
import { auth, db} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from 'react-native-elements'
import Item from '../components/item';
import Subject from '../components/subject';
import { selectDateId } from '../features/appDate';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {enterDate} from '../features/appDate';
import {useCollection,useDocument} from 'react-firebase-hooks/firestore';


const SchedualScreen = () => {
    const [user] = useAuthState(auth);
    const [dates, setDates] = useState([]);
    const dispatch = useDispatch();
    const dateId = useSelector(selectDateId);
    
    const [dateDetail] = useDocument(
        dateId && db.collection('dates').doc(dateId)
    );

    const [dateSubjects] = useCollection(
        dateId && db.collection('dates').doc(dateId).collection('subjects').orderBy('session', "asc")
    );

    useEffect(() => {
       const unsubscribe = db
       .collection('dates')
       .orderBy('date', "asc")
       .onSnapshot((snapshot) =>{
            setDates(snapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            }))
        )})
       return unsubscribe;
    }, [])

    const onPress = (id) => {
        if(id){
            dispatch(enterDate({
                dateId : id
            }))
        }
    }

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
                renderItem={({item}) => <Item isSelected={item.id === dateId} item={item} onPress={onPress}/>}
                keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.news}>
               {dateDetail && dateSubjects && (
                    <>
                        {dateSubjects?.docs.map(doc=> {
                            const {name, subject, session, room} = doc.data();
                            return(<Subject name={name} subject={subject} session={session} room={room} key={doc.id}/>);
                        })}
                    </>
               )
               }
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
