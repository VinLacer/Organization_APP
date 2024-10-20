import { View, TextInput, Text, StyleSheet } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { RFPercentage } from "react-native-responsive-fontsize";
import TimePicker from "../Time_picker";
import { useEffect } from "react";

export default function Schedule({subject, number, setRoom, setDay, setTimeIN, setTimeOUT, setPicked1, Picked1, setPicked2, Picked2}) {
    const schedule = subject.schedule || {}

    useEffect(() => {
      }, [Picked1, Picked2]);

    return(
        <View style={styles.container}>
            <View style={styles.classView}>
                <Text style={styles.Text}>
                    Sala
                </Text>
                <TextInput
                style={styles.Input}
                placeholder="Sala"
                onChangeText={setRoom}
                value={schedule[`room${number}`] || ''}
                />
            </View>
            <View style={styles.PickerView}>
                <Text style={styles.Text}>
                    Horario
                </Text>
                <View style={styles.Picker}>
                    <Picker
                    style={[{marginLeft: "-10%"}]}
                    onValueChange={setDay}
                    selectedValue={schedule[`day${number}`] || ''}>
                        <Picker.Item label = "Selecione" value=""/>
                        <Picker.Item label = "Segunda" value="segunda"/>
                        <Picker.Item label = "Terça" value="terca"/>
                        <Picker.Item label = "Quarta" value="quarta"/>
                        <Picker.Item label = "Quinta" value="quinta"/>
                        <Picker.Item label = "Sexta" value="sexta"/>
                        <Picker.Item label = "Sábado" value="sabado"/>
                    </Picker>
                </View>
            </View>
            <View style={styles.timerInView}>
                <TimePicker setTimeIN={setTimeIN} setTimeOUT={setTimeOUT} Picked1={Picked1} setPicked1={setPicked1} Picked2={Picked2} setPicked2={setPicked2}/>
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        marginLeft: "10%",
        columnGap: 10
    },
    classView: {
        height: "100%",
        width: "15%"
    },
    Input:{
        fontSize: RFPercentage(2),
        marginTop: "1%",
        marginBottom: "4%",
        textDecorationLine: 'underline',
        width: "70%",
        borderBottomWidth: 1
    },
    Text:{
        fontSize: RFPercentage(3),
        fontWeight: "bold"
    },
    Picker: {
        width: "100%",
        height: "40%",
        justifyContent: "center",
    },
    PickerView:{
        width: "40%",
        height: "100%",
    },
    timerInView: {
        width: "40%",
        height: "100%",
        justifyContent:"center",
        textAlign: "center"
        
    }
})
