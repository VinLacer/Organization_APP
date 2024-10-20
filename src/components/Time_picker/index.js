import { View, TextInput, Text, StyleSheet, Button } from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker";
import { useState } from "react";

export default function TimePicker({setTimeIN, setTimeOUT}) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (time) => {
      console.warn("A date has been picked: ", time.getMinutes());
      hideDatePicker();
    };
  
    return (
      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="time"
          is24Hour
          onConfirm={setTimeIN}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };
