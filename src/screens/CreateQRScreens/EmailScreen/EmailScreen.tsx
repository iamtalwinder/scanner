import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { styles } from './EmailScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { RenameComponent } from '../../../components/Rename';
import { ScrollView } from 'react-native-gesture-handler';
import { useThemedStyles } from '../../../hooks';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';

export const EmailScreen: React.FC = () => {
  const [formData, setFormData] = useState([
    { name: 'Email', value: '' },
    { name: 'Subject', value: '' },
    { name: 'Body', value: '' },
  ]);

  const [showQRCode, setShowQRCode] = useState(false);
  const style = useThemedStyles(styles);

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
    <ScrollView style={style.mainContainer}>
      <View style={style.mainContainer}>
        <View style={style.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.email} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={style.headline}>Email</Text>
        </View>
        <View style={style.formContainer}>
          {formData.map((field) => (
            <View key={field.name}>
              <TextInput
                style={field.name === ' Body' ? style.textarea : style.input}
                onChangeText={(text) => handleInputChange(field.name, text)}
                value={field.value}
                placeholder={field.name}
                keyboardType={field.name === 'Email' ? 'email-address' : 'default'}
                multiline={field.name === 'Body' ? true : false}
                placeholderTextColor='gray'
                numberOfLines={field.name === 'Body' ? 10 : 2}
              />
            </View>
          ))}
        </View>

        <Button title='Submit' onPress={handleSubmit} />

        {showQRCode && (
          <View style={style.qrCodeContainer}>
            <View style={style.codeHeader}>
              <View style={style.text}>
                <IconButton
                  icon={() => <Icons name={IconEnum.email} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                  }
                />
                <Text style={style.headline}>Email</Text>
              </View>
              <View style={style.icons}>
                <RenameComponent />
                <FavoritiesIcon />
              </View>
            </View>
            <View style={style.code}>
              <QRCode value={JSON.stringify(formData)} size={250} />
            </View>

            <View style={style.commonIcons}>
              <View style={style.iconContainer}>
                <IconButton
                  icon={() =>
                    <Icons name={IconEnum.save} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
                />
                <Text style={style.iconText}>Save</Text>
              </View>
              <View style={style.iconContainer}>
                <IconButton
                  icon={() =>
                    <Icons name={IconEnum.share} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
                />
                <Text style={style.iconText}>Share</Text>
              </View>
            </View>
            <View>
              <Text style={style.textWritten}>
                {formData.map((field) => `${field.value}`).join('\n')}
              </Text>
            </View>
          </View>
        )
        }
      </View>
    </ScrollView>
  )
}
