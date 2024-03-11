import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable,Alert } from 'react-native'
import React, { useState } from 'react';
import Stroke from './images/Stroke.png'
import Profile2 from './images/Profile2.png'
import Edit from './images/Edit.png'
import Account from './images/Account.png'
import Stroke1 from './images/Stroke1.png'
import Theme from './images/Theme.png'
import star from './images/star.png'
import sun from './images/sun.png'
import active from './images/active.png'
import key from './images/key.png'
import Help from './images/Help.png'
import logout from './images/logout.png'
import { useNavigation } from '@react-navigation/native'


const Profile = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Catt')
      }}>
        <Image style={{
          position: 'absolute',
          flexDirection: 'row',
          borderBottomWidth: 20,
          marginTop: 20,
          width: 14,
          height: 7,
          marginLeft: 15
        }} source={Stroke}></Image></TouchableOpacity>

        <Text style={styles.title}>Profile</Text>
      </View>

      <View>
        <Image style={{
          flexDirection: 'row',
          marginTop: 20,
          marginRight: 10,
          borderWidth: 1,
          borderColor: '#C4C4C4',
          borderRadius: 40,
          alignSelf: 'center',
          justifyContent: 'center',
          height: 80,
          width: 80
        }} source={Profile2}></Image>

        <Image style={{
          position: 'absolute',
          flexDirection: 'row',
          //alignSelf:'center',
          backgroundColor: 'white',
          marginLeft: 207,
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 85,
          height: 17,
          width: 17
        }} source={Edit}></Image>
      </View>

      <Text style={styles.name}>Kurama Musamba</Text>
      <View>
        <Text style={styles.id}>@Kurama1290</Text>
      </View>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Account')
      }}>
        <View style={{ borderWidth: 10, borderColor: '#fffafa', backgroundColor: '#fffafa' }}>
          <Text style={styles.account}>Account</Text>

          <Image style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            marginHorizontal: 20,
          }} source={Account}></Image>

          <Image style={{
            position: 'absolute',
            alignSelf: 'flex-end',
          }} source={Stroke1}></Image>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => {
        navigation.navigate('Theme')
      }}>
        <View style={{ borderWidth: 10, borderColor: '#fffafa', backgroundColor: '#fffafa', marginTop: 1 }}>
          <Text style={styles.theme}>Theme</Text>
          <Image style={{
            position: 'absolute',
            marginHorizontal: 20
          }} source={Theme}></Image>

          <Image style={{
            position: 'absolute',
            alignSelf: 'flex-end',
          }} source={Stroke1}></Image>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Icon')
      }}>
        <View style={{ borderWidth: 10, borderColor: '#fffafa', backgroundColor: '#fffafa', marginTop: 1 }}>
          <Text style={styles.icon}>App Icon</Text>
          <Image style={{
            position: 'absolute',
            marginHorizontal: 20
          }} source={star}></Image>

          <Image style={{
            position: 'absolute',
            alignSelf: 'flex-end',
          }} source={Stroke1}></Image>

        </View>
      </TouchableOpacity>


      <View style={{ borderWidth: 10, borderColor: '#fffafa', backgroundColor: '#fffafa', marginTop: 1 }}>
        <Text style={styles.mode}>Change Mode</Text>
        <Image style={{
          position: 'absolute',
          marginHorizontal: 20
        }} source={sun}></Image>

        <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end' }}>
          <Image style={{
            position: 'absolute',
            alignSelf: 'flex-end',
          }} source={active}></Image>
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: 10, borderColor: '#fffafa', backgroundColor: '#fffafa', marginTop: 25 }}>
        <Text style={styles.privacy}>Privacy Policy</Text>
        <Image style={{
          position: 'absolute',
          marginHorizontal: 20
        }} source={key}></Image>

        <Image style={{
          position: 'absolute',
          alignSelf: 'flex-end',
        }} source={Stroke1}></Image>
      </View>

      <View style={{ borderWidth: 10, borderColor: '#fffafa', backgroundColor: '#fffafa', marginTop: 1 }}>
        <Text style={styles.privacy}>Help center</Text>
        <Image style={{
          position: 'absolute',
          marginHorizontal: 20
        }} source={Help}></Image>

        <Image style={{
          position: 'absolute',
          alignSelf: 'flex-end',
        }} source={Stroke1}></Image>
      </View>


      <View style={{ borderWidth: 10, borderColor: '#fffafa', backgroundColor: '#fffafa', marginTop: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Text style={styles.privacy}>Log Out</Text>
        <Image style={{
          position: 'absolute',
          marginHorizontal: 20
        }} source={logout}></Image>

        <Image style={{
          position: 'absolute',
          alignSelf: 'flex-end',
        }} source={Stroke1}></Image>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3'
  },

  title: {
    fontSize: 18,
    color: '#1B1C1F',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 15
  },

  name: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#1B1C1F',
    marginTop: 15,
    justifyContent: 'center'
  },

  id: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#C3C3C6',
    paddingBottom: 20

  },

  account: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 100,
  },

  theme: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 100,
  },

  icon: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 100,
  },

  mode: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 100,
  },

  privacy: {
    fontSize: 16,
    color: '#1B1C1F',
    marginHorizontal: 100,
  },

  centeredView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default Profile;