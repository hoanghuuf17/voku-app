import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';
import * as Notifications from 'expo-notifications';

const Create = () => {
    const [thu, setThu] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [room, setRoom] = useState('');
    const [session, setSession] = useState('');
    const [time, setTime] = useState('');

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [viewer, setViewer] = useState('');
    const [content, setContent] = useState('');
    const [picture, setPicture] = useState('');

    const addThu = async () => {
        await db.collection('dates').add({
            date: thu,
        }).then(() => {
        }).catch((error) => { alert(error) })
    }

    const addSubject = () => {
        db.collection('dates')
            .doc('gtyHtMCuVsEEg3aAjoAm')
            .collection('subjects')
            .add({
                name: name,
                subject: subject,
                room: room,
                session: session,
                time: time,
            })
        setName('');
        setSubject('');
        setRoom('');
        setSession('');
        setTime('');
    }

    const addNotify = async () => {
        await db.collection('notifies').add({
            title: title,
            duration: duration,
            viewer: viewer,
            content: content,
            picture: picture
        }).then(() => {
            setTitle('');
            setDuration('');
            setViewer('');
            setContent('');
            setPicture('');
        }).catch((error) => { alert(error) })
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Input value={thu} onChangeText={(text) => setThu(text)} placeholder="Thứ" />
                    <Button onPress={addThu} disabled={!thu} title="Add" />
                </View>
                <View>
                    <Input value={name} onChangeText={(text) => setName(text)} placeholder="Tên GV" />
                    <Input value={subject} onChangeText={(text) => setSubject(text)} placeholder="Tên Môn Học" />
                    <Input value={room} onChangeText={(text) => setRoom(text)} placeholder="Phòng" />
                    <Input value={session} onChangeText={(text) => setSession(text)} placeholder="Tiết" />
                    <Input value={time} onChangeText={(text) => setTime(text)} placeholder="Time" />
                    <Button onPress={addSubject} disabled={!time} title="Add" />
                </View>
                <View>
                    <Input value={title} onChangeText={(text) => setTitle(text)} placeholder="Tiêu đề" />
                    <Input value={duration} onChangeText={(text) => setDuration(text)} placeholder="Thời gian đăng" />
                    <Input value={viewer} onChangeText={(text) => setViewer(text)} placeholder="Viewer" />
                    <Input value={content} onChangeText={(text) => setContent(text)} placeholder="nội dung" />
                    <Input value={picture} onChangeText={(text) => setPicture(text)} placeholder="Hình ảnh" />
                    <Button onPress={addNotify} disabled={!picture} title="Add" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Create

const styles = StyleSheet.create({})
