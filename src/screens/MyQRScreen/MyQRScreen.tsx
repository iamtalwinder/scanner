import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './MyQRScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_L, ICON_SIZE_XL, IconEnum, Icons } from '../../components/Icons';
import { IconButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { RenameComponent } from '../../components/Rename';
import { StarOutlineComponent } from '../../components/StarOutline/StarOutline';


export const MyQRScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'FullName', value: '' },
    { name: 'Organization', value: '' },
    { name: 'Address', value: '' },
    { name: 'Phone', value: '' },
    { name: 'Email', value: '' },
    { name: 'Notes', value: '' },
  ]);

  const [showQRCode, setShowQRCode] = useState(false);

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
    setShowQRCode(true);
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
              placeholderTextColor='gray'
              numberOfLines={field.name === 'Notes' ? 8 : 2}
            />
          </View>
        ))}
      </View>

      <Button title='Submit' onPress={handleSubmit} />

      {showQRCode && (
        <View style={styles.qrCodeContainer}>
          <View style={styles.codeHeader}>
            <View style={styles.text}>
              <IconButton
                icon={() => <Icons name={IconEnum.personOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                }
              />
              <Text style={styles.headline}>My QR</Text>
            </View>
            <View style={styles.icons}>
              <RenameComponent />
              <StarOutlineComponent />
            </View>
          </View>
          <View style={styles.code}>
            <QRCode value={JSON.stringify(formData)} size={250} />
          </View>

          <View style={styles.commonIcons}>
            <View style={styles.iconContainer}>
              <IconButton
                icon={() =>
                  <Icons name={IconEnum.save} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
              />
              <Text style={styles.iconText}>Save</Text>
            </View>
            <View style={styles.iconContainer}>
              <IconButton
                icon={() =>
                  <Icons name={IconEnum.share} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
              />
              <Text style={styles.iconText}>Share</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textWritten}>
              {formData.map((field) => `${field.value}`).join('\n')}
            </Text>
          </View>
        </View>
      )
      }

    </ScrollView>
  );
}
