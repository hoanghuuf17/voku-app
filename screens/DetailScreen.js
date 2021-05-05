import React,{useLayoutEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image,TouchableOpacity, ScrollView } from 'react-native';
import { db } from '../firebase';
import {useDocument} from 'react-firebase-hooks/firestore';
import {AntDesign} from '@expo/vector-icons';


const DetailScreen = ({ route, navigation }) => {
    const {id} = route.params;
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign : "left",
            headerBackTitleVisible  :false,
            headerTitle : () =>(
                <View style={{flexDirection : 'row', alignItems: 'center'}} >

                </View>
            ),
            headerLeft : () =>(
                <TouchableOpacity style={{marginLeft:10}} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="black"/>
                </TouchableOpacity>
            ),
            
        })

    }, [navigation])

    const detail = db
        .collection('nofifies')
        .doc(id);

    console.log(detail)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView vertical={true}>
            <View style={styles.picture}>
                    <Image style={styles.image} source={require('./../assets/slide.png')}/>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize : 20, fontWeight : '600', color : '#565656'}}>Sinh viên năm 2 Trường VKU xuất sắc vượt qua 132 đội, vô địch Cuộc thi RoboCar năm 2021 khu vực Miền Trung - Tây Nguyên</Text>
                <Text style={styles.time}><AntDesign name="calendar" size={20} color="#363636"/>Ngày đăng: 10-04-2021</Text>

            </View>
            <View style={styles.content}>
                <Text style={{fontSize : 16}}>
                Vòng chung kết cuộc thi Sáng tạo RoboCar 2021 – lần thứ 2 với chủ đề “Road to VKU” do Trường Đại học Công nghệ thông tin và Truyền thông Việt – Hàn (VKU) chủ trì tổ chức, vừa khép lại trưa nay (10/4). Ngôi vô địch đã thuộc về Đội Bees – một đại diện xuất sắc của VKU.

Kỷ lục do Bees xác lập được ghi nhận là 2 phút, 29 giây (bao gồm hoàn thành các nhiệm vụ, thử thách với 3 vòng lộ trình sân thi đấu), so với tổng thời gian cho phép là 5 phút.

Cuộc thi Sáng tạo RoboCar 2021 – “Road to VKU” được tổ chức dành cho sinh viên các ngành Công nghệ thông tin và Công nghệ kỹ thuật máy tính; Điện tử các trường đại học khu vực Miền Trung – Tây Nguyên và cả nước.
                </Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flex : 1,
        backgroundColor : 'white'
    },
    picture:{
        top : -50,
        flex : 2,
        alignItems : 'center'
    }, 
    time:{
        alignSelf : 'flex-end'
    },  
    image:{
        height : 300,
        width : 300,
        borderRadius : 20,
        resizeMode : 'contain'
    },
    title:{
        top : -100,
        padding : 20,
        flex : 1.5,
        borderBottomWidth : 0.5,
        borderBottomColor : '#565656',
    },
    content:{
        top : -100,
        padding : 20,
        flex : 6,
    },
})
