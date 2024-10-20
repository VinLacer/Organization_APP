import { View, TextInput, Text, StyleSheet } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { RFPercentage } from "react-native-responsive-fontsize";
import TimePicker from "../Time_picker";

export default function Schedule({subject, number, setRoom, setDay, setTimeIN, setTimeOUT}) {

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
                value={subject[`room${number}`] || ''}
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
                    selectedValue={subject[`day${number}`] || ''}>
                        <Picker.Item label = "Selecione" value=""/>
                        <Picker.Item label = "Segunda" value="segunda"/>
                        <Picker.Item label = "Terça" value="terca"/>
                        <Picker.Item label = "Quarta" value="quarta"/>
                        <Picker.Item label = "Quinta" value="quinta"/>
                        <Picker.Item label = "Sexta" value="sexta"/>
                        <Picker.Item label = "Sábado" value="sabado"/>
                    </Picker>

                    <TimePicker setTimeIN={setTimeIN} setTimeOUT={setTimeOUT}/>
                </View>
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
        width: "15%", 
        // backgroundColor:"blue"
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
        // backgroundColor: "red"
    },
    PickerView:{
        width: "40%",
        height: "100%",
        // backgroundColor: "green"
    }
})
