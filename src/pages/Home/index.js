import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function Home() {

    return(
    <View style={styles.container}>
        <Text>
          Home
        </Text>
    </View>
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a6f7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});