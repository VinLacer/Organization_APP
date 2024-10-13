import React, {useState, useEffect} from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { storeData, getData } from '../../data/storageData.js';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function Add_Subject() {

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

    const addSubject = () =>{
      if(oneHorarios == true) {
        const subject = { name: subjectName, 
          schedule: {room1: room1,
                     time1 : time1}, 
          teachName: teachName, 
          email: email}
      }
      else{
        const subject = { name: subjectName, 
          schedule: {room1: room1,
                     time1 : time1,
                     room2 : room2,
                     time2 : time2}, 
          teachName: teachName, 
          email: email}
      }
      
      storeData(subject)
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
                {oneHorarios ? (
                  <View>
                    <Text style={styles.texts}>
                      Sala
                    </Text>
                    <TextInput placeholder='Sala' value={room1} onChangeText={setRoom1} style={styles.input_text}/>
                    
                    <Text style={styles.texts}>
                      Horario
                    </Text>
                    <View style={[{flexDirection: "row"}]}>
                      <Picker 
                      selectedValue={day1}
                      onValueChange={(itemValue) => setDay1(itemValue)}
                      style={styles.picker}>
                      <Picker.Item label = "Segunda" value = "Segunda"/>
                      <Picker.Item label = "Terça" value = "Terça"/>
                      <Picker.Item label = "Quarta" value = "Quarta"/>
                      <Picker.Item label = "Quinta" value = "Quinta"/>
                      <Picker.Item label = "Sexta" value = "Sexta"/>
                      <Picker.Item label = "Sábado" value = "Sábado"/>
                      </Picker>
                      <Text style={styles.textHorario}>
                        Das
                      </Text>
                      <Text style={styles.textHorario}>
                        Até
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.buttonMore} onPress={() => setOneHorarios(false)}>
                      <Text style={[{fontWeight: "bold"}]}>
                        Nova Sala / Horário
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.texts}>
                      Sala
                    </Text>
                    <TextInput placeholder='Sala' value={room1} onChangeText={setRoom1} style={styles.input_text}/>
                    
                    <Text style={styles.texts}>
                      Horario
                    </Text>
                    <View style={[{flexDirection: "row"}]}>
                      <Picker 
                      selectedValue={day1}
                      onValueChange={(itemValue) => setDay1(itemValue)}
                      style={styles.picker}>
                      <Picker.Item label = "Segunda" value = "Segunda"/>
                      <Picker.Item label = "Terça" value = "Terça"/>
                      <Picker.Item label = "Quarta" value = "Quarta"/>
                      <Picker.Item label = "Quinta" value = "Quinta"/>
                      <Picker.Item label = "Sexta" value = "Sexta"/>
                      <Picker.Item label = "Sábado" value = "Sábado"/>
                      </Picker>
                      <Text style={styles.textHorario}>
                        Das
                      </Text>
                      <Text style={styles.textHorario}>
                        Até
                      </Text>
                    </View>
                    <Text style={styles.texts}>
                      Sala
                    </Text>
                    <TextInput placeholder='Sala' value={room1} onChangeText={setRoom1} style={styles.input_text}/>
                    
                    <Text style={styles.texts}>
                      Horario
                    </Text>
                    <View style={[{flexDirection: "row"}]}>
                      <Picker 
                      selectedValue={day1}
                      onValueChange={(itemValue) => setDay1(itemValue)}
                      style={styles.picker}>
                      <Picker.Item label = "Segunda" value = "Segunda"/>
                      <Picker.Item label = "Terça" value = "Terça"/>
                      <Picker.Item label = "Quarta" value = "Quarta"/>
                      <Picker.Item label = "Quinta" value = "Quinta"/>
                      <Picker.Item label = "Sexta" value = "Sexta"/>
                      <Picker.Item label = "Sábado" value = "Sábado"/>
                      </Picker>
                      <Text style={styles.textHorario}>
                        Das
                      </Text>
                      <Text style={styles.textHorario}>
                        Até
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.buttonMore} onPress={() => setOneHorarios(true)}>
                      <Text style={[{fontWeight: "bold"}]}>
                        Remover Ultima Sala / Horário
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => {addSubject();Navigation.navigate("Teste")} }>
                  <Text style={styles.buttonText}>
                    Adicionar Matéria
                  </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
    },
    contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
  },
    
    input:{
      height:"80%",
      width: "100%",
      marginTop: "20%",
      marginLeft: "15%",
    },
    texts: {
        marginTop: "1%",
        fontSize: RFPercentage(3),
        fontWeight: "bold"
    },
  
    input_text:{
      fontSize: RFPercentage(2),
      marginTop: "1%",
      marginBottom: "4%",
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
      backgroundColor: "#B2E0B2",
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
    },
    picker: {
      width: "35%",
      borderRadius: 10
    },
    textHorario: {
      marginTop: "4%",
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