import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { useState, useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function TimePicker({ setTimeIN, setTimeOUT, setPicked1, Picked1, setPicked2, Picked2 }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentPicker, setCurrentPicker] = useState(null); 
  const [TimeIn, setTimeIn] = useState();
  const [TimeOut, setTimeOut] = useState();


  const showDatePicker = (pickerNumber) => {
    setCurrentPicker(pickerNumber); 
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    let newTime = time.getHours().toString().padStart(2, '0')+":"+time.getMinutes().toString().padStart(2, '0')
    if (currentPicker === 1) {
      setTimeIn(newTime);
      setTimeIN(newTime)
      setPicked1(true);
    }
    if (currentPicker === 2) {
      setTimeOut(newTime);
      setTimeOUT(newTime)
      setPicked2(true);
    }
    hideDatePicker();
  };

  const TimeButton = ({ title, onPress, icon }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      {icon}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Das</Text>

        <TimeButton
          title={Picked1 ? TimeIn : ""}
          onPress={() => showDatePicker(1)}
          icon={Picked1 ? "" : <AntDesign name="clockcircleo" size={20} marginTop={-23}/>}
        />

        <Text style={styles.text}>Até</Text>

        <TimeButton
          title={Picked2 ? TimeOut : ""}
          onPress={() => showDatePicker(2)}
          icon={Picked2 ? "" : <AntDesign name="clockcircleo" size={20} marginTop={-23}/>}
        />

      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="time"
        is24Hour
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    marginTop: RFPercentage(5),
    columnGap: 8,
  },
  button: {
    height: "100%",
  },
  text: {
    height: RFPercentage(3)
  }
});
