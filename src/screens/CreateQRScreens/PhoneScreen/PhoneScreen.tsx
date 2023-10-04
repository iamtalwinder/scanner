import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './PhoneScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';

export const PhoneScreen: React.FC = () => {
  const [phone, setPhone] = useState();

  const handleInputChange = () => {
    setPhone(phone);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <IconButton
          icon={() => <Icons name={IconEnum.phone} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          }
        />
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
