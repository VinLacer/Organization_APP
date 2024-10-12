import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { storeData, getData } from '../../data/storageData.js';

export default function Add_Subject() {

    const [subject, setSubject] = useState([])
    const [subjectName, setSubjectName] = useState('')
    const [room, setRoom] = useState('')
    const [teachName, setTeachName] = useState('')
    const [email, setEmail] = useState('')

    const addSubject = () =>{
        storeData("name", subjectName)
        storeData("")
        Navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <View style={styles.input}>

                <Text style={styles.texts}>
                    Nome da Matéria
                </Text>
                <TextInput placeholder="Nome" value={subjectName} onChangeText={setSubjectName} style={styles.input_text}/>

                <Text style={styles.texts}>
                    Sala e Horário
                </Text>
                <TextInput placeholder="Sala e Horário" value={room} onChangeText={setRoom} style={styles.input_text}/>

                <Text style={styles.texts}>
                    Nome do Professor
                </Text>
                <TextInput placeholder="Nome" value={teachName} onChangeText={setTeachName} style={styles.input_text}/>

                <Text style={styles.texts}>
                    Email do Professor
                </Text>
                <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input_text}/>

            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={addSubject}>
                  <Text style={styles.buttonText}>
                    Adicionar Matéria
                  </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    input:{
      backgroundColor:'green',
      alignItems: "center",
      height:"60%",
      width: "100%",
      marginTop: "5%"
    },
    texts: {
        marginTop: "10%",
        fontSize: RFValue(30),
        fontWeight: "bold",
    },
  
    input_text:{
      fontSize: RFValue(15),
      marginTop: "5%"
    },
    buttonView: {
      width: "100%",
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      height: "20%",
      marginTop: "10%"
    },
    button:{
      backgroundColor: "red",
      borderRadius: RFValue(20),
      marginTop: RFValue(10),
      height: "50%",
      width: "80%",
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      fontWeight: "bold",
      fontSize: RFValue(30)
    }
  });