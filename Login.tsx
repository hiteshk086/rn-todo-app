import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Textinput from './components/Textinput';
import fb from './images/fb.png'
import google from './images/google.png'
import apple from './images/apple.png'
import { useNavigation } from '@react-navigation/native';
import firestore, {firebase} from '@react-native-firebase/firestore';



const Login = () => {
    const navigation = useNavigation();
    const onPressLogin = () => {
        firestore()
        .collection('Users')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
            console.log(querySnapshot.docs[0]);

            if (querySnapshot.docs.length > 0)
            {
                if(querySnapshot.docs[0]._data.email === email && querySnapshot.docs[0]._data.password === password)
                {
                    console.log("User logged in");
                    navigation.navigate('HomePage')
                    setemail('')
                    setpassword('')
                }
                else{
                    Alert.alert("incorrect email id or password");
                }
            }else{
                Alert.alert("User not found")
            }
        })
    };

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                <Text style={styles.title}>Welcome back!
                </Text>
                <Text style={styles.title}>Glad to see you, Again!
                </Text>
            </View>

            <View style={{}}>
                <Textinput title='Enter your email' value={email} onChangeText={(e)=>setemail(e)}></Textinput>
                <Textinput title='Enter your password' value={password} onChangeText={(e)=>setpassword(e)}></Textinput>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Password')
                    }} style={{}}><Text style={{ color: 'blue', marginRight: 20 }}>Forgot Password?</Text></TouchableOpacity>
                </View>




                <TouchableOpacity onPress={onPressLogin} 
                style={{
                        borderWidth: 1,
                        alignSelf: 'center',
                        paddingVertical: 5,
                        paddingHorizontal: 100,
                        borderRadius: 50,
                        backgroundColor: 'blue',
                        marginBottom: 50
                    }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
                </TouchableOpacity>


                <View style={{ position: 'absolute', alignSelf: 'center', bottom: 120, backgroundColor: 'white', zIndex: 1, paddingHorizontal: 10 }}>
                    <Text>Or Login with</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderBottomColor: 'transparent', borderRightColor: 'transparent', borderLeftColor: 'transparent', borderTopColor: 'grey', paddingTop: 50, marginHorizontal: 20 }}>
                    <Image source={fb} />
                    <Image source={google} />
                    <Image source={apple} />
                </View>

                <View style={{ flexDirection: 'row', borderWidth: 1, top: 70, borderBottomColor: 'transparent', borderRightColor: 'transparent', borderLeftColor: 'transparent', borderTopColor: 'transparent', alignSelf: 'center', }}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Register')
                    }} style={{}}><Text style={{ color: 'blue', }}>Register Now</Text></TouchableOpacity>
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
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',

        alignSelf: 'flex-start',
        //paddingHorizontal:50,

        //borderWidth:1
        //marginBottom: 40, 
    },

    inputView: {
        width: "80%",
        backgroundColor: 'blue',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },

    inputText: {
        height: 50,
        //color: "blue"
    },



    loginBtn: {
        width: "80%",
        backgroundColor: 'blue',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 10
    },
});

export default Login;