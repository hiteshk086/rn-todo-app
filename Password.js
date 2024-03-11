import React, { useState } from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Textinput from './components/Textinput';
import { useNavigation } from '@react-navigation/native';
import  Stroke from './images/Stroke.png'



const Password = () => {
    const navigation = useNavigation();

    const onPressSendCode = () => {
    };

    const onPressForgotPassword = () => {
    };

    const [state, setState] = useState({
        email: '',
    })

    return (

        <View style={styles.container}>
                  <TouchableOpacity onPress={() => {
        navigation.navigate('Login')
      }}>
        <Image style={{
            marginLeft:20,
            width:9,
            height:14,
            marginBottom:10
        }} source={Stroke}></Image>
      </TouchableOpacity>
            <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={{ color: "#C3C3C6" }}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>

            </View>

            <View style={{}}>
                <Textinput title='Enter your email'><Text style={{ color: "#C3C3C6" }}></Text></Textinput>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Otp')
                    }} style={{ borderWidth: 1, alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 100, borderRadius: 50, backgroundColor: 'blue', marginTop: 20 }}>

                        <Text style={{ color: "white", fontSize: 20 }}>Send Code</Text></TouchableOpacity>
                    <View style={{ flexDirection: 'row',  alignSelf: 'center', top:220 }}>
                        <Text>Remember Password? </Text>
                        <TouchableOpacity><Text style={{ color: "blue", }}>login</Text></TouchableOpacity>
                    </View>
                </View>
                <View />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        bottom:10,
    },

    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black",

        alignSelf: "flex-start",
        //paddingHorizontal:50,

        //borderWidth:1
        //marginBottom: 40,
    },

    inputView: {
        width: "80%",
        backgroundColor: "blue",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },

    inputText: {
        height: 50,
        //color: "blue"
    },



    loginBtn: {
        width: "80%",
        backgroundColor: "blue",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 10
    },
});

export default Password;