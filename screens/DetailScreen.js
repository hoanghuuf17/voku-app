import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';

const DetailScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [detail, setDetail] = useState(null)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "left",
            headerBackTitleVisible: false,
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >

                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            ),

        })

    }, [navigation])

    useEffect(() => {
        const post = db.collection('notifies').onSnapshot((snapshot) => {
            snapshot.docs.map(doc => {
                if (doc.id == id) {
                    setDetail(doc.data())
                }
            }
            )
        });
        return post;
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {detail && <ScrollView vertical={true}>
                <View style={styles.picture}>
                    <Image style={styles.image} source={{ uri: `${detail.picture}` }} />
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: '#565656' }}>{detail.title}</Text>
                    <View style={styles.info}>
                        <Text style={styles.time}><AntDesign name="calendar" size={20} color="#363636" /> {detail.duration}</Text>
                        <Text style={styles.time}><AntDesign name="eye" size={20} color="#363636" /> {detail.viewer}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={{ fontSize: 16 }}>
                        {detail.content}
                    </Text>
                </View>
            </ScrollView>}
        </SafeAreaView>
    )
}
export default DetailScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white'
    },
    picture: {
        top: -50,
        flex: 2,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    time: {
        alignSelf: 'flex-end'
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 20,
        resizeMode: 'contain',
    },
    title: {
        top: -100,
        padding: 20,
        flex: 1.5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#565656',
    },
    info: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        top: -100,
        padding: 20,
        flex: 6,
    },
})
