import React, { useState } from 'react';
import { StyleSheet, Text,  View, TouchableOpacity, Image, Alert } from 'react-native';
import Textinput from './components/Textinput';
import fb from './images/fb.png'
import google from './images/google.png'
import apple from './images/apple.png'
import Stroke from './images/Stroke.png'
import { useNavigation } from '@react-navigation/native';
import firestore, {firebase} from '@react-native-firebase/firestore';

const Register = () => {
    const navigation = useNavigation();
    const Signup = () => {
        
        firestore()
        .collection('Users')
        .add({
            username: username,
            email: email,
            password: password,
            confirmpassword: confirmpassword,
        })
        .then(() => {
            console.log("User Added")
            navigation.replace('Login');
        })

    };


    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    //console.log("username : ",username);

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
                <Text style={styles.title}>Welcome back!
                </Text>
                <Text style={styles.title}>Glad to see you, Again!
                </Text>
            </View>

            <View style={{}}>
                <Textinput title='Enter your username'  value={username} onChangeText={(e)=>setusername(e)}> </Textinput>
                <Textinput title='Enter your email' value={email} onChangeText={(e)=>setemail(e)}></Textinput>
                <Textinput title='Enter your password' value={password} onChangeText={(e)=>setpassword(e)}></Textinput>
                <Textinput title='Enter your confirmpassword' value={confirmpassword} onChangeText={(e)=>setconfirmpassword(e)}></Textinput>
                <TouchableOpacity onPress={Signup}
                style={{ borderWidth: 1,
                     alignSelf: 'center',
                      paddingVertical: 5, 
                      paddingHorizontal: 100, 
                      borderRadius: 50, 
                      backgroundColor: 'blue' 
                      }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Agree and Register</Text>
                        </TouchableOpacity>
                
                        <View style={{position: 'absolute', alignSelf: 'center',top:340, backgroundColor:'white', zIndex:1, paddingHorizontal:10}}>
                <Text>Or Login with</Text>
                </View>
                
                
                
                
                <Image style={{ position: 'absolute', marginLeft: 30, marginTop: 375 }} source={fb}></Image>
                <Image style={{ position: 'absolute', marginLeft: 10, marginTop: 375, marginLeft: 150 }} source={google}></Image>
                <Image style={{ position: 'absolute', marginLeft: 10, marginTop: 375, marginLeft: 270 }} source={apple}></Image>
                
                <View


                />
            </View>

        </View>
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

export default Register;