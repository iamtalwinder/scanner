import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { styles } from './OtherTypeInputStyles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';
import { RenameComponent } from '../Rename';
import { StarOutlineComponent } from '../StarOutline/StarOutline';
import Barcode, { BarcodeFormat } from '@adrianso/react-native-barcode-builder';
import { ScrollView } from 'react-native-gesture-handler';
import { ScannedItemActionEnum, ScannedItemTypeEnum, useScannedItems } from '../../context/ScannedItemsContext';
import 'react-native-get-random-values';

export type QRCodeOtherTypesProps = {
  title: string,
  limit?: number,
  value?: string,
  format?: BarcodeFormat | undefined
}

export const OtherTypesInput: React.FC<QRCodeOtherTypesProps> = (
  { title, limit, value, format }: QRCodeOtherTypesProps) => {

  const [text, setText] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [newItem, setNewItem] = useState<
    { id: string, type: ScannedItemTypeEnum, timeStamp: string, text: string, isFavorite: boolean } | null>(null);

  const { dispatch } = useScannedItems();

  React.useEffect(() => {
    setText(value || '');
  }, [value]);

  const handleChangeText = (val: any) => {
    setText(val);
  };

  const generateUniqueId = () => {
    const timestamp = new Date().getTime().toString(36);
    const randomString = Math.random().toString(36).substring(2, 5);

    return `${timestamp}-${randomString}`;
  };

  const handleSubmit = () => {
    const createdItem = {
      id: generateUniqueId(),
      type: ScannedItemTypeEnum.Barcode,
      timeStamp: new Date().toISOString(),
      text: text,
      isFavorite: false,
    };
    console.log('created-item', createdItem)
    setNewItem(createdItem);
    dispatch({ type: ScannedItemActionEnum.ADD_SCANNED_ITEM, item: createdItem });
    setShowQRCode(true);
  };

  const handleAddToFavorities = () => {
    if (newItem) {
      const updatedItem = {
        ...newItem,
        isFavorite: !newItem.isFavorite,
      };

      setNewItem(updatedItem);
      dispatch({
        type: updatedItem.isFavorite
          ? ScannedItemActionEnum.ADD_TO_FAVORITE
          : ScannedItemActionEnum.REMOVE_FROM_FAVORITE,
        id: updatedItem.id,
      });
    }
    else {
      console.log("newItem is null");
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
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
                <StarOutlineComponent onPress={handleAddToFavorities} isFavorite={isFavorite} />
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
    </ScrollView>
  )
}