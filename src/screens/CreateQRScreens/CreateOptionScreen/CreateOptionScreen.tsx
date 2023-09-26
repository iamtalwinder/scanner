import React, { ReactNode } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import {
  FontAwesome5,
  Feather,
  Entypo,
  MaterialIcons,
  AntDesign,
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons';
import { Button, Divider } from 'react-native-paper';
import { styles } from './CreateOptionScreen.styles';
import { ICON_SIZE_XL } from '../../../components/Icons';

export interface CreateQRType {
  id: string;
  name: string;
  pathname: string;
  icon: () => ReactNode;
}

export const CreateQRList: CreateQRType[] = [
  {
    id: uuidv4(),
    name: 'Content from clipboard',
    pathname: 'ClipboardScreen',
    icon: () => <FontAwesome5 name='clipboard' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'URL',
    pathname: 'URLScreen',
    icon: () => <Feather name='link-2' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'Text',
    pathname: 'TextScreen',
    icon: () => <Entypo name='text' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'Contact',
    pathname: 'ContactScreen',
    icon: () => <AntDesign name='contacts' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'Email',
    pathname: 'EmailScreen',
    icon: () => <MaterialIcons name='email' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'SMS',
    pathname: 'SMSScreen',
    icon: () => <MaterialIcons name='sms' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'Geo',
    pathname: 'GeoScreen',
    icon: () => <Ionicons name='location-outline' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'Phone',
    pathname: 'PhoneScreen',
    icon: () => <FontAwesome name='phone' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'Calender',
    pathname: 'CalenderScreen',
    icon: () => <AntDesign name='calendar' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'Wifi',
    pathname: 'WifiScreen',
    icon: () => <FontAwesome name='wifi' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'My QR',
    pathname: 'myqr',
    icon: () => <AntDesign name='qrcode' size={ICON_SIZE_XL} color='white' />,
  },
];

export const OtherTypeList: CreateQRType[] = [
  {
    id: uuidv4(),
    name: 'EAN_8',
    pathname: 'ean-8',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'EAN_13',
    pathname: 'ean-13',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'UPC_E',
    pathname: 'upc-e',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'UPC_A',
    pathname: 'upc-a',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'CODE_39',
    pathname: 'code-39',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'CODE_93',
    pathname: 'code-93',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'CODE_128',
    pathname: 'code-128',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'ITF',
    pathname: 'itf',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'PDF_417',
    pathname: 'pdf-417',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'CODABAR',
    pathname: 'codabar',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'DATA_MATRIX',
    pathname: 'data-matrix',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
  {
    id: uuidv4(),
    name: 'AZTEC',
    pathname: 'aztec',
    icon: () => <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />,
  },
];

export const CreateOptionScreen: React.FC = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create QR</Text>
      <View style={styles.buttonContainer}>
        {CreateQRList.map((item: CreateQRType) => (
          <Button
            key={item.id}
            icon={item.icon}
            style={styles.button}
            onPress={() => navigation.navigate(item.pathname)}
          >
            <Text style={styles.itemName}>{item.name}</Text>
          </Button>
        ))}
      </View>
      <Divider />
      <Text style={styles.types}>Other Types</Text>
      <View style={styles.buttonContainer}>
        {OtherTypeList.map((items: CreateQRType) => (
          <Button key={items.id} icon={items.icon} style={styles.button}>
            <Text style={styles.itemName}>{items.name}</Text>
          </Button>
        ))}
      </View>
    </ScrollView>
  );
};

