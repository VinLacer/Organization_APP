import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItems, DrawerItem} from '@react-navigation/drawer';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { getMultData } from '../../data/getData.js';

export default function CustomDrawer(props) {
    const [subjects, setSubjects] = useState([]);
    const [Keys, setKeys] = useState('');

    useEffect(() => {
        getMultData({setKeys, setSubjects});
    }, [subjects]);

    return(
        <View style={styles.container}>
        {/*HEADER*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Matérias
                </Text>
            </View>

            {/*DRAWER LIST ITEM*/}
            <View style={[{height: "80%", backgroundColor: '#E0E0E0'}]}>
            
            </View>
            
            {/*BUTTON*/}
            <View style={styles.bottom}>
                <TouchableOpacity
                onPress={() => props.navigation.navigate('Add subject')}>
                    <Text style={styles.bottomText}>
                        Adicionar Matérias
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header: {
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#E0E0E0",
        borderTopRightRadius: RFPercentage(2)
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    bottom: {
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F2B94C',
        borderBottomRightRadius:RFPercentage(2)
    },
    bottomText: {
        fontWeight: "bold",
        fontSize: RFValue(20),
        color: "white",
    }
})