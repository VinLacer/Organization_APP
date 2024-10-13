import React, {useState} from 'react';
import { ScrollView, View, StyleSheet} from 'react-native';
import { storeData } from '../../data/storageData.js';
import { useNavigation } from '@react-navigation/native';
import EntryText from '../../components/InputText/index.js';
import Add_Subject_Button from '../../components/Add_subject_button/index.js';

export default function Add_Subject() {

    const [Subject, setSubject] = useState({
      name:'',
      teachName: '',
      email: '',
      schedule:{room1: '',
                day1: '',
                time1: ''
      }
    })
Subject.schedule.room2 = valor
    const addPropriedade = () => {
      obj(prevState => ({
        ...prevState, new: 'valor'
      }))
    }
    function handleName(event) {
        setSubject({...Subject, name: event.target.value})
    }


    const [subjectName, setSubjectName] = useState('')
    const [room1, setRoom1] = useState('')
    const [time1, setTime1] = useState();
    const [room2, setRoom2] = useState('')
    const [time2, setTime2] = useState();
    const [teachName, setTeachName] = useState('')
    const [email, setEmail] = useState('')
    const [day1, setDay1] = useState("");
    const [day2, setDay2] = useState("");
    const [oneHorarios, setOneHorarios] = useState(true)

    const Navigation = useNavigation();
function mudar(param) {
    param
}
    const addSubject = () =>{
      const subject = {}
      if(oneHorarios == true) {
        subject = { name: subjectName, 
          schedule: {day1: day1,
                     room1: room1,
                     time1 : time1}, 
          teachName: teachName, 
          email: email}
      }
      else{
        subject = { name: subjectName, 
          schedule: {day1 : day1,
                     room1: room1,
                     time1 : time1,

                     day2: day2,
                     room2 : room2,
                     time2 : time2}, 
          teachName: teachName, 
          email: email}
      }
      
      storeData(subject)
    }

    return(
        <View style={styles.container}>
            <EntryText Titulo={"Nome da Matéria"} Name={subjectName} setName={setSubjectName}/>
            <EntryText Titulo={"Nome do Professor"} Name={teachName} setName={setTeachName}/>
            <EntryText Titulo={"Email do Professor"} Name={email} setName={setEmail}/>
            <ScrollView style={styles.ScroolContainer}>
              {oneHorarios ? (

              ) : (
                
              )}
            </ScrollView>
            <Add_Subject_Button add_subject={addSubject}/>
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