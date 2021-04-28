import React,{useState} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Tab from './Tab';

const {width} = Dimensions.get('screen');
const TabBar = ({state, navigation}) => {
    const [user] = useAuthState(auth);
    const [selected, setSelected] = useState('Home')
    const {routes} = state;
    const renderColor = (name) =>{
        if(name ===selected){
            return '#FEC27D';
        }else {
            return 'black';
        }
    }
    const Press = (name, index) => {
        if( state.index !== index){
           setSelected(name)
           navigation.navigate(name)
        }
    }
    return (
        <View style={styles.background}>
            {user ? (
                <View style={styles.container}>
                {
                    routes.map((route, index) => <Tab 
                                key={route.key}
                                tab={route} 
                                icon= {route.params?.icon} 
                                onPress={() => Press(route.name, index)}    
                                color={renderColor(route.name)}
                                />)
                        }
                </View>
            ) : (
                <View>
                    
                </View>
            )}
           
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    background:{
        position : 'absolute',
        bottom : 0,
        width,
        alignItems : 'center',
        justifyContent: 'center',
    },
    container:{
        flexDirection : 'row',
        backgroundColor : '#fff',
        justifyContent : 'space-between',
        padding : 10,
        width : 350,
        height : 60,
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    }
})
