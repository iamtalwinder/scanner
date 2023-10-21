import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { styles } from './BarcodeTextArea.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';
import { RenameComponent } from '../Rename';
import Barcode, { BarcodeFormat } from '@adrianso/react-native-barcode-builder';
import { FavoritiesIcon } from '../StarOutline/StarOutline';

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
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <IconButton
          icon={() => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          }
        />
        <Text style={styles.headline}>{title}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={data => setText(data)}
          placeholderTextColor='gray'
          placeholder={value}
          multiline={true}
          numberOfLines={8}
        />
      </View>

      <View style={styles.submitButton}>
        <Button title='Submit' onPress={handleSubmit} />
      </View>

      {showQRCode ? (
        <View style={styles.qrCodeContainer}>
          <View style={styles.codeHeader}>
            <View style={styles.text}>
              <IconButton
                icon={() => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                }
              />
              <Text style={styles.headline}>{title}</Text>
            </View>
            <View style={styles.icons}>
              <RenameComponent />
              <FavoritiesIcon />
            </View>
          </View>
          <View style={styles.container}>
            {text.length > 0 && (
              <Barcode style={styles.barcode} value={text} format={format} flat />
            )}

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
            <Text style={styles.textWritten}>{value}</Text>
          </View>
        </View>
      ) :
        ''
      }
      {/* <Text style={styles.limit}>{limit}/{limit}</Text> */}
    </View>
  )
}