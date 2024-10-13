import React, {useState, useEffect} from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export default function EntryText ({Titulo, Name, setName}){
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>
            {Titulo}
        </Text>         
        <TextInput placeholder={Titulo.split(' ')[0]} value={Name} onChangeText={setName} style={styles.Input}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height: "10%",
        marginLeft: "10%"
    },

    Text:{
        marginTop: "1%",
        fontSize: RFPercentage(3),
        fontWeight: "bold"
    },
    Input:{
        fontSize: RFPercentage(2),
        marginTop: "1%",
        marginBottom: "4%",
        textDecorationLine: 'underline',
        width: "50%",
        borderBottomWidth: 1
    }
})