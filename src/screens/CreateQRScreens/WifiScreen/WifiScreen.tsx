import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './WifiScreen.styles';

export const WifiScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'NetworkName', value: '' },
    { name: 'Password', value: '' },
  ]);

  const handleInputChange = (name: string, text: string) => {
    const updatedFormData = formData.map((field: any) =>
      field.name === name ? { ...field, value: text } : field
    );
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    console.log('Form submitted:');
    formData.forEach((field: any) => {
      console.log(field.name + ': ' + field.value);
    });
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.title}>
        <FontAwesome name='wifi' size={24} color='white' />
        <Text style={styles.headline}>Contact</Text>
      </View>
      <View style={styles.formContainer}>
        {formData.map((field) => (
          <View key={field.name}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleInputChange(field.name, text)}
              value={field.value}
              placeholder={field.name}
              placeholderTextColor='white'
            />
          </View>
        ))}
        <Button title='Submit' onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}
