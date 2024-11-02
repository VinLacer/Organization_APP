import {View, Text, StyleSheet, Alert} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from "@expo/vector-icons/EvilIcons"
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Clipboard from 'expo-clipboard';

export function TextViewNames({title, content}) {
    const copyMail = async () => {
       await Clipboard.setStringAsync(content)
       Alert.alert("Email Copiado!")
    }

    if (title == "E-mail do Professor:") {
        return(
        
            <View style={styles.container}>
                <View style={[{flexDirection: "row"}, {columnGap: 10}]}>
                    <AntDesign name='mail' size={20} color={"blue"} marginLeft={RFPercentage(1)} 
                    marginTop={RFPercentage(0.7)}/>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
                
                <Text style={styles.textContent} onLongPress={copyMail}>
                {content}
                </Text>
            </View>
        )
    }

    if (title == "Sala"){
        return(
                <View style={[{flexDirection: "row"} , {columnGap: 10}, {height: RFPercentage(5)}, {marginTop: RFPercentage(1)}]}>
                    <EvilIcons name='location' size={30} color={"blue"}/>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                    <Text style={[{fontSize: 17}, {marginBottom: RFPercentage(1)}, {marginLeft: RFPercentage(1)}, {marginTop: RFPercentage(0.5)}]}>
                        {content}
                    </Text>
                </View>
        )
    }
    else{
        return(
        
            <View style={styles.container}>
                <View style={[{flexDirection: "row"}, {marginLeft:RFPercentage(1)}]}>
                    <Ionicons name='person-outline' size={20} color={"blue"}/>
                    <Text style={[{fontSize: 20}, {fontWeight: "bold"}, {marginBottom: RFPercentage(1)}, {marginLeft: RFPercentage(1)}]}>
                        {title}
                    </Text>
                </View>
                
                
                <Text style={styles.textContent}>
                {content}
                </Text>
            </View>
        )
    }
    
}

export function TextViewTime({day, timein, timeout}) {
    return(
        <View style={styles.container2}>
            <AntDesign name="clockcircleo" size={20} color={"blue"} marginRight={RFPercentage(1)} 
            marginLeft={RFPercentage(0.8)}/>
            <Text style={[{fontSize: 20}, {fontWeight: "bold"}, {marginLeft: 7}, {marginBottom: 5}]}>
                Horário
            </Text>
            <Text style={[{marginLeft: RFPercentage(1)}, {marginBottom:RFPercentage(.3)}, {fontSize: 17}]}>
                {day}
            </Text>
            
            <Text style={[{marginLeft: RFPercentage(1)}, {fontSize: 20}, {marginRight: RFPercentage(1)}]}>
                {timein}
            </Text>
            <Text style={[{fontSize: 20}, {fontWeight: "bold"}]}>
                até
            </Text>
            <Text style={[{marginLeft: RFPercentage(1)}, {fontSize: 20}]}>
                {timeout}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: RFPercentage(8),
        marginBottom: RFPercentage(1),
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: RFPercentage(1)
    },
    textContent: {
        fontSize: 17,
        marginBottom: RFPercentage(1),
        marginLeft: RFPercentage(6)
    },
    container2: {
        flexDirection: "row",
        height: RFPercentage(6),
        alignItems: "center"
    }
})