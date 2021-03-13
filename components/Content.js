import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ListItems from './listItems'

const Content = () => {
    return (
        <View>
            <ScrollView style={styles.scrollview}>
                <ListItems/>
            </ScrollView>
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    scrollview:{height:'100%',}
})
