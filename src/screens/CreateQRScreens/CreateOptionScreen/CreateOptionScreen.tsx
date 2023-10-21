import React, { ReactNode } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { Button } from 'react-native-paper';
import { styles } from './CreateOptionScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_L, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { useThemedStyles } from '../../../hooks';

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
    icon: () => <Icons name={IconEnum.clipboard} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'URL',
    pathname: 'URLScreen',
    icon: () => <Icons name={IconEnum.link2} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'Text',
    pathname: 'TextScreen',
    icon: () => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'Contact',
    pathname: 'ContactScreen',
    icon: () => <Icons name={IconEnum.contacts} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'Email',
    pathname: 'EmailScreen',
    icon: () => <Icons name={IconEnum.email} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'SMS',
    pathname: 'SMSScreen',
    icon: () => <Icons name={IconEnum.sms} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'Geo',
    pathname: 'GeoScreen',
    icon: () => <Icons name={IconEnum.locationOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'Phone',
    pathname: 'PhoneScreen',
    icon: () => <Icons name={IconEnum.phone} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
  // {
  //   id: uuidv4(),
  //   name: 'Calender',
  //   pathname: 'CalenderScreen',
  //   icon: () => <Icons name={IconEnum.calenderSharp} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  // },
  {
    id: uuidv4(),
    name: 'Wifi',
    pathname: 'WifiScreen',
    icon: () => <Icons name={IconEnum.wifi} size={ICON_SIZE_L} color={DEFAULT_COLOR} />
  },
  {
    id: uuidv4(),
    name: 'My QR',
    pathname: 'MyQRScreen',
    icon: () => <Icons name={IconEnum.qrcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
  },
];

export const OtherTypeList: CreateQRType[] = [
  {
    id: uuidv4(),
    name: 'EAN_8',
    pathname: 'EAN8',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  {
    id: uuidv4(),
    name: 'EAN_13',
    pathname: 'EAN13',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  {
    id: uuidv4(),
    name: 'UPC_E',
    pathname: 'UpcE',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  {
    id: uuidv4(),
    name: 'UPC_A',
    pathname: 'UpcA',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  {
    id: uuidv4(),
    name: 'CODE_39',
    pathname: 'Code39',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  // {
  //   id: uuidv4(),
  //   name: 'CODE_93',
  //   pathname: 'CodeNineThree',
  //   icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  // },
  {
    id: uuidv4(),
    name: 'CODE_128',
    pathname: 'Code128',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  {
    id: uuidv4(),
    name: 'ITF',
    pathname: 'ITFBarcode',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  // {
  //   id: uuidv4(),
  //   name: 'PDF_417',
  //   pathname: 'pdf-417',
  //   icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  // },
  {
    id: uuidv4(),
    name: 'CODABAR',
    pathname: 'CodaBar',
    icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  },
  // {
  //   id: uuidv4(),
  //   name: 'DATA_MATRIX',
  //   pathname: 'data-matrix',
  //   icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'AZTEC',
  //   pathname: 'aztec',
  //   icon: () => <Icons name={IconEnum.barcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />,
  // },
];

export const CreateOptionScreen: React.FC = ({ navigation }: any) => {
  const style = useThemedStyles(styles);

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>Create QR</Text>
      <View>
        {CreateQRList.map((item: CreateQRType) => (
          <Button
            key={item.id}
            icon={item.icon}
            style={style.button}
            onPress={() => navigation.navigate(item.pathname)}
          >
            <Text style={style.itemName}>{item.name}</Text>
          </Button>
        ))}
      </View>
      <Text style={style.types}>Other Types</Text>
      <View>
        {OtherTypeList.map((items: CreateQRType) => (
          <Button
            key={items.id}
            icon={items.icon}
            style={style.button}
            onPress={() => navigation.navigate(items.pathname)}
          >
            <Text style={style.itemName}>{items.name}</Text>
          </Button>
        ))}
      </View>
    </ScrollView>
  );
};

