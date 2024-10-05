import { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function InputText({Title, Subject}) {
    
    
    return(
        <View >
            <Text style={styles.text}>
                {Title}
            </Text>

            {/* <TextInput placeholder={Title} 
            onChangeText={Subject.Name} 
            value={Subject.Name} 
            style={styles.input}>
                
            </TextInput> */}
        </View>

    )   
};

const styles = StyleSheet.create({
    text:{
        color:"black",
        fontWeight:"bold",
        fontSize: 20
    },

    input : {
        fontWeight: "bold",
        fontSize: RFValue(20),
        marginTop: "15%"
    }
});
