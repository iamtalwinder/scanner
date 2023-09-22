import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
        <FontAwesome name="wifi" size={24} color="white" />
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
              placeholderTextColor="white"
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