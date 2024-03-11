
import {StyleSheet, Text,View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Successmark from './images/Successmark.png'



const ChangedPassword = () => {
    const navigation = useNavigation();
    const onPressChangedPassword = () => {
    };


    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                <Image style={{
                alignSelf:'center',
                marginBottom:20
                }} source={Successmark}></Image>
                <Text style={styles.title}>Password Changed!</Text>
                <Text style={{ color: "#C3C3C6", alignSelf: 'center', fontSize: 15 }}>Your password has been </Text>
                <Text style={{ color: "#C3C3C6", alignSelf: 'center', fontSize: 15 }}> changed successfully.</Text>
            </View>


            <TouchableOpacity onPress={() => {
                navigation.navigate('Login')
            }} style={{
                borderWidth: 1,
                alignSelf: 'center',
                paddingVertical: 5,
                paddingHorizontal: 100,
                borderRadius: 50,
                backgroundColor: 'blue',
                marginBottom: 50,
                marginTop: 20
            }}>
                <Text style={{ color: "white", fontSize: 20 }}>Back to Login</Text></TouchableOpacity>
            <View />
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

        alignSelf: "center",
        //paddingHorizontal:50,

        //borderWidth:1
        //marginBottom: 40,
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

export default ChangedPassword;