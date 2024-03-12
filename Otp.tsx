import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Stroke from './images/Stroke.png'
import OtpInputs from 'react-native-otp-inputs';


const Otp = () => {
    const navigation = useNavigation();



    return (

        <View style={styles.container}>
            <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Password')
                }}>
                    <Image style={{
                        width: 9,
                        height: 14,
                        marginBottom: 10
                    }} source={Stroke}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>OTP Verification</Text>
                <Text style={{ color: "#C3C3C6" }}>Enter the verification code we just sent on your email address.</Text>
                <OtpInputs style={{flexDirection:'row', marginTop:20, alignSelf:'center'}} 
                numberOfInputs={4} 
                inputContainerStyles={{
                    borderWidth:2, 
                    marginHorizontal:20, 
                    borderRadius:10, 
                    paddingHorizontal:10, 
                    borderColor:'#C3C3C6'}}
                    inputStyles={{
                        fontWeight:'bold',
                        fontSize:20,
                        marginLeft:5,
                        color:'blue'
                    }}/>
            </View>


            <View style={{}}>

                <TouchableOpacity style={{ borderWidth: 1, alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 100, borderRadius: 50, backgroundColor: 'blue', marginBottom: 100, marginTop: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Verify</Text></TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf: 'center', top: 220 }}>
                    <Text>Didn't Recieve Code? </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ResetPassword')
                    }} style={{}}><Text style={{ color: "blue", }}>Resend</Text></TouchableOpacity>
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

export default Otp;