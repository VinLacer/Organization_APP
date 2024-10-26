import AsyncStorage from '@react-native-async-storage/async-storage';

export const deleteData = async (key) => {
    await AsyncStorage.removeItem(key);
    
}

export const deleteAllData = async () =>{
    await AsyncStorage.clear();
    console.log("Dados deletados");
}