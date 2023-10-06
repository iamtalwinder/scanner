import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './SmsScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';

export const SMSScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'Phone', value: '' },
    { name: 'Message', value: '' },
  ]);

  const handleInputChange = (name: string, text: string) => {
    const updatedFormData = formData.map((field: any) =>
      field.name === name ? { ...field, value: text } : field
    );
    setFormData(updatedFormData);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <IconButton
          icon={() => <Icons name={IconEnum.sms} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          }
        />
        <Text style={styles.headline}>SMS</Text>
      </View>
      <View style={styles.formContainer}>
        {formData.map((field) => (
          <View key={field.name}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(field.name, text)}
              value={field.value}
              placeholder={field.name}
              multiline={field.name === 'Message' ? true : false}
              placeholderTextColor='gray'
              numberOfLines={field.name === 'Message' ? 10 : 2}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
