import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const PhoneScreen: React.FC = () => {
  const [phone, setPhone] = useState();

  const handleInputChange = (e: any) => {
    setPhone(e.target.value);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <FontAwesome name="phone" size={24} color="white" />
        <Text style={styles.headline}>Phone</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange(value)}
          value={phone}
          placeholder='Phone'
          placeholderTextColor="white"
        />
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