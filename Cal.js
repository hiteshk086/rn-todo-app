import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

import Add from './images/Add.png'
import dotg from './images/dotg.png'
import path from './images/path.png'
import more from './images/more.png'
import plus from './images/plus.png'
import Home from './images/Home.png'
import cale from './images/cale.png'
import Category from './images/Category.png'
import Profile from './images/Profile.png'

const Cal = () => {
   
    const [ShowModal, setShowModal] = useState(true);
    const navigation = useNavigation();
    const DATA = [
        {
            id: '1',
            title: 'Design new Ux flow',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
            time: '10:00 AM'
        },
        {
            id: '2',
            title: 'Design new Ux flow',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...',
            time: '10:00 AM'
        },

    ];


    return (
        <View style={styles.container}>
            
            {/* <Modal visible={ShowModal} animationType="fade"> */}
                <Calendar style={{ borderRadius: 10, elevation: 4, margin: 40 }}
                    onDayPress={date => {
                        console.log(date)
                        setShowModal(true)
                    }}
                    onMonthChange={() => { }}
                    initialDate={'2024-02-19'}
                    markingType={'multi-dot'}
                    minDate={'2024-01-01'}

                    maxDate={'2024-12-31'}
                    hideExtraDays={false}
                    //disableArrowLeft={true}
                    //disableArrowRight={true}
                    //hideArrows={true}
                    //hideDayNames={true}

                    markedDates={{
                        '2024-03-06': {
                            marked: true, dotColor: 'red', selected: true,
                            selectedColor: 'lightblue', selectedTextColor: 'white'
                        }
                    }}


                />
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 20, paddingBottom:10}}>
                <Text style={styles.Add}>Add New Task</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('List')
                }}>
                    <Image style={{
                        width: 30,
                        height: 30,
                    }} source={Add}></Image></TouchableOpacity>
                </View>
                <FlatList data={DATA} renderItem={({ item }) =>
                    <View style={{ borderWidth: 1, borderRadius: 20, borderColor: 'transparent', paddingVertical: 10, paddingRight: 10, paddingLeft: 30, marginBottom: 20, backgroundColor: '#FFFFFF' }}>
                        <Image style={{
                            position: 'absolute',
                            marginLeft: 10,
                            marginTop: 22
                        }} source={dotg}></Image>

                        <Image style={{
                            position: 'absolute',
                            marginLeft: 330,
                            marginTop: 15
                        }} source={more}></Image>
                          <TouchableOpacity onPress={() => {
                    navigation.navigate('Cate')
                }}>
                        <Text style={{ color: '#1B1C1F', fontSize: 16, fontFamily: 'Poppins', marginBottom: 2 }}>{item.title}</Text>
                        <Text style={{ color: '#C3C3C6' }}>{item.text}</Text>
                        <Text style={{ color: '#1B1C1F', fontSize: 12, alignSelf: 'flex-end', paddingRight: 9, }}>{item.time}</Text>
                        </TouchableOpacity>
                    </View>}
                />
                <Image style={{
                    position: 'absolute',
                    marginLeft: 10,
                    marginTop: 660,
                    backgroundColor: '#F3F3F3'
                }} source={path}></Image>

                <Image style={{
                    // borderWidth:1,
                    borderColor: 'black',
                    position: 'absolute',
                    marginLeft: 145,
                    marginTop: 660,
                    //width:49.04,
                    //height:49.04,
                    alignItems: 'center',
                    //backgroundColor: 'white'
                }} source={plus}></Image>

                <Image style={{
                    // borderWidth:1,
                    borderColor: 'black',
                    position: 'absolute',
                    marginLeft: 21,
                    marginTop: 700,
                    width: 24,
                    height: 24,
                    //opacity:20%
                    //backgroundColor: 'white'
                }} source={Home}></Image>

                <Image style={{
                    // borderWidth:1,
                    borderColor: 'black',
                    position: 'absolute',
                    marginLeft: 102,
                    marginTop: 700,
                    width: 24,
                    height: 24,
                    //opacity:20%
                    //backgroundColor: 'white'
                }} source={cale}></Image>

                    
                        <Image style={{
                            // borderWidth:1,
                            borderColor: 'black',
                            position: 'absolute',
                            marginLeft: 270,
                            marginTop: 700,
                            width: 24,
                            height: 24,
                            //opacity:20%
                            //backgroundColor: 'white'
                        }} source={Category}></Image>
    
        

                <Image style={{
                    // borderWidth:1,
                    borderColor: 'black',
                    position: 'absolute',
                    marginLeft: 332,
                    marginTop: 700,
                    width: 24,
                    height: 24,
                    //opacity:20%
                    //backgroundColor: 'white'
                }} source={Profile}></Image>

            {/* </Modal> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },


    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: 'black',
        marginTop: 40,
    },
    Add: {
        
        paddingTop: 1,
        paddingBottom: 15,
        fontSize: 16,
        color: '#1B1C1F',
        fontWeight: '400',
    }
});

export default Cal;
