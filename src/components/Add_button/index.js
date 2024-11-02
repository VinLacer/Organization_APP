import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Add_Button({title, pressed}) {

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={pressed}>
              <AntDesign name='pluscircleo' size={RFPercentage(5)} marginRight={RFPercentage(1)}/>
              <Text style={styles.buttonText}>
                {title}
              </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-end",
        height: "10%"
    },
    button: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#B2E0B2",
        borderTopLeftRadius: RFPercentage(3),
        borderTopRightRadius: RFPercentage(3),
        bottom: 0
        
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: RFPercentage(3)
      },
})