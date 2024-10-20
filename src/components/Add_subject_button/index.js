import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { storeData } from '../../data/storageData';
import { useNavigation } from '@react-navigation/native';

export default function Add_Subject_Button(subject) {
  const Navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {storeData(subject), Navigation.navigate("Home")}}>
              <Text style={styles.buttonText}>
                Adicionar Matéria
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
        backgroundColor: "#F2B94C",
        borderTopLeftRadius: RFPercentage(3),
        borderTopRightRadius: RFPercentage(3),
        bottom: 0
        
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: RFPercentage(3)
      },
})