import React,{useState, useEffect, useLayoutEffect} from 'react'
import { 
    StyleSheet, 
    TextInput, 
    View,SafeAreaView, 
    ScrollView, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { db } from '../firebase'
import New from './../components/new';

const SearchScreen = ({navigation}) => {
    const [input, setInput] = useState(null)
    const [posts, setPosts] = useState(null)
    const [data, setData] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])

    useEffect(() => {
        const post = db.collection('notifies').orderBy('viewer', "asc").onSnapshot((snapshot) =>{
            setPosts(snapshot.docs.map(doc => ({
             id : doc.id,
             data : doc.data()
         }))
     )});
         return post;
     }, [])

    const search = (text) => {
        if (text) {
          const newData = posts.filter(
            function (item) {
              const itemData = item.data.title
                ? item.data.title.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setData(newData);
          setInput(text);
        } else {
          setData(posts);
          setInput(text);
        }
      };

    const selectNotify = (id) => {
        navigation.navigate('Detail', {id : id})
    }

    return (
        <SafeAreaView style={styles.container}> 
            <View style={styles.searchBar}>
                <AntDesign name="search1" size={20} color='#575757'/>
                <TextInput
                    style={{flex: 1,height: 40, borderRadius : 10, margin : 20, backgroundColor : '#ddd' }}
                    placeholder="Nhập từ khoá "
                    placeholderTextColor="#7a7a7a"
                    onChangeText={(text) => search(text)}
                />
                <FontAwesome name="microphone" size={20} color='#575757'/>
            </View>
            <View style={styles.content}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}>
                <TouchableWithoutFeedback keyboard="dismiss">
                    <>
                        <ScrollView>
                            {data && 
                                data.map(doc => {
                                    const {title, duration, viewer, content, picture} = doc.data;
                                    return(<New 
                                        onPress={()=> selectNotify(doc.id)}
                                        key={doc.id} 
                                        id={doc.id}
                                        title={title} 
                                        duration={duration} 
                                        viewer={viewer} 
                                        content={content} 
                                        picture={picture}/>)
                            })}
                        </ScrollView>
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flex : 1,
        backgroundColor : '#fff'
    },
    searchBar:{
        top : -10,
        margin : 10, 
        flexDirection : 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flex : 1,
    },
    content:{
        flex: 9,
    }
})
