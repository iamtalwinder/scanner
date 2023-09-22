import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const MyQRScreen: React.FC = () => {

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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headline}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.heading}>My QR</Text>
        </View>
        <View>
          <Text style={styles.share}>Share your contact info via QR.</Text>
        </View>
        <View>
          <View style={styles.content}>
            <Text style={styles.content}>Only enter data you want to share. When done click
              <MaterialIcons style={styles.doneIcon} name="done" size={20} color="white" />
            </Text>
            <Text style={styles.content}>Next time you open My QR your contact QR will be displayed</Text>
          </View>
        </View>
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
              numberOfLines={field.name === 'Notes' ? 4 : 2}
            />
          </View>
        ))}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212122',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10
  },
  headline: {
    display: 'flex',
    gap: 15,
    flexDirection: 'row',
  },
  heading: {
    color: 'white'
  },
  share: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  },
  content: {
    display: 'flex',
    color: 'white',
  },
  doneIcon: {
    margin: 10
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

export default MyQRScreen;

