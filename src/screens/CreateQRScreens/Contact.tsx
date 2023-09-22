import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { View, Button, TextInput, StyleSheet, Text, ScrollView } from "react-native";

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
        <AntDesign name="contacts" size={24} color="white" />
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
              placeholderTextColor="white"
              numberOfLines={field.name === 'Notes' ? 6 : 2}
            />
          </View>
        ))}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212122',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  title: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15
  },
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#212122',
  },
  headline: {
    display: 'flex',
    gap: 15,
    fontSize: 18,
    color: 'white',
    flexDirection: 'row',
  },
  formContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#212122',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingRight: 10,
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
    padding: 5,
    paddingLeft: 20,
    textAlignVertical: 'top',
  },
});