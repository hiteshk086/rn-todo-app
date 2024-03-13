import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from "react";
import Textinput from './Textinput';
import Stroke from './images/Stroke.png'


const List = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Home')
        }}>
          <Image style={{
            position: 'absolute',
            flexDirection: 'row',
            borderBottomWidth: 20,
            width: 14,
            height: 7,
            marginLeft: 15
          }} source={Stroke}></Image></TouchableOpacity>
        <Text style={styles.tittle}>Add New List</Text>
      </View>

      <Text style={styles.title1}>Name project</Text>

      <View style={{}}>
        <Textinput title='Name project'></Textinput>
        < Text style={styles.title2}>Description</Text>
        <Textinput title='Description'></Textinput>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 10 }}>
        </View>
        <TouchableOpacity onPress={() =>
          navigation.navigate('Time')} 
          style={{
            borderWidth: 1,
            alignSelf: 'flex-end',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 50,
            backgroundColor: 'transparent',
            marginRight: 20
          }}>
          <Text style={{ color: "black", fontSize: 15 }}>Select Time</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate('calender')} 
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
          <Text style={{ color: "black", fontSize: 15 }}>Select Date</Text></TouchableOpacity>

      
        <TouchableOpacity onPress={() =>
          navigation.navigate('NewList')} 
          style={{
            borderWidth: 1,
            alignSelf: 'center',
            top: 20,
            left: 10,
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 50,
            backgroundColor: '#C3C3C6',

          }}>
          <Text style={{ color: 'black', fontSize: 15 }}>create</Text></TouchableOpacity>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',


  },

  tittle: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },

  title1: {
    fontSize: 15,
    color: '#1B1C1F',
    marginLeft: 10,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 10
  },
  title2: {
    fontSize: 15,
    color: '#1B1C1F',
    marginLeft: 10,
    fontWeight: '700',
    marginBottom: 10
  },
})

export default List;