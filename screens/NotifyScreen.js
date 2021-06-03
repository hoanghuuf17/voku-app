import React, { useState, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import New from './../components/new';


const NotifyScreen = ({ navigation }) => {
    const [notifies, setNotifies] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])

    useEffect(() => {
        const noti = db.collection('notifies').orderBy('viewer', "asc").onSnapshot((snapshot) => {
            setNotifies(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))
            )
        });
        return noti;
    }, [])

    const selectNotify = (id) => {
        navigation.navigate('Detail', { id: id })
    }

    const [user] = useAuthState(auth);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>TIN NỔI BẬT</Text>
                <Avatar
                    size={50}
                    rounded
                    source={{ uri: user?.photoURL }}
                    containerStyle={{ right: 10 }}
                />
            </View>
            <ScrollView vertical={true}>
                <View style={styles.menu}>
                    <Image style={styles.slide} source={require('./../assets/slide.png')} />
                </View>
                <View style={styles.news}>
                    {notifies &&
                        notifies.map(doc => {
                            const { title, duration, viewer, content, picture } = doc.data;
                            return (<New
                                onPress={() => selectNotify(doc.id)}
                                key={doc.id}
                                id={doc.id}
                                title={title}
                                duration={duration}
                                viewer={viewer}
                                content={content}
                                picture={picture}
                            />)
                        })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NotifyScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 7
    },
    date: {
        fontWeight: 'bold',
        fontSize: 25,
        left: 10,
    },
    titleText: {
        fontWeight: '500',
        fontSize: 16,
        left: 10,
        color: '#616161'
    },
    menu: {
        flex: 2,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        alignSelf: 'center',
        top: -50
    },
    news: {
        borderTopColor: '#ddd',
        borderTopWidth: 0.3,
        flex: 5,
        top: -100
    },
    slide: {
        height: 320,
        width: 320,
        resizeMode: 'contain',

    }
})
