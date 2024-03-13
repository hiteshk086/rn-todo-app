import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Stroke from './images/Stroke.png'
import task from './images/task.png'
import { useNavigation } from '@react-navigation/native'


const Icon = () => {
    const navigation = useNavigation();


    const DATA = [
        {
            id: '1',
            color: '#E86C62',
            Color: '#3688F2',
            colur: '#73A954'
        },
        {
            id: '2',
            color: '#F09643',
            Color: '#0E4D92',
            colur: '#E7A4CF'
        },
        {
            id: '3',
            color: '#F5D155',
            Color: '#4285F4',
            colur: '#9D53BB'
        },
        {
            id: '4',
            color: '#516171',
            Color: '#36C5F0',
            colur: '#24A19C'
        },
        {
            id: '5',
            color: '#0ACF83',
            Color: '#FF486A',
            colur: '#FF4500'
        },



    ];
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
                    marginTop: 20,
                    width: 14,
                    height: 7,
                    marginLeft: 15
                }} source={Stroke}></Image></TouchableOpacity>
                <Text style={styles.title}>App Icon</Text>

                <FlatList data={DATA} renderItem={({ item }) =>

                    <View style={styles.box}>
                        <TouchableOpacity>
                        <View style={{borderRadius:20, marginLeft: 10, height: 90, width: 90, backgroundColor: item.color }}></View>
                      <Image style={{
                          position:'absolute',
                          alignSelf:'center',
                          justifyContent:'center',
                          left:30,
                          top:20
                        }} source={task}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={{ borderRadius:20, marginLeft: 30, marginRight: 20, height: 90, width: 90, backgroundColor: item.Color }}></View>
                        <Image style={{
                            position:'absolute',
                            marginHorizontal:160,
                            alignSelf:'center',
                            top:20
                        }} source={task}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>

                        <View style={{ borderRadius:20, marginLeft: 10, height: 90, width: 90, backgroundColor: item.colur }}></View>
                        <Image style={{
                            position:'absolute',
                            marginHorizontal:280,
                            alignSelf:'center',
                            top:20
                        }} source={task}></Image>
                        </TouchableOpacity>
                    </View>
                }>
                </FlatList>
            </View>
            <View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>More Theme</Text></TouchableOpacity>
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
        marginTop: 20,
        paddingBottom: 45,
        fontWeight: 'bold'
    },

    box: {  

        justifyContent:'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 25,
        marginHorizontal:20,
    },

    btn: {
        borderWidth: 1,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 50,
        backgroundColor: '#0E4D92',
        borderColor: '#0E4D92',
        marginVertical: 20,
        marginLeft: 10
    },
})

export default Icon;