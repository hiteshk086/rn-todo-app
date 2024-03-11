import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import Stroke from './images/Stroke.png'
import { useNavigation } from '@react-navigation/native'


const Account = () => {
  const navigation = useNavigation();

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
          marginTop: 50,
          width: 14,
          height: 7,
          marginLeft: 15
        }} source={Stroke}></Image>
      </TouchableOpacity>
        <Text style={styles.title}>Account</Text>
      </View>

      <View>
        <Text style={styles.name}>Full Name</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          //value={Text}
          placeholder="Full Name"
        //keyboardType="Text"
        />

        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.input2}
          placeholder="name@example.com"
        />
        <Text style={styles.password}>Password</Text>
        <View>

          <TouchableOpacity style={styles.button}>
            <Text style={{ color: '#1B1C1F', fontSize: 16 }}>Change Password</Text></TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Save Changes</Text></TouchableOpacity>
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
    marginTop: 50,
    paddingBottom: 45,
    fontWeight: 'bold'
  },

  name: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 20,
    fontWeight: '500'
  },

  email: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 20,
    fontWeight: '500'
  },

  password: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 20,
    paddingBottom: 10,
    fontWeight: '500'
  },

  input: {
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#C3C3C6',
    color:'#E0E5ED',
  },

  input2: {
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#C3C3C6',
  },

  button: {
    borderWidth: 1,
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 110,
    borderRadius: 15,
    backgroundColor: 'transparent',
    borderColor: '#C3C3C6',
    
  },

  btn:{
    borderWidth: 1,
          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 100,
          borderRadius: 50,
          backgroundColor: '#0E4D92',
          borderColor:'#0E4D92',
          marginVertical:250,
  }

});

export default Account;