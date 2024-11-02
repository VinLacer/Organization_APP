import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import Add_Button from "../../components/Add_button";


export default function Add_stuff() {
    const [choice, setchoice] = useState();
    const [content, setcontent] = useState('');
    
    const pressed = () => {
        console.warn("Pressionado")
    }


    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.text}>
                    Selecione a Categoria
                </Text>
            </View>

            <View style={styles.picker}>

                <Picker onValueChange={setchoice}
                        selectedValue={choice}>
                            <Picker.Item label="Provas" value={"Provas"}/>
                            <Picker.Item label="Tarefas" value={"Tarefas"}/>
                            <Picker.Item label="Observações" value={"Observaçoes"}/>
                            <Picker.Item label="Links Úteis" value={"Links"}/>
                </Picker>
            </View>

            <ScrollView style={{height: RFPercentage(40)}}>
                <View style={styles.textinput}>
                    <TextInput onChangeText={setcontent}
                              placeholder="Insira aqui..." editable/>

                </View>
                
            </ScrollView>
            <Add_Button title={"Adicionar"} pressed={pressed}/>
                
        </SafeAreaView>
               
    )   
}

const styles = StyleSheet.create({

    container:{
        marginTop:RFPercentage(8),
        height:"100%",
        flex:1
    },

    header:{
        height: RFPercentage(5)
    },

    picker:{
        height:RFPercentage(10)
    },

    text:{
        textAlign:"center",
        fontSize: 20,
        fontWeight:"bold",
    },

    textinput:{
        textAlignVertical:"top",
        borderWidth: 1,
        height:RFPercentage(60),
        marginHorizontal: RFPercentage(3),
        marginTop: RFPercentage(2)
        },
    
    input:{
        height:RFPercentage(70)
    }
})
