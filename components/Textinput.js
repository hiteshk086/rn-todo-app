import { View,TextInput } from 'react-native'
import React from 'react'



const Textinput = (props) => {
    return (
        <View >
            <TextInput style={{
                //width: "80%",
                backgroundColor: "transparent",
                borderWidth:1,
                borderRadius: 10,
                borderColor:'grey',
                //height: 50,
                marginHorizontal:20,
                marginBottom:20,
                justifyContent: "center",
                paddingHorizontal:20
                //padding: 20
            }} 
            placeholder={props.title} 
            placeholderTextColor='grey' 
            value={props.value}
            onChangeText={props.onChangeText}/>
        </View>
    )
}

export default Textinput;