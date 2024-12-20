import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export default function Add_Horario({texto, pressed}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={pressed}>
                <Text style={styles.text}>
                    {texto}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "85%",
        justifyContent: "center",
        marginLeft: "6%"
    },
    button: {
        height: "100%",
        width: "100%",
        backgroundColor: "#F2B94C",
        borderRadius: RFPercentage(2)
    },
    text: {
        fontWeight: "bold",
        textAlign: "center"
    }
})
