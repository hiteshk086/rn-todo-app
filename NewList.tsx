import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Stroke from './images/Stroke.png'

const List = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={{marginTop:20}}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('List')
        }}>
        <Image style={{
            position:'absolute',
            flexDirection:'row',
            borderBottomWidth:20,
            width:14,
            height:7,
            marginLeft:15
        }} source={Stroke}></Image></TouchableOpacity>
        <Text style={styles.tittle}>Add New List</Text>
       </View>
    
      <View>
      <Text style={styles.title1}>Name project</Text>
      <View style={{borderWidth:1,borderRadius:10,marginRight:20,marginLeft:20,marginTop:5,marginBottom:15}}>
        <Text style={styles.input}>Design 1</Text>
      </View>
        
        < Text style={styles.title2}>Description</Text>
        <View style={{borderWidth:1,borderRadius:10,marginRight:20,marginLeft:20,marginTop:10,marginBottom:10}}>
        <Text style={styles.input}>Lorem Ipsum is simply dummy text of the printing</Text>
      </View>
        
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 10 }}>
        </View>
        <TouchableOpacity 
          style={{
            borderWidth: 1,
            alignSelf: 'flex-end',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 50,
            backgroundColor: 'transparent',
            marginRight:20

          }}>
          <Text style={{ color: 'black', fontSize: 15 }}>05:10:00</Text></TouchableOpacity>
        <TouchableOpacity 
          style={{
            borderWidth: 1,
            alignSelf: 'flex-start',
            bottom: 40,
            left: 10,
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 50,
            backgroundColor: 'transparent',
        

          }}>
          <Text style={{ color: "black", fontSize: 15 }}>14-02-2024</Text></TouchableOpacity>

        <TouchableOpacity onPress={() =>
          navigation.navigate('Cal')} style={{
            borderWidth: 1,
            alignSelf: 'center',
            top: 20,
            left: 10,
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 50,
            backgroundColor: '#0E4D92'

          }}>
          <Text style={{ color: '#FFFFFF', fontSize: 15 }}>create</Text></TouchableOpacity>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    

  },

  tittle:{
    fontSize:18,
    color:'black',
    alignSelf:'center',
  },

  title1: {
    fontSize: 15,
    color: '#1B1C1F',
    marginLeft:10,
    fontWeight:'700',
    marginTop:30
  },
  title2: {

    fontSize: 15,
    color: '#1B1C1F',
    marginLeft:10,
    fontWeight:'700'
  },

  input:{
    fontSize:16,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    color:'#1B1C1F'
  }

  
})

export default List;