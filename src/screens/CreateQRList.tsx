import React, { ReactNode } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { FontAwesome5, Feather, Entypo, MaterialIcons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Button, Card, Divider } from 'react-native-paper';
import { URLScreen } from './URLScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ClipboardScreen } from './ClipBoard'

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
    icon: () => <FontAwesome5 name="clipboard" size={24} color="white" />,
  },
  {
    id: uuidv4(),
    name: 'URL',
    pathname: 'URLScreen',
    icon: () => <Feather name="link-2" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'Text',
    pathname: 'TextScreen',
    icon: () => <Entypo name="text" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'Contact',
    pathname: 'ContactScreen',
    icon: () => <AntDesign name="contacts" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: "Email",
    pathname: 'EmailScreen',
    icon: () => <MaterialIcons name="email" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'SMS',
    pathname: 'SMSScreen',
    icon: () => <MaterialIcons name="sms" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'Geo',
    pathname: 'GeoScreen',
    icon: () => <Ionicons name="location-outline" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'Phone',
    pathname: 'PhoneScreen',
    icon: () => <FontAwesome name="phone" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'Calender',
    pathname: 'calender',
    icon: () => <AntDesign name="calendar" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'Wifi',
    pathname: 'wifi',
    icon: () => <FontAwesome name="wifi" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'My QR',
    pathname: 'myqr',
    icon: () => <AntDesign name="qrcode" size={24} color="white" />
  },
]

export const OtherTypeList: CreateQRType[] = [
  {
    id: uuidv4(),
    name: 'EAN_8',
    pathname: 'ean-8',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'EAN_13',
    pathname: 'ean-13',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'UPC_E',
    pathname: 'upc-e',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'UPC_A',
    pathname: 'upc-a',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'CODE_39',
    pathname: 'code-39',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'CODE_93',
    pathname: 'code-93',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'CODE_128',
    pathname: 'code-128',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'ITF',
    pathname: 'itf',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'PDF_417',
    pathname: 'pdf-417',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'CODABAR',
    pathname: 'codabar',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'DATA_MATRIX',
    pathname: 'data-matrix',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  },
  {
    id: uuidv4(),
    name: 'AZTEC',
    pathname: 'aztec',
    icon: () => <FontAwesome name="barcode" size={24} color="white" />
  }
]

export const QRCodeListType = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create QR</Text>
      {
        CreateQRList.map((item: CreateQRType) => (
          <Button
            key={item.id}
            icon={item.icon}
            style={styles.button}
            onPress={() => navigation.navigate(item.pathname)}
          >
            {item.name}
          </Button>
        ))
      }
      <Divider />
      <Text style={styles.title}>Other Types</Text>
      {
        OtherTypeList.map((items: CreateQRType) => (
          <Button
            key={items.id}
            icon={items.icon}
            style={styles.button}
          >
            {items.name}
          </Button>
        ))
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  textarea: {
    backgroundColor: 'white',
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#212122',
  },
  button: {
    marginVertical: 5,
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 8,
    borderRadius: 0,
    backgroundColor: '#050301',
    alignItems: 'flex-start',
    gap: 10,
    display: 'flex',
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 10
  },

});
