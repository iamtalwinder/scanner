import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

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
        <MaterialIcons name="sms" size={24} color="white" />
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
              placeholderTextColor="white"
              numberOfLines={field.name === 'Message' ? 10 : 2}
            />
          </View>
        ))}
      </View>
    </View>
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
    marginBottom: 10
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
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    color: 'white',
    marginBottom: 15
  },
});