import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {useDispatch} from 'react-redux';
import { enterDate } from '../features/appDate';

const Date = ({id,date}) => {
        const dispatch = useDispatch();
        const [state, setState] = useState({
            backgroundColor: 'transparent',
            backgroundColor2: 'black',
            pressed: false,
        })    
        
       const changeColor = () =>{
        if(!state.pressed){
           setState({ pressed: true,backgroundColor: '#fed014', backgroundColor2: 'black'});
        } else {
          setState({ pressed: false, backgroundColor: 'transparent' ,backgroundColor2: '#fed014'});
        }
        dispatch(enterDate({
            dateId : id
        }))
      }
    return (
        <TouchableOpacity onPress={changeColor}>
        <View style={styles.container}> 
            <View style={[styles.element,  {backgroundColor : state.backgroundColor}]}>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Date

const styles = StyleSheet.create({
    container:{
        borderRadius : 40,
        margin : 4,
        justifyContent : 'center',
        alignItems : 'center'
    },
    element:{
        alignItems : 'center',
        borderRadius : 10,
        justifyContent : 'center',
        backgroundColor : '#ddd',
        width : 50, 
        height: 50,
        borderWidth : 1,
        borderColor : '#fed014'
       
    },
    date:{
        textAlign : 'center',
        color : '#555',
        fontSize : 20,
        fontWeight : '500'
    }
})
