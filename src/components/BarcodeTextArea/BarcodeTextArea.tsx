import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { styles } from './BarcodeTextArea.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';
import { RenameComponent } from '../Rename';
import Barcode, { BarcodeFormat } from '@adrianso/react-native-barcode-builder';
import { FavoritiesIcon } from '../StarOutline/StarOutline';
import { useThemedStyles } from '../../hooks';

export type QRCodeOtherTypesProps = {
  title: string,
  limit?: number,
  value?: string,
  format?: BarcodeFormat,
}

export const BarcodeTextArea: React.FC<QRCodeOtherTypesProps> = (
  { title, limit, value, format }: QRCodeOtherTypesProps) => {

  const [text, setText] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const style = useThemedStyles(styles);

  React.useEffect(() => {
    setText(value || '');
  }, [value]);

  const handleChangeText = (val: any) => {
    setText(val);
  };

  const handleSubmit = () => {
    setShowQRCode(true);
  };


  return (
    <View style={style.mainContainer}>
      <View style={style.title}>
        <IconButton
          icon={() => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          }
        />
        <Text style={style.headline}>{title}</Text>
      </View>
      <View>
        <TextInput
          style={style.input}
          value={value}
          onChangeText={data => setText(data)}
          placeholderTextColor='gray'
          placeholder={value}
          multiline={true}
          numberOfLines={8}
          textColor='white'
        />
      </View>

      <View style={style.submitButton}>
        <Button title='Submit' onPress={handleSubmit} />
      </View>

      {showQRCode ? (
        <View style={style.qrCodeContainer}>
          <View style={style.codeHeader}>
            <View style={style.text}>
              <IconButton
                icon={() => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                }
              />
              <Text style={style.headline}>{title}</Text>
            </View>
            <View style={style.icons}>
              <RenameComponent />
              <FavoritiesIcon />
            </View>
          </View>
          <View style={style.container}>
            {text.length > 0 && (
              <Barcode style={style.barcode} value={text} format={format} flat />
            )}

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
            <Text style={style.textWritten}>{value}</Text>
          </View>
        </View>
      ) :
        ''
      }
      {/* <Text style={styles.limit}>{limit}/{limit}</Text> */}
    </View>
  )
}