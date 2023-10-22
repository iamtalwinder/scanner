import React from 'react';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  QRCodeScannerScreen,
  ScanImageScreen,
  ScanImageHeader,
  HistoryScreen,
  HistoryHeader,
  MyQRScreen,
  MyQRHeader,
  CreateQRNavigation,
  CreateQRHeader,
  SettingsScreen,
  ShareScreen,
  ScanHeader,
  FavortieScreen,
  FavoriteHeader,
  SettingsHeader,
  ShareHeader,
} from '../screens';

import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../components/Icons';
import { ScanNavigation } from '../screens/ScanScreen/ScanNavigation';

const Drawer = createDrawerNavigator();

const headerOptions: DrawerNavigationOptions = {
  drawerStyle: {
    backgroundColor: '#333333',
  },
  drawerLabelStyle: {
    color: 'white',
  },
};

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName='Scan' screenOptions={headerOptions}>
      <Drawer.Screen
        name='Scan'
        component={ScanNavigation}
        options={{
          header: (props) => <ScanHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.scan} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      />
      <Drawer.Screen
        name='ScanImage'
        component={ScanImageScreen}
        options={{
          header: (props) => <ScanImageHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.scan1} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavortieScreen}
        options={{
          header: (props) => <FavoriteHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.starOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      />
      <Drawer.Screen
        name='History'
        component={HistoryScreen}
        options={{
          header: (props) => <HistoryHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.history} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      />
      <Drawer.Screen
        name='My QR'
        component={MyQRScreen}
        options={{
          header: (props) => <MyQRHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.qrcode} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      />
      <Drawer.Screen
        name='Create'
        component={CreateQRNavigation}
        options={{
          header: (props) => <CreateQRHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.create} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      />
      {/* <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          header: (props) => <SettingsHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.settingOutline} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      /> */}
      <Drawer.Screen
        name='Share'
        component={ShareScreen}
        options={{
          header: (props) => <ShareHeader {...props} />,
          drawerIcon: () => {
            return <Icons name={IconEnum.share} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          },
        }}
      />
    </Drawer.Navigator>
  );
};
