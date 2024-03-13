import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const calender = () => {

    const [ShowModal, setShowModal] = useState(true);
    const navigation = useNavigation();

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

export default calender;
