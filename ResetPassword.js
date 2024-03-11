import React, { useState } from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import Textinput from './components/Textinput';
import { useNavigation } from '@react-navigation/native';
import  Stroke from './images/Stroke.png'



const ResetPassword = () => {
    const navigation = useNavigation();
    const onPressResetPassword = () => {
    };

    const onPressForgotPassword = () => {
    };

    const onPressSignUp = () => {
    };

    const [state, setState] = useState({
        Password: '',
        Confirmpassword: '',
    })

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
            <TouchableOpacity onPress={() => {
        navigation.navigate('Otp')
      }}>
        <Image style={{
            width:9,
            height:14,
            marginBottom:20
        }} source={Stroke}></Image>
      </TouchableOpacity>      
                <Text style={styles.title}>Create New Password </Text>
                <Text style={{ color: "#C3C3C6" }}>Your new password must be unique from those previously used.</Text>
            </View>

            <View style={{}}>
                <Textinput title='New Password'></Textinput>
                <Textinput title='Confirm Password'></Textinput>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('ChangedPassword')
                }} style={{ borderWidth: 1, alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 100, borderRadius: 50, backgroundColor: 'blue', marginBottom: 50, marginTop: 20 }}><Text style={{ color: "white", fontSize: 20 }}>Reset Password</Text></TouchableOpacity>
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

export default ResetPassword;