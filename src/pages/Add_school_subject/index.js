import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import InputText from '../../components/InputText/InputText';


export default function Add_subject() {
    const [Subject, setSubject] = useState();

    useEffect(() =>{
        const newSubject = {
            Name: "Materia",
            Time: "0700",
            TeachName: "Nome do professor",
            Mail: "email@exemplo.com"
        };
        setSubject(newSubject);
        // console.log(Subject.Name);
    }, []);
    
    return(
    <View style={styles.container}>
        <View style={styles.input}>

            {/* NOME DA MATERIA*/}
            <InputText Title={"Titulo"} Subject={Subject}>
            </InputText>

            {/* SALA/HORARIO*/}
          
          
            {/* NOME DO PROFESSOR*/}  
          

            {/* EMAIL DO PROFESSOR*/} 
          
          
        </View>

        <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>
                    Adicionar Matéria
                  </Text>
                </TouchableOpacity>
        </View>

    
    </View>
    );
  
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

  input_text:{
    fontWeight: "bold",
    fontSize: RFValue(30),
    marginTop: "15%"
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