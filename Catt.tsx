import { StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Search from './images/Search.png'
import dotg from './images/dotg.png'
import more from './images/more.png'
import { useState } from "react";

const DATA = [
  {
    id: 1,
    title: 'Design new UX Flow',
    text: 'chdgadgvahbadjbdjbedfjbefjshvhsm fdhlkhkfwkffkfweklfwjelfj hvdvhgejhdgkwe',
    time: '10:00 AM'
  },
  {
    id: 2,
    title: 'Design new UX Flow',
    text: 'chdgadgvahbadjbdjbedfjbefjshvhsm fdhlkhkfwkffkfweklfwjelfj hvdvhgejhdgkwe ',
    time: '10:00 AM'
  },

  {
    id: 3,
    title: 'Design new UX Flow',
    text: 'chdgadgvahbadjbdjbedfjbefjshvhsm fdhlkhkfwkffkfweklfwjelfj hvdvhgejhdgkwe ',

    time: '10:00 AM'
  },
  {
    id: 4,
    title: 'Design new UX Flow',
    text: 'chdgadgvahbadjbdjbedfjbefjshvhsm fdhlkhkfwkffkfweklfwjelfj hvdvhgejhdgkwe ',
    time: '10:00 AM'
  }
];
const Catt = () => {

  const navigation = useNavigation();
  const [visible,setvisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>

      <View style={{ marginHorizontal: 20 }}>

        <TextInput style={{ borderWidth: 1, borderRadius: 25, paddingHorizontal: 20, borderColor: 'grey', marginBottom: 20 }} placeholder='Search...' />


        <Image style={{ position: 'absolute', marginLeft: 310, marginTop: 16 }} source={Search}></Image>

        <FlatList data={DATA} renderItem={({ item }) =>
          <View style={{ borderWidth: 1, borderRadius: 20, borderColor: 'transparent', paddingVertical: 10, paddingRight: 10, paddingLeft: 30, marginBottom: 20, backgroundColor: 'white' }}>
            <Image style={{ position: 'absolute', marginLeft: 10, marginTop: 10, width: 10, height: 10 }} source={dotg}></Image>

            <TouchableOpacity onPress={() => {
              setvisible(true)
            }}>
              <Image style={{ position: 'absolute', marginTop: 10, alignSelf: 'flex-end', right: 1, height:3 }} source={more}></Image>
            </TouchableOpacity>

           


            <Text style={{ color: 'black', fontSize: 16, marginBottom: 5, lineHeight: 15, }}>{item.title}</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Profile')
            }}>
              <Text style={{ color: 'lightgray' }}>{item.text}</Text>
              <Text>abcdvgfnh</Text>
            </TouchableOpacity>

            <Text style={{ color: '#1B1C1F', fontSize: 12, alignSelf: 'flex-end', paddingRight: 9, }}>{item.time}</Text>

          </View>
        } />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  
  },
  inputView: {
    width: "80%",
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 50,
     marginBottom: 20
  },
  
  title: {
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    paddingBottom: 15

  },

  searchBox: {
     height: 46,
    width: 335,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 40,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 19
  }


});

export default Catt;