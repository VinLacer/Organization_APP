import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const Navigation = useNavigation();

    return(
    <View style={styles.container}>
        <Text>
          Home
        </Text>
        <TouchableOpacity onPress={() => Navigation.navigate('Teste')}>
          <Text>
            Teste
          </Text>
        </TouchableOpacity>
    </View>
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});