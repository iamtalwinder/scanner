import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { styles } from './CalenderScreen.styles'
import { IconButton } from 'react-native-paper';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from '../../../utils/date';
import { formatCurrentTime } from '../../../utils/time';
import { AndroidMode } from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { TimePickerOptions } from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';
import { RenameComponent } from '../../../components/Rename';
import { StarOutlineComponent } from '../../../components/StarOutline/StarOutline';
import QRCode from 'react-native-qrcode-svg';

export const CalendarScreen: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date);
  const [endDate, setEndDate] = useState(new Date);
  const [displaymode, setMode] = useState<AndroidMode>('date');
  const [displayTimemode, setTimeMode] = useState<AndroidMode>('time');
  const [isDisplayDate, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [showQRCode, setShowQRCode] = useState(false);

  const handleInputChange = (text: string, fieldName: string) => {
    switch (fieldName) {
      case 'Event Name':
        setEventName(text);
        break;
      case 'Location':
        setLocation(text);
        break;
      case 'Description':
        setDescription(text);
        break;
      default:
        break;
    }
  }

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const displayDatepicker = () => {
    showMode('date');
  };

  const displayTimepicker = () => {
    showMode('time');
  };


  const changeStartSelectedDate = (event: DateTimePickerEvent, dateSelected: Date | undefined) => {
    if (dateSelected !== undefined && event.type === 'set') {
      setStartDate(dateSelected);
      setDate(dateSelected);
    }
    setShow(false);
  };

  const changeEndSelectedDate = (event: DateTimePickerEvent, dateSelected: Date | undefined) => {
    if (dateSelected !== undefined && event.type === 'set') {
      setEndDate(dateSelected);
      setDate(dateSelected);
    }
    setShow(false);
  };

  const hideDateAndTimePicker = () => {
    setShow(false);
  }

  const handleTimeChange = (event: any, selectedTime: any, startTimeOrEndTime: string) => {
    if (event.type === 'set') {
      if (startTimeOrEndTime === 'startTime') {
        setStartTime(selectedTime);
        console.log('start-time', selectedTime)
      } else {
        setEndTime(selectedTime);
      }
    }
    setShow(false);
  };

  const formData = {
    eventName,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    description,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.calenderSharp} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
          />
          <Text style={styles.headline}>Calender</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputFields}
            onChangeText={(text) => handleInputChange(text, 'Event Name')}
            value={eventName}
            placeholder='Event Name'
            placeholderTextColor='gray'
          />
          <Text style={styles.startTitle}>Start:</Text>
          <View style={styles.dates}>
            <TouchableOpacity onPress={displayDatepicker}>
              <Text style={styles.startEndDateInput}>{formatDate(startDate)}</Text>

              {/* <TextInput
              style={styles.startEndDateInput}
              value={formatDate(startDate)}
              placeholderTextColor='white'
              editable={false}
            /> */}
            </TouchableOpacity>

            <TouchableOpacity onPress={displayTimepicker}>
              <Text style={styles.startEndDateInput}>
                {formatCurrentTime(startTime)}
              </Text>
              {/* <TextInput
              style={styles.startEndDateInput}
              value={formatCurrentTime(startDate)}
            /> */}
            </TouchableOpacity>
          </View>

          <Text style={styles.startTitle}>End:</Text>
          <View style={styles.dates}>
            <TouchableOpacity onPress={displayDatepicker}>
              <Text style={styles.startEndDateInput}>{formatDate(endDate)}</Text>
              {/* <TextInput
              style={styles.startEndDateInput}
              value={formatDate(endDate)}
              placeholderTextColor='white'
              editable={false}
            /> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={displayTimepicker}>
              <Text style={styles.startEndDateInput}>
                {formatCurrentTime(endTime)}
              </Text>
              {/* <TextInput
              style={styles.startEndDateInput}
              value={formatCurrentTime(endTime)}
            /> */}
            </TouchableOpacity>
          </View>
        </View>

        {/* <Button title='Submit' onPress={handleSubmit} /> */}

        {showQRCode && (
          <View style={styles.qrCodeContainer}>
            <View style={styles.codeHeader}>
              <View style={styles.text}>
                <IconButton
                  icon={() => <Icons name={IconEnum.contactsOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                  }
                />
                <Text style={styles.headline}>Contact</Text>
              </View>
              <View style={styles.icons}>
                <RenameComponent />
                <StarOutlineComponent />
              </View>
            </View>
            <View style={styles.code}>
              <QRCode value={JSON.stringify(formData)} size={250} />
            </View>

            <View style={styles.commonIcons}>
              <View style={styles.iconContainer}>
                <IconButton
                  icon={() =>
                    <Icons name={IconEnum.save} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
                />
                <Text style={styles.iconText}>Save</Text>
              </View>
              <View style={styles.iconContainer}>
                <IconButton
                  icon={() =>
                    <Icons name={IconEnum.share} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
                />
                <Text style={styles.iconText}>Share</Text>
              </View>
            </View>
            <View>
              {/* <Text style={styles.textWritten}>
                {formData.map((field) => `${field.value}`).join('\n')}
              </Text> */}
            </View>
          </View>
        )
        }

        <View style={styles.calenderContainer}>
          {
            isDisplayDate && (
              <DateTimePicker
                // testID='dateTimePicker'
                value={date}
                mode={displaymode}
                is24Hour={true}
                display='default'
                onChange={changeStartSelectedDate}
                onTouchCancel={hideDateAndTimePicker}
              />
            )}
          {
            isDisplayDate && (
              <DateTimePicker
                value={date}
                mode={displaymode}
                is24Hour={true}
                display='default'
                onChange={changeEndSelectedDate}
                onTouchCancel={hideDateAndTimePicker}
              />
            )}
        </View>
        <View style={styles.timeContainer}>
          {isDisplayDate && (
            <DateTimePicker
              value={date}
              mode={displayTimemode}
              is24Hour={true}
              display='default'
              onTouchCancel={hideDateAndTimePicker}
              onChange={(event, selectedDate) => {
                handleTimeChange(event, selectedDate, 'startTime')
              }}
            />
          )}
          {isDisplayDate && (
            <DateTimePicker
              value={date}
              mode={displayTimemode}
              is24Hour={true}
              display='default'
              onTouchCancel={hideDateAndTimePicker}
            // onChange={( selectedTime) =>
            //   handleTimeChange( selectedTime, 'endTime')
            // }
            />
          )}
        </View>
        <TextInput
          style={styles.inputFields}
          onChangeText={(text) => handleInputChange(text, 'Location')}
          value={location}
          placeholder='Location'
          placeholderTextColor='gray'
        />
        <TextInput
          style={styles.inputFields}
          onChangeText={(text) => handleInputChange(text, 'Description')}
          value={description}
          placeholder='Description'
          placeholderTextColor='gray'
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </ScrollView>
  );
};

