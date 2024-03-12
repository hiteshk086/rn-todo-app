import { View,  StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const Mod = (props: props) => {
    const { children, visible, pressout } = props;
    return (
        <Modal
            transparent
            visible={visible}
            animationType='fade'>
            <View style={styles.centeredView}>
                <TouchableWithoutFeedback onPress={pressout}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000090'
    },

    overlay:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },

    modalView: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: '5%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }, shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})

export default Mod;