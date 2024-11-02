import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import { getMultData, deleteAllData } from '../../data/HandleData.js';


export default function TESTE() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        getMultData({setSubjects});
    }, [subjects]); 

    function Teste() {
        console.log(subjects)
    }

    return(
        <View>
            <TouchableOpacity onPress={() => Teste()}>
                <Text style={{marginTop : 90, marginBottom: 20}} >
                    Botao
                </Text>
            </TouchableOpacity>
            <Text style ={[{fontSize: 20}]}>
                {subjects[0] != undefined ? subjects[0].mail : "OBJ Undefined"}
            </Text>
        </View>
    )
}