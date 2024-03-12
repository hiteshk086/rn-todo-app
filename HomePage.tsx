import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import dotg from './images/dotg.png'
import more from './images/more.png'
import Search from './images/Search.png'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Textinput from "./Textinput";
import Mod from './Mod';

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
const HomePage = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [vis, setvis] = useState(false);
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>

      <View style={{ marginHorizontal: 20 }}>

        <Textinput style={{ borderWidth: 1, borderRadius: 25, paddingHorizontal: 20, borderColor: 'grey', marginBottom: 20 }} placeholder='Search...'></Textinput>


        <Image style={{ position: 'absolute', marginLeft: 310, marginTop: 16 }} source={Search}></Image>


        <FlatList data={DATA} renderItem={({ item }) =>
          <View style={{ borderWidth: 1, borderRadius: 20, borderColor: 'transparent', paddingVertical: 10, paddingRight: 10, paddingLeft: 30, marginBottom: 20, backgroundColor: 'white' }}>
            <Image style={{ position: 'absolute', marginLeft: 10, marginTop: 10, width: 10, height: 10 }} source={dotg}></Image>




            <TouchableOpacity style={{ width: "100%" }} onPress={() => {
              navigation.navigate('Home')
            }}>
              <View>

                <TouchableOpacity onPress={() => setvis(true)}
                  style={{
                    backgroundColor: 'red',
                    alignSelf: 'flex-end',
                    top: 30,
                    right: 15,
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    position: 'absolute',
                    borderRadius: 10
                  }}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 5, lineHeight: 15, }}>{item.title}</Text>

              <Text style={{ color: 'lightgray', width: "80%" }}>{item.text}</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 12, alignSelf: 'flex-end', paddingRight: 10, }}>{item.time}</Text>
          </View>
        } />

<Mod visible={vis} pressout={() => {
                  setvis(false)
                }} >
                  <View style={{width:250}}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'black', marginBottom:10}}>Do you Want To Delete This Note?</Text>
                    
                    <View style={{flexDirection:'row',  justifyContent:'space-evenly' }}>
                      <TouchableOpacity onPress={() =>
                        navigation.navigate('HomePage')}
                        style={{
                          borderWidth: 1,
                          borderRadius: 50,
                          paddingVertical: 10,
                          paddingHorizontal: 30,
                          //marginRight: 90,
                          //marginBottom:10,
                          //alignSelf: 'flex-start',

                        }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>Yes</Text></TouchableOpacity>
                      <TouchableOpacity onPress={() =>
                        navigation.navigate('HomePage')}
                        style={{
                          borderWidth: 1,
                          //position: 'absolute',
                          borderRadius: 80,
                          paddingVertical: 10,
                          paddingHorizontal: 30,
                          //marginRight: 90,
                          //marginBottom:10,
                          //alignSelf: 'flex-end',

                        }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>No</Text></TouchableOpacity>
                    </View>
                  </View>
                </Mod>
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

export default HomePage;
