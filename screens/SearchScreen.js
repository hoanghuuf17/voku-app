import React from 'react'
import { StyleSheet, TextInput, View,SafeAreaView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SearchScreen = () => {
    return (
        <SafeAreaView style={{margin : 10, flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center',top : 60}}> 
            <AntDesign name="search1" size={20} color='#575757'/>
            <TextInput
                style={{ width : 350,height: 40, borderRadius : 10, padding : 20, backgroundColor : '#ddd' }}
                placeholder="Nhập từ khoá "
            />
            <FontAwesome name="microphone" size={20} color='#575757'/>
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
