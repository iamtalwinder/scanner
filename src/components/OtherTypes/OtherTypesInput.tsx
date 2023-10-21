import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { Dialog, IconButton, TextInput } from 'react-native-paper';
import { styles } from './OtherTypeInputStyles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';
import { RenameComponent } from '../Rename';
import { FavoritiesIcon } from '../StarOutline/StarOutline';
import Barcode, { BarcodeFormat } from '@adrianso/react-native-barcode-builder';
import { ScrollView } from 'react-native-gesture-handler';
import { ScannedItemActionEnum, ScannedItemTypeEnum, useScannedItems } from '../../context/ScannedItemsContext';
import 'react-native-get-random-values';
import { useThemedStyles } from '../../hooks';

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

  const [showTextInput, setShowTextInput] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const [isDialogVisible, setDialogVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const handleSave = () => {
    closeDialog();
  };

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
      type: ScannedItemTypeEnum.Product,
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
      console.log('newItem is null');
    }
  };

  const handleRenameClick = () => {
    console.log('rename icon is clicked')
    setVisible(true)
  };

  const hideDialog = () => setVisible(false);
  const style = useThemedStyles(styles);

  return (
    <ScrollView style={style.mainContainer}>
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
          />
        </View>

        <View style={style.submitButton}>
          <Button title='Submit' onPress={handleSubmit} />
        </View>
        {
          visible ?
            <Dialog visible={visible} onDismiss={hideDialog} style={style.dialog}>
              <Dialog.Actions>
                <Button onPress={() => console.log('Cancel')} title='Cancel' />
                <Button onPress={() => console.log('Ok')} title='Ok' />
              </Dialog.Actions>
            </Dialog>
            : ''
        }
        {/* {showTextInput && (
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={data => setText(data)}
            placeholderTextColor='gray'
            placeholder={value}
          />
        )} */}

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
                <RenameComponent onPress={handleRenameClick} />
                <FavoritiesIcon onPress={handleAddToFavorities} isFavorite={isFavorite} />
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
    </ScrollView>
  )
}