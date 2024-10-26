import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    await AsyncStorage.setItem(JSON.stringify(value.name), JSON.stringify(value));
}