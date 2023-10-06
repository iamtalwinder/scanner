import React, { useState } from 'react';
import { View, Button, TextInput, Text, ScrollView } from 'react-native';
import { styles } from './ContactScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';

export const ContactScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'FullName', value: '' },
    { name: 'Organization', value: '' },
    { name: 'Address', value: '' },
    { name: 'Phone', value: '' },
    { name: 'Email', value: '' },
    { name: 'Notes', value: '' },
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
        <IconButton
        icon={() => <Icons name={IconEnum.contacts} size={ICON_SIZE_XL} color={DEFAULT_COLOR}/>}
        />
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
              keyboardType={field.name === 'Email' ? 'email-address' : 'default'}
              multiline={field.name === 'Notes' ? true : false}
              placeholderTextColor='gray'
              numberOfLines={field.name === 'Notes' ? 6 : 2}
            />
          </View>
        ))}
        <Button title='Submit' onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

