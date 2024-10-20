import React, {useContext, useState, useEffect} from 'react';
import { ScrollView, View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import { storeData } from '../../data/storageData.js';
import { useNavigation } from '@react-navigation/native';
import EntryText from '../../components/InputText/index.js';
import Add_Subject_Button from '../../components/Add_subject_button/index.js';
import Schedule from '../../components/Schedule_inpt/index.js';
import Add_Horario from '../../components/Add_horario_button/index.js';


export default function Add_Subject() {
        useEffect(() => {
          
        }, [subject]);
        const [subject, setsubject] = useState({});
        
        function HandleValue(field, value) {
            setsubject({
                ...subject, [field]: value
            });

        }

    const [oneHorarios, setOneHorarios] = useState(true)
    function changeHorario() {
      setOneHorarios(!oneHorarios)
    }

    return(
        <View style={styles.container}>
            <EntryText Titulo={"Nome da Matéria"} Name={subject.name || ''} setName={(value) => HandleValue("name", value)}/>
            <EntryText Titulo={"Nome do Professor"} Name={subject.teach || ''} setName={(value) => HandleValue("teach", value)}/>
            <EntryText Titulo={"Email do Professor"} Name={subject.mail || ''} setName={(value) => HandleValue("mail", value)}/>
            <ScrollView style={styles.ScroolContainer}>
              {oneHorarios ? (
                <View>
                  <Schedule subject={subject} number={1} setRoom={(value) => HandleValue("room1", value)} 
                            setDay = {(value) => HandleValue("day1", value)}
                            setTimeIN={(value)=> HandleValue("timeIN_1", value.getHours() + ":"+ value.getMinutes())} 
                            setTimeOUT={(value) => HandleValue("timeOUT_1", value.getHours() + ":"+ value.getMinutes())} />
                  <Add_Horario texto={"Nova Sala / Horário"} pressed={changeHorario}/>
                </View>     
              ) : (
                <View>
                  <Schedule subject={subject} number={1} setRoom={(value) => HandleValue("room1", value)} 
                            setDay={(value) => HandleValue("day1", value)} 
                            setTimeIN={(value)=> HandleValue("timeIN1", value.getHours() + ":"+ value.getMinutes())} 
                            setTimeOUT={(value) => HandleValue("timeOUT1", value.getHours() + ":"+ value.getMinutes())}/>

                  <Schedule subject={subject} number={2} setRoom={(value) => HandleValue("room2", value)} 
                            setDay = {(value) => HandleValue("day2", value)}
                            setTimeIN={(value) => HandleValue("timeIN2", value.getHours() + ":"+ value.getMinutes())} 
                            setTimeOUT={(value) => HandleValue("timeOUT2", value.getHours() + ":"+ value.getMinutes())} />

                  <Add_Horario texto={"Remover Sala / Horário"} pressed={changeHorario}/>
                </View>  
              )}
            </ScrollView>
            <Add_Subject_Button subject={subject}/>
        </View>
          
          )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "white",
      marginTop: "20%"
    },
    ScroolContainer: {
      width: "100%",
      height: "50%"
    },
    buttonView:{
      height: "8%"
    },

    buttonMore: {
      width: "90%",
      height: "15%",
      backgroundColor: "#F2B94C",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    }
  });
