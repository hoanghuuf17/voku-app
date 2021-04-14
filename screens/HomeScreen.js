import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
    const [user] = useAuthState(auth);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>THỨ TƯ, 07</Text>
                <Avatar
                size ={50}
                    rounded
                    source ={{ uri : user?.photoURL }}
                    containerStyle={{right : 10, top : 7}}
                />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Xin chào Thắm</Text>
            </View>
            <View style={styles.menu}>
                <View  style={styles.menuLeft}>
                    <TouchableOpacity style={styles.leftTop}>
                        <View>
                            <View style={{left : 100}}> 
                                <AntDesign name="arrowright" size={29} color="white" />
                            </View>
                            <Image style={{width : 120, height : 70, top : 20}} source={require('./../images/logo.png')}/>
                            <Text style={{ color : 'white', fontSize : 23, fontWeight : '500', top : 40}}>Tin tức</Text>
                            <Text style={{ color : 'white', fontSize : 23, fontWeight : '500', top : 40}}>hoạt động</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.leftBot}>
                        <View style={{flexDirection : 'column'}}>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', top : 5, alignItems  :'center'}}>
                            <AntDesign name="search1" size={54} color="white"/>
                            <AntDesign name="arrowright" size={29} color="white"/>
                        </View>
                        <View style={{alignItems : 'center'}}>
                            <Text style={{ color : 'white', fontSize : 23, fontWeight : '500', top : 20}}>Tra cứu</Text>
                            <Text style={{ color : 'white', fontSize : 23, fontWeight : '500',top : 20}}>thông tin</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View  style={styles.menuRight}>
                    <TouchableOpacity style={styles.rightTop}>
                        <View style={{flexDirection : 'column'}}>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', top : 5, alignItems  :'center'}}>
                            <AntDesign name="calendar" size={54} color="white" />
                            <AntDesign name="arrowright" size={29} color="white"/>
                        </View>
                        <View style={{alignItems : 'center'}}>
                            <Text style={{ color : 'white', fontSize : 23, fontWeight : '500',top : 40}}>Lịch học</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightBot}>
                        <View style={{alignItems : 'center'}}>
                            <View style={{top : 20}}> 
                                <FontAwesome5 name="user-circle" size={84} color="white" />
                            </View>
                                <Text style={{ color : 'white', fontSize : 23, fontWeight : '500', top : 40}}>Thông tin</Text>
                                <Text style={{ color : 'white', fontSize : 23, fontWeight : '500',top : 40}}>cá nhân</Text>
                                <View style={{top : 50, left : 60}}> 
                                    <AntDesign name="arrowright" size={29} color="white" />
                            </View>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.news}>
                <View style={{flexDirection : 'row', padding : 10}}>
                    <Text style={{ fontSize: 16, fontWeight : 'bold', color : '#666666'}}>TIN TỨC NỔI BẬT</Text>
                    <Text style={{left : 220,color : '#666666'}}>Tất cả..</Text>
                </View>
                <Image style={{ alignSelf: 'center', height :110,width: 400, padding: 5}} source={require('./../images/exNews.png')}/>
                <View style={{alignItems : 'center', top : 5}}>
                    <Text>Lễ Công bố Quyết định công nhận Hội đồng và Chủ</Text> 
                    <Text>tịch Hội đồng Đại học Đà Nẵng nhiệm kỳ 2021-2026</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
        backgroundColor : 'white'
    },
    header:{
        flex : 1.5,
        top  : 40,
        flexDirection : 'row',
        justifyContent : 'space-between'
        
    },
    date:{
        fontWeight : 'bold',
        fontSize : 25,
        left : 10,
        top : 20
    },
    title:{
        flex : 0.5,
        backgroundColor : '#fff',
        borderColor : '#858585',
        borderBottomWidth : 0.3

    },
    titleText:{
        fontWeight : '500',
        fontSize : 23,
        left : 10,
    },  
    menu:{
        top : 5,
        flex : 5,
        flexDirection : 'row',
    },
    menuLeft:{
        backgroundColor : 'white',
        flex : 2.5,
        flexDirection : 'column'
    },
    leftTop:{
        flex : 1.5,
        alignItems : 'center',
        padding : 10,
        backgroundColor : '#78DDF9',
        borderRadius : 30,
        margin : 10,
        justifyContent : 'space-between',
    },
    leftBot:{
        flex : 1,
        padding : 10,
        margin  : 10,
        borderRadius : 30,
        backgroundColor : '#A18DFC'
    },
    menuRight:{
        flex : 2.5,
        flexDirection : 'column'
    },
    rightTop:{
        flex : 1,
        padding : 10,
        margin  : 10,
        borderRadius : 30,
        backgroundColor: '#FEC27D',

    },
    rightBot:{
        flex : 1.5,
        backgroundColor : '#FD87AA',
        padding : 10,
        margin  : 10,
        borderRadius : 30,
    },
    news:{
        flex : 3,
        backgroundColor : '#fff',
        borderColor : '#858585',
        borderTopWidth : 0.3,
        top : 10,
    },
})
