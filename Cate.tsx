import { View, Text, StyleSheet,Image, FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import Arrow from './images/Arrow.png'
import Ellipse from './images/Ellipse.png'
import Next from './images/Next.png'

const Cate = () => {

  const [ShowModal,setShowModal] = useState(true);
  const navigation = useNavigation();
  const DATA = [
    {
      id:'1',
      title:'All'
    },
    {
      id:'2',
      title:'Work'
    },
    {
      id:'3',
      title:'Personal'
    },
    {
      id:'4',
      title:'Birthday'
    },
    {
      id:'5',
      title:'Health'
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() =>{
                navigation.navigate('Cal')
              }}>
        <Text style={styles.title}>Categories</Text>
         
        <Image style={{
          position:'absolute',
          flexDirection:'row',
          borderWidth:20,
          marginTop:40,
          width:14,
          height:7,
        }} source={Arrow}></Image>
      </TouchableOpacity>
      </View>

       <View>
        
      <FlatList data={DATA} renderItem={({ item }) =>
        <View style={{ 
          borderWidth:1, 
          borderRadius:15,
          borderBlockColor:'transparent',
          paddingVertical:15,
          paddingLeft:25,
          marginBottom:20,
          backgroundColor:'#FFFFFF',
          justifyContent:'space-around',
          }}>

            <Image style={{
              position:'absolute',
              //flexDirection:'row',
              marginLeft:10,
              marginTop:15
            }} source={Ellipse}>
               </Image>
           
             <Text style={{
              color:'#1B1C1F',
              fontSize:18,
              marginBottom:5,
              paddingHorizontal:47,
              marginTop:10,
              justifyContent:'space-around',
              }}>{item.title}</Text>



            <View>  
              <TouchableOpacity onPress={() =>{
                navigation.navigate('Catt')
              }}>

              <Image style={{
                borderWidth:1,
                borderColor:'#E0E5ED',
                height:10.03,
                width:7.53,
                marginRight:20, 
                alignSelf:'flex-end',
              }} source={Next}>
              </Image>
              </TouchableOpacity>
             </View> 

        </View>
    }/> 
        </View>  


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F3F3F3'
  },

  title:{
    fontSize:18,
    color:'#1B1C1F',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:50,  
    paddingBottom:24,
  }
});

export default Cate;
