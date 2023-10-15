import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button } from 'react-native';
import { styles } from './WifiScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_L, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import { RenameComponent } from '../../../components/Rename';
import { StarOutlineComponent } from '../../../components/StarOutline/StarOutline';
import QRCode from 'react-native-qrcode-svg';

export const WifiScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'SSID/ Network Name', value: '' },
    { name: 'Password', value: '' },
  ]);

  const [selectedValue, setSelectedValue] = useState('WPA/WPA2');
  const [isChecked, setIsChecked] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [error, setError] = React.useState('');

  const handleInputChange = (name: string, text: string) => {
    const updatedFormData = formData.map((field: any) =>
      field.name === name ? { ...field, value: text } : field
    );
    setFormData(updatedFormData);
    setError('');
  };

  const handleSubmit = () => {
    console.log('Form submitted:');
    formData.forEach((field: any) => {
      console.log(field.name + ': ' + field.value);
    });
    setShowQRCode(true);
  };

  const handleBlur = () => {
    const isEmpty = formData.some(field => field.value.trim() === '');
    if (isEmpty) {
      setError('One or more fields are required');
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.title}>
        <IconButton
          icon={() => <Icons name={IconEnum.wifi} size={ICON_SIZE_L} color={DEFAULT_COLOR} />
          }
        />
        <Text style={styles.headline}>Wifi</Text>
      </View>
      <View style={styles.formContainer}>
        {formData.map((field) => (
          <View key={field.name}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(field.name, text)}
              value={field.value}
              placeholder={field.name}
              placeholderTextColor='gray'
              numberOfLines={2}
              onBlur={handleBlur}
            />
          </View>
        ))}
      </View>

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.dropdown}
        dropdownIconColor='white'
      >
        <Picker.Item label='WPA/WPA2' value='WPA/WPA2' />
        <Picker.Item label='WEP' value='WEP' />
        <Picker.Item label='No password' value='Nopassword' />
      </Picker>
      <View>
        <CheckBox
          title='Hidden'
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
        />
      </View>

      <Button title='Submit' onPress={handleSubmit} />

      {showQRCode && (
        <View style={styles.qrCodeContainer}>
          <View style={styles.codeHeader}>
            <View style={styles.text}>
              <IconButton
                icon={() => <Icons name={IconEnum.wifi} size={ICON_SIZE_L} color={DEFAULT_COLOR} />
                }
              />
              <Text style={styles.headline}>Wifi</Text>
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
            <Text style={styles.textWritten}>
              WIFI:S:{formData.find(field => field.name === 'SSID/ Network Name')?.value ?? ''};T:{selectedValue};P:{formData.find(field => field.name === 'Password')?.value ?? ''};H: {isChecked ? 'true' : 'false'}
            </Text>
          </View>
        </View>
      )
      }
    </ScrollView>
  )
}
