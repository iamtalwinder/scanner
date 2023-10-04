import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './MyQRScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_L, ICON_SIZE_XL, IconEnum, Icons } from '../../components/Icons';
import { IconButton } from 'react-native-paper';


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

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headline}>
          <IconButton
            icon={() => <Icons name={IconEnum.personOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={styles.heading}>My QR</Text>
        </View>
        <View>
          <Text style={styles.share}>Share your contact info via QR.</Text>
        </View>
        <View>
          <View style={styles.content}>
            <Text style={styles.content}>Only enter data you want to share. When done click
              <MaterialIcons style={styles.doneIcon} name='done' size={ICON_SIZE_L} color='white' />
            </Text>
            <Text style={styles.content}>Next time you open My QR your contact QR will be displayed.</Text>
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
              placeholderTextColor='white'
              numberOfLines={field.name === 'Notes' ? 4 : 2}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
