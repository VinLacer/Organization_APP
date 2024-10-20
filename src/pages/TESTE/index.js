import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import { deleteAllData, getMultData } from '../../data/storageData.js';

export default function TESTE() {
    const [Final, setFinal] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [Keys, setKeys] = useState('');

    useEffect(() => {
        getMultData({setKeys, setSubjects});
    }, [subjects]); 

    function Teste() {
        const teste = JSON.parse(subjects[0][1]);
        setFinal(teste);
        console.log(teste);
        console.log("Chaves : " + Keys);
    }

    return(
        <View>
            <TouchableOpacity onPress={() => Teste()}>
                <Text style={{marginTop : 90, marginBottom: 20}} >
                    Botao
                </Text>
            </TouchableOpacity>
            <Text style ={[{fontSize: 20}]}>
                {JSON.stringify(Final)}
            </Text>
        </View>
    )
}