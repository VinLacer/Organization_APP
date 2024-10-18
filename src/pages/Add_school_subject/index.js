import React, {useContext, useState} from 'react';
import { ScrollView, View, StyleSheet} from 'react-native';
import { storeData } from '../../data/storageData.js';
import { useNavigation } from '@react-navigation/native';
import EntryText from '../../components/InputText/index.js';
import Add_Subject_Button from '../../components/Add_subject_button/index.js';
import { ScheduleInputContext } from '../../contexts/ScheduleContext/index.js'
import Schedule from '../../components/Schedule_inpt/index.js';
import { ScheduleInputContext } from '../../contexts/ScheduleContext/index.js';

export default function Add_Subject() {


    const [subjectName, setSubjectName] = useState('')
    const [teachName, setTeachName] = useState('')
    const [email, setEmail] = useState('')
    const [oneHorarios, setOneHorarios] = useState(true)

    const Navigation = useNavigation();


    const { schedulecontext } = useContext(ScheduleInputContext)
    const { resetSchedule } = useContext(ScheduleInputContext);


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
      resetSchedule()
    }

    return(
        <View style={styles.container}>
            <EntryText Titulo={"Nome da Matéria"} Name={subjectName} setName={setSubjectName}/>
            <EntryText Titulo={"Nome do Professor"} Name={teachName} setName={setTeachName}/>
            <EntryText Titulo={"Email do Professor"} Name={email} setName={setEmail}/>
            <ScrollView style={styles.ScroolContainer}>
              {oneHorarios ? (
                <View>
                  <Schedule day={"day1"} room={"room1"} />
                </View>
              ) : (
                <View>

                </View>
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