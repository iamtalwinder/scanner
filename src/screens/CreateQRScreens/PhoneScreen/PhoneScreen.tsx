import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './PhoneScreen.styles';

export const PhoneScreen: React.FC = () => {
  const [phone, setPhone] = useState();

  const handleInputChange = () => {
    setPhone(phone);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <FontAwesome name='phone' size={24} color='white' />
        <Text style={styles.headline}>Phone</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={phone}
          placeholder='Phone'
          placeholderTextColor='white'
        />
      </View>
    </View>
  )
}
