import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SubjectInfo from '../../components/SubjectInfo';
import { SubjectContent } from '../../components/SubjectContent';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Add_Button from '../../components/Add_button';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ShowSubject({route}){
    const Navigation = useNavigation();
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.infoView}>
                <SubjectInfo subject={route.params.subject}/>
            </View>
            <ScrollView style={styles.ObsView}>
                <SubjectContent/>
            </ScrollView>
            <Add_Button pressed={() => Navigation.navigate('Add Stuff')} title={"Adicionar"}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: "100%"

    },
    infoView: {
        marginLeft: "6%",
        height: RFPercentage(55),
        width: "100%",
    },
    ObsView: {
        height: RFPercentage(45),
    },
})