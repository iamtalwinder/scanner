import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './PhoneScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { RenameComponent } from '../../../components/Rename';
import { StarOutlineComponent } from '../../../components/StarOutline/StarOutline';

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
          placeholderTextColor='gray'
        />
      </View>

      {phone ? (
        <View style={styles.qrCodeContainer}>
          <View style={styles.codeHeader}>
            <View style={styles.text}>
              <IconButton
                icon={() => <Icons name={IconEnum.phone} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                }
              />
              <Text style={styles.headline}>Phone</Text>
            </View>
            <View style={styles.icons}>
              <RenameComponent />
              <StarOutlineComponent />
            </View>
          </View>
          <View style={styles.code}>
            <QRCode value={phone} size={250} />
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
            <Text style={styles.textWritten}>{phone}</Text>
          </View>
        </View>
      ) :
        ''
      }
    </View>
  )
}
