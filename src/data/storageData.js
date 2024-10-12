import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
      await AsyncStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getData = async (key) => {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
  };