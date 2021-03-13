import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Footer = ({id,date}) => {
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
      }
    return (
        <TouchableOpacity onPress={changeColor}>
        <View style={styles.container}> 
            <View style={[styles.element,  {backgroundColor : state.backgroundColor}]}>
                <Text style={styles.date}>{date}Thứ 3</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Footer

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
       
    },
    date:{
        textAlign : 'center',
        color : '#555',
        fontSize : 20,
        fontWeight : '500'
    }
})
