import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

const HomeScreen = ({navigation}) => {
    const [user] = useAuthState(auth);

    useLayoutEffect(() => {
        navigation.setOptions({
            title : user?.displayName,
            headerStyle : {backgroundColor : '#fed014'},
            headerTitleStyle : {color : 'black'},
            headerTintColor : 'black',
            headerLeft : () =>(
                <View style={{marginLeft: 20}}>
                <TouchableOpacity  activeOpacity={0.5}>
                    <Avatar
                        rounded
                        source ={{ uri : user?.photoURL }}
                    />
                </TouchableOpacity>
                </View>
            ),
            headerRight : () => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width : 80,
                    marginRight: 20,
                }}>
                </View>
            )
        })
    }, [navigation])

    return (
        <View>
            <Text>{user?.displayName}</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
