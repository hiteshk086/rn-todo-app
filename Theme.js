import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import Stroke from './images/Stroke.png'
import circle from './images/circle.png'
import { useNavigation } from '@react-navigation/native'

const Theme = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: '1',
      color: 'orange'
    },
    {
      id: '2',
      color: 'yellow'
    },
    {
      id: '3',
      color: 'green'
    },
    {
      id: '4',
      color: 'blue'
    },
    {
      id: '5',
      color: 'skyblue'
    },
  ];
  return (
    <View style={styles.container}>

      
      <View>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Profile')
      }}>

        <Image style={{
          position: 'absolute',
          flexDirection: 'row',
          borderBottomWidth: 20,
          marginTop: 20,
          width: 14,
          height: 7,
          marginLeft: 15
        }} source={Stroke}></Image>
      </TouchableOpacity>
        <Text style={styles.title}>Theme</Text>
      </View>

      <FlatList data={DATA} renderItem={({ item }) =>
        <View style={{ marginBottom:20, marginHorizontal:20, backgroundColor:'transparent', }}>
          <View style={{height:40, borderTopLeftRadius:10, borderTopRightRadius:10, backgroundColor:item.color}}></View>
          <View style={{backgroundColor:'white',paddingVertical:10, flexDirection:'row'}}>
            <Image source= {circle}></Image>
            <View style={{paddingHorizontal:15}}>
              <View style={{backgroundColor:'lightgray', height:5, width:200, marginBottom:5}}></View>
              <View style={{backgroundColor:'lightgray', height:5, width:100, marginBottom:5}}></View>
              <View style={{backgroundColor:'lightgray', height:5, width:150, marginBottom:5}}></View>
            </View>
          </View>
        </View>
        }
      />

      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#FFFFFF', fontSize: 18 }}>More Theme</Text></TouchableOpacity>
      </View>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  },

  title: {
    fontSize: 18,
    color: '#1B1C1F',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingBottom: 45,
    fontWeight: 'bold'
  },

  btn:{
    borderWidth: 1,
          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 100,
          borderRadius: 50,
          backgroundColor: '#0E4D92',
          borderColor:'#0E4D92',
          marginVertical:20,
          marginLeft:10
  },

})

export default Theme;