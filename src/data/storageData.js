import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    await AsyncStorage.setItem(JSON.stringify(value.subject.name), JSON.stringify(value));
}
  
export const getData = async (key) => {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export const getMultData = async ({setKeys, setSubjects}) => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const conteudo = await AsyncStorage.multiGet(keys);
        setSubjects(conteudo);
        setKeys(keys);
    } catch (error) {
        console.error(error);
    }
}

export const deleteData = async (key) => {
    await AsyncStorage.removeItem(key);
    
}

export const deleteAllData = async () =>{
    await AsyncStorage.clear();
    console.log("Dados deletados");
}