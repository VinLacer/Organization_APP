import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TextViewNames } from '../TextView';
import { TextViewTime } from '../TextView';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from "@expo/vector-icons/Ionicons"
import { deleteData } from '../../data/HandleData';
import { useNavigation } from '@react-navigation/native';


export default function SubjectInfo(param) {
    const subject = param.subject
    const Navigation = useNavigation();

    const deleteSubject = () => {
        deleteData(`\"${subject.name}\"`)
        Navigation.navigate('Home')

    }
    
    const showAlert = () => {
        Alert.alert(
            'Confirmação',
            'Você quer mesmo excluir essa matéria?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: deleteSubject}
            ],
            {cancelable: false}
        )
    }
    return(
        <ScrollView style={styles.container}>
            <View style={[{flexDirection: "row"}, {justifyContent: "space-between"}]}>
                <Text style={styles.Title}>
                    {subject.name.charAt(0).toUpperCase() + subject.name.slice(1)}
                </Text>
                <TouchableOpacity style={styles.button} onPress={showAlert}>
                    <Ionicons name='trash' size={RFPercentage(5)} color={"red"}/>
                </TouchableOpacity>
            </View>
            

            <TextViewNames title={"Nome do Professor:"} content={subject.teach.charAt(0).toUpperCase() + subject.teach.slice(1)}/>
            <TextViewNames title={"E-mail do Professor:"} content={subject.mail}/>
            {subject.schedule.day2 == undefined ? (
                <View>
                    <TextViewNames title={"Sala"} content={subject.schedule.room1}/>
                    <TextViewTime 
                    day={subject.schedule.day1.charAt(0).toUpperCase() + subject.schedule.day1.slice(1)} 
                    timein={subject.schedule.timeIN1} 
                    timeout={subject.schedule.timeOUT1}
                    />
                </View>
            ) : (
                <View>
                    <TextViewNames title={"Sala"} content={subject.schedule.room1}/>
                    <TextViewTime 
                    day={subject.schedule.day1.charAt(0).toUpperCase() + subject.schedule.day1.slice(1)} 
                    timein={subject.schedule.timeIN1} 
                    timeout={subject.schedule.timeOUT1}
                    />
                    <TextViewNames title={"Sala"} content={subject.schedule.room2}/>
                    <TextViewTime 
                    day={subject.schedule.day2.charAt(0).toUpperCase() + subject.schedule.day2.slice(1)} 
                    timein={subject.schedule.timeIN2} 
                    timeout={subject.schedule.timeOUT2}
                    />
                </View>
            )}
            
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: RFPercentage(2),
        width:"100%"
    },
    Title: {
        marginTop: RFPercentage(5),
        fontSize: RFPercentage(4.2),
        justifyContent: "center",
        textAlign: "center",
        marginLeft: "30%",
        fontWeight: "bold",
    },
    lineInfo:{
        fontSize: RFPercentage(2),
        marginTop: "1%",
        marginBottom: "4%",
        textDecorationLine: 'underline',
        width: "50%",
        borderBottomWidth: 1
    },
    button: {
        marginRight: RFPercentage(4),
        marginTop: RFPercentage(5)
    }
})