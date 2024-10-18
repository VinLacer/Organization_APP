import { View, TextInput, Text, StyleSheet } from "react-native"
import { Picker } from '@react-native-picker/picker';
import React, {createContext, useContext, useState} from 'react';
import { ScheduleInputContext } from "../../contexts/ScheduleContext";
import { ScheduleInputProvider } from "../../contexts/ScheduleContext";



export default function Schedule({day, room, time}) {
    const {schedule, setSchedule} = useContext(ScheduleInputContext)

    const handleInputChange = (field, value) => {
        setSchedule((prevSchedule) => ({
            ...prevSchedule,
            [field]: value
        }));
    };
    return(
        <View style={styles.container}>
            <View style={styles.classView}>
                <Text style={styles.Text}>
                    Sala
                </Text>
                <TextInput
                style={styles.Input}
                placeholder="Sala"
                onChangeText={(value) => handleInputChange(room, value)}
                value={schedule.room || ''}
                />
            </View>
            <View>
                <Text style={styles.Text}>
                    Horario
                </Text>
                <View>
                    <Picker
                    onValueChange={(value) => handleInputChange(day, value)}
                    selectedValue={schedule.day || ''}>
                        <Picker.Item label = "Selecione o dia" value=""/>
                        <Picker.Item label = "Segunda" value="segunda"/>
                        <Picker.Item label = "Terça" value="terca"/>
                        <Picker.Item label = "Quarta" value="quarta"/>
                        <Picker.Item label = "Quinta" value="quinta"/>
                        <Picker.Item label = "Sexta" value="sexta"/>
                        <Picker.Item label = "Sábado" value="sabado"/>
                    </Picker>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row"
    },
    classView: {
        height: "100%",
        width: "20%"
    },
    Input:{
        fontSize: RFPercentage(2),
        marginTop: "1%",
        marginBottom: "4%",
        textDecorationLine: 'underline',
        width: "50%",
        borderBottomWidth: 1
    },
    Text:{
        marginTop: "1%",
        fontSize: RFPercentage(3),
        fontWeight: "bold"
    },
})
