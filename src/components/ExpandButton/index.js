import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ExpandButton({title, open, pressed}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={pressed}>
                <Text style={styles.text}>
                    {title}
                </Text>
                <AntDesign name={open ? "downcircleo" : "leftcircleo"} size={RFPercentage(5)} marginRight={RFPercentage(1)}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        flexDirection: "row",
        backgroundColor: "#D9D9D9",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80%"
    },
    text: {
        fontSize: RFPercentage(4),
        fontWeight: "bold",
        marginLeft: RFPercentage(1)
    }
})