import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { styles } from './SmsScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { StarOutlineComponent } from '../../../components/StarOutline/StarOutline';
import { RenameComponent } from '../../../components/Rename';
import QRCode from 'react-native-qrcode-svg';
import { ScrollView } from 'react-native-gesture-handler';

export const SMSScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'Phone', value: '' },
    { name: 'Message', value: '' },
  ]);

  const [showQRCode, setShowQRCode] = useState(false);

  const handleInputChange = (name: string, text: string) => {
    const updatedFormData = formData.map((field: any) =>
      field.name === name ? { ...field, value: text } : field
    );
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    formData.forEach((field: any) => {
      console.log(field.name + ': ' + field.value);
    });
    setShowQRCode(true);
  };


  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.sms} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
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
                placeholderTextColor='gray'
                numberOfLines={field.name === 'Message' ? 10 : 2}
              />
            </View>
          ))}

          <Button title='Submit' onPress={handleSubmit} />

          {showQRCode && (
            <View style={styles.qrCodeContainer}>
              <View style={styles.codeHeader}>
                <View style={styles.text}>
                  <IconButton
                    icon={() => <Icons name={IconEnum.email} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                    }
                  />
                  <Text style={styles.headline}>Email</Text>
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
        </View>
      </View>
    </ScrollView>
  )
}
