import React, { useState } from 'react';
import { View, Button, Platform, SafeAreaView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AndroidMode } from '@react-native-community/datetimepicker';


export const CustomDatePicker = () => {
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState<AndroidMode>('date');
  const [isDisplayDate, setShow] = useState(false);

  const changeSelectedDate = ({event, selectedDate} : any) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };


  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };


  const displayDatepicker = () => {
    showMode('date');
  };


  return (
    <>
      <View>
        <Button onPress={displayDatepicker} title="Show date picker!" />
      </View>
      {isDisplayDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={mydate}
          mode={displaymode}
          is24Hour={true}
          display="default"
          onChange={changeSelectedDate}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});