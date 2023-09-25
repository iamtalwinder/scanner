import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TextInput, Text } from 'react-native';
import { styles } from './EmailScreen.styles';

export const EmailScreen: React.FC = () => {
  const [formData, setFormData] = useState([
    { name: 'Email', value: '' },
    { name: 'Subject', value: '' },
    { name: 'Body', value: '' },
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
        <MaterialIcons name='email' size={24} color='white' />
        <Text style={styles.headline}>Email</Text>
      </View>
      <View style={styles.formContainer}>
        {formData.map((field) => (
          <View key={field.name}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(field.name, text)}
              value={field.value}
              placeholder={field.name}
              keyboardType={field.name === 'Email' ? 'email-address' : 'default'}
              multiline={field.name === 'Body' ? true : false}
              placeholderTextColor='white'
              numberOfLines={field.name === 'Body' ? 10 : 2}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
