import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './SmsScreen.styles';

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
        <MaterialIcons name='sms' size={24} color='white' />
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
              placeholderTextColor='white'
              numberOfLines={field.name === 'Message' ? 10 : 2}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
