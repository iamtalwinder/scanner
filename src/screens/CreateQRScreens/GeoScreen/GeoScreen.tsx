import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { styles } from './GeoScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';
import { RenameComponent } from '../../../components/Rename';

export const GeoScreen: React.FC = () => {

  const [formData, setFormData] = useState([
    { name: 'Latitude', value: '' },
    { name: 'Longitude', value: '' },
    { name: 'Query', value: '' }
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
                placeholderTextColor='gray'
                multiline={true}
                numberOfLines={2}
              />
            </View>
          ))}

          <Button title='Submit' onPress={handleSubmit} />

          {showQRCode && (
            <View style={styles.qrCodeContainer}>
              <View style={styles.codeHeader}>
                <View style={styles.text}>
                  <IconButton
                    icon={() => <Icons name={IconEnum.locationOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                    }
                  />
                  <Text style={styles.headline}>Geo</Text>
                </View>
                <View style={styles.icons}>
                  <RenameComponent />
                  <FavoritiesIcon />
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
