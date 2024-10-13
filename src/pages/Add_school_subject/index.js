import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { storeData, getData } from '../../data/storageData.js';
import { useNavigation } from '@react-navigation/native';

export default function Add_Subject() {

    const [subjectName, setSubjectName] = useState('')
    const [room, setRoom] = useState('')
    const [time, setTime] = useState();
    const [teachName, setTeachName] = useState('')
    const [email, setEmail] = useState('')

    const Navigation = useNavigation();

    const addSubject = () =>{
      const subject = { name: subjectName, 
        schedule: {room: room,
                   time : time}, 
        teachName: teachName, 
        email: email}
      storeData(subject)
    }

    return(
        <View style={styles.container}>
            <View style={styles.input}>

                <Text style={styles.texts}>
                    Nome da Matéria
                </Text>
                <TextInput placeholder="Nome" value={subjectName} onChangeText={setSubjectName} style={styles.input_text}/>

                <Text style={styles.texts}>
                    Nome do Professor
                </Text>
                <TextInput placeholder="Nome" value={teachName} onChangeText={setTeachName} style={styles.input_text}/>

                <Text style={styles.texts}>
                    Email do Professor
                </Text>
                <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input_text}/>

                <Text style={styles.texts}>
                    Sala
                </Text>
                <TextInput placeholder="Sala" value={room} onChangeText={setRoom} style={styles.input_text}/>

                <Text style={styles.texts}>
                  Horário
                </Text>
                <TextInput placeholder="Horário" value={time} onChangeText={setTime} style={styles.input_text}/>


            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => {addSubject();Navigation.navigate("Teste")} }>
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
      backgroundColor: "gray"
    },
    
    input:{
      height:"80%",
      width: "100%",
      marginTop: "20%",
      marginLeft: "15%",
      backgroundColor: "green"
    },
    texts: {
        marginTop: "1%",
        fontSize: RFPercentage(3),
        fontWeight: "bold"
    },
  
    input_text:{
      fontSize: RFPercentage(2),
      marginTop: "2%",
      marginBottom: "5%",
      textDecorationLine: 'underline',
      width: "50%",
      borderBottomWidth: 1
    },
    buttonView: {
      width: "100%",
      height: "10%",
      alignItems: "center",
      justifyContent: "flex-end"
    },
    button:{
      backgroundColor: "red",
      borderRadius: RFValue(20),
      marginTop: RFValue(10),
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      fontWeight: "bold",
      fontSize: RFValue(30)
    }
  });