import React,{useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Button, Input} from 'react-native-elements';
import { db } from '../firebase';
import * as Notifications from 'expo-notifications';

const Create = () => {
    const[thu, setThu] = useState('');
    const[name, setName] = useState('');
    const[subject, setSubject] = useState('');
    const[room, setRoom] = useState('');
    const[session, setSession] = useState('');
    const[time, setTime] = useState('');

    const addThu = async() => {
        await db.collection('dates').add({
            date: thu,
        }).then(() =>{
        }).catch((error) => {alert(error)})
    }

    const addSubject = ()=> {
            db.collection('dates')
            .doc('gtyHtMCuVsEEg3aAjoAm')
            .collection('subjects')
            .add({
                name : name,
                subject : subject,
                room : room,
                session : session,
                time : time,
            })
            setName('');
            setSubject('');
            setRoom('');
            setSession('');
            setTime('');
    }


    return (
        <View>
            <View>
                <Input value={thu} onChangeText={(text) =>setThu(text)} placeholder="Thứ"/>
                <Button onPress={addThu} disabled={!thu} title="Add"/>
            </View>
            <View>
                <Input value={name} onChangeText={(text) =>setName(text)} placeholder="Tên GV"/>
                <Input value={subject} onChangeText={(text) =>setSubject(text)} placeholder="Tên Môn Học"/>
                <Input value={room} onChangeText={(text) =>setRoom(text)} placeholder="Phòng"/>
                <Input value={session} onChangeText={(text) =>setSession(text)} placeholder="Tiết"/>
                <Input value={time} onChangeText={(text) =>setTime(text)} placeholder="Time"/>
                <Button onPress={addSubject} disabled={!time} title="Add"/>
            </View>
        </View>
    )
}

export default Create

const styles = StyleSheet.create({})
