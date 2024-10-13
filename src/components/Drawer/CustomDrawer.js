import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItems, DrawerItem} from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { storeData, getData } from '../../data/storageData.js';

export default function CustomDrawer(props) {
    return(
        <View style={styles.container}>
        {/*HEADER*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Matérias
                </Text>
            </View>

            {/*DRAWER LIST ITEM*/}
            <View style={[{height: "80%", backgroundColor: 'red'}]}>
            
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
        alignItems: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    bottom: {
        height: "10%",
        justifyContent: "center",
        alignItems: "center", backgroundColor: 'blue',
        borderBottomRightRadius: RFValue(20)
    },
    bottomText: {
        fontWeight: "bold",
        fontSize: RFValue(20),
        color: "white",
    }
})