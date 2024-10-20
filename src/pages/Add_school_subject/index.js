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

    const Navigation = useNavigation();
    const [subject, setsubject] = useState({});
    function HandleValue(field, value) {
      if (field.startsWith("time") || field.startsWith("room") || field.startsWith("day")) {
        setsubject(prevSubject => ({
          ...prevSubject,
          schedule: {
            ...(prevSubject.schedule || {}),
            [field]: value
          }
        }));
      } else {
        setsubject(prevSubject => ({
          ...prevSubject,
          [field]: value
        }));
      }
    }
    
    

    const [oneHorarios, setOneHorarios] = useState(true)
    const [Picked1, setPicked1] = useState(false);
    const [Picked2, setPicked2] = useState(false);
    const [Picked3, setPicked3] = useState(false);
    const [Picked4, setPicked4] = useState(false);
    function changeHorario() {
      setOneHorarios(!oneHorarios)
    }
    function storeSubject() {
      storeData(subject);
      setsubject({})
      setPicked1(false)
      setPicked2(false)
      setPicked3(false)
      setPicked4(false)
      Navigation.navigate("Home")
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
                            setTimeIN={(value)=> HandleValue("timeIN1", value)} 
                            setTimeOUT={(value) => HandleValue("timeOUT1", value)}
                            Picked1={Picked1} setPicked1={setPicked1} Picked2={Picked2} setPicked2={setPicked2} />
                  <Add_Horario texto={"Nova Sala / Horário"} pressed={changeHorario}/>
                </View>     
              ) : (
                <View>
                  <Schedule subject={subject} number={1} setRoom={(value) => HandleValue("room1", value)} 
                            setDay={(value) => HandleValue("day1", value)} 
                            setTimeIN={(value)=> HandleValue("timeIN1", value)} 
                            setTimeOUT={(value) => HandleValue("timeOUT1", value)}
                            Picked1={Picked1} setPicked1={setPicked1} Picked2={Picked2} setPicked2={setPicked2}/>

                  <Schedule subject={subject} number={2} setRoom={(value) => HandleValue("room2", value)} 
                            setDay = {(value) => HandleValue("day2", value)}
                            setTimeIN={(value) => HandleValue("timeIN2", value)} 
                            setTimeOUT={(value) => HandleValue("timeOUT2", value)}
                            Picked1={Picked3} setPicked1={setPicked3} Picked2={Picked4} setPicked2={setPicked4} />

                  <Add_Horario texto={"Remover Sala / Horário"} pressed={changeHorario}/>
                </View>  
              )}
            </ScrollView>
            <Add_Subject_Button pressed={storeSubject}/>
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
