import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './PhoneScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { RenameComponent } from '../../../components/Rename';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';
import { useThemedStyles } from '../../../hooks';

export const PhoneScreen: React.FC = () => {
  const [phone, setPhone] = useState();
  const style = useThemedStyles(styles);

  const handleInputChange = () => {
    setPhone(phone);
  }

  return (
    <View style={style.mainContainer}>
      <View style={style.title}>
        <IconButton
          icon={() => <Icons name={IconEnum.phone} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          }
        />
        <Text style={style.headline}>Phone</Text>
      </View>
      <View style={style.formContainer}>
        <TextInput
          style={style.input}
          onChangeText={handleInputChange}
          value={phone}
          placeholder='Phone'
          placeholderTextColor='gray'
        />
      </View>

      {phone ? (
        <View style={style.qrCodeContainer}>
          <View style={style.codeHeader}>
            <View style={style.text}>
              <IconButton
                icon={() => <Icons name={IconEnum.phone} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                }
              />
              <Text style={style.headline}>Phone</Text>
            </View>
            <View style={style.icons}>
              <RenameComponent />
              <FavoritiesIcon />
            </View>
          </View>
          <View style={style.code}>
            <QRCode value={phone} size={250} />
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
            <Text style={style.textWritten}>{phone}</Text>
          </View>
        </View>
      ) :
        ''
      }
    </View>
  )
}
