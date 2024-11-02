import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { DrawerContentScrollView, DrawerItems, DrawerItem} from '@react-navigation/drawer';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { getMultData } from '../../data/HandleData.js';
import ShowSubject from '../../pages/ShowSubject/index.js';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawer(props) {
    const [subjects, setSubjects] = useState([]);
    const Navigation = useNavigation();

    useEffect(() => {
        getMultData({setSubjects});
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
                <DrawerContentScrollView>
                    {subjects.map((item, index) => (
                        <DrawerItem 
                        st
                        label={item.name} 
                        key={index}
                        onPress={() => {Navigation.navigate({name: 'ShowSubject',
                                                             params: {subject: item}})}}
                        /> 
                    ))}
                </DrawerContentScrollView>
                
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
    },

    listItem:{
        backgroundColor:"green"
    }
})