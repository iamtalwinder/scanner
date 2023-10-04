import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './GeoScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';

export const GeoScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'Latitude', value: '' },
    { name: 'Longitude', value: '' },
    { name: 'Query', value: '' }
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
        <IconButton
          icon={() => <Icons name={IconEnum.locationOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          }
        />
        <Text style={styles.headline}>Geo</Text>
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
              multiline={true}
              numberOfLines={2}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
