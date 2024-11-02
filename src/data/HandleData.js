import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    await AsyncStorage.setItem(JSON.stringify(value.name), JSON.stringify(value));
}

export const getData = async (key) => {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export const getMultData = async ({setSubjects}) => {
    const list = []
    try {
        const keys = await AsyncStorage.getAllKeys();
       const conteudo = await AsyncStorage.multiGet(keys);
       
       conteudo.forEach((item)=> {
        list.push(JSON.parse(item[1]))
       })
    } catch (error) {
        console.warn(error)
    }
    setSubjects(list)
}


export const deleteData = async (key) => {
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys)
    await AsyncStorage.removeItem(key);
    console.log('Materia removida:', key)
    
}

export const deleteAllData = async () =>{
    await AsyncStorage.clear();
    console.log("Dados deletados");
}