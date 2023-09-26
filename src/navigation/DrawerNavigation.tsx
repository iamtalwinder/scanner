import React from 'react';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  ScanScreen,
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
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';
import { ICON_SIZE_XL } from '../components/Icons';

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
        component={ScanScreen}
        options={{
          header: (props) => <ScanHeader {...props} />,
          drawerIcon: () => {
            return <Ionicons name='scan' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='ScanImage'
        component={ScanImageScreen}
        options={{
          header: (props) => <ScanImageHeader {...props} />,
          drawerIcon: () => {
            return <AntDesign name='scan1' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavortieScreen}
        options={{
          header: (props) => <FavoriteHeader {...props} />,
          drawerIcon: () => {
            return <Entypo name='star-outlined' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='History'
        component={HistoryScreen}
        options={{
          header: (props) => <HistoryHeader {...props} />,
          drawerIcon: () => {
            return <FontAwesome5 name='history' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='My QR'
        component={MyQRScreen}
        options={{
          header: (props) => <MyQRHeader {...props} />,
          drawerIcon: () => {
            return <AntDesign name='qrcode' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Create QR'
        component={CreateQRNavigation}
        options={{
          header: (props) => <CreateQRHeader {...props}/>,
          drawerIcon: () => {
            return <MaterialIcons name='create' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          header: (props) => <SettingsHeader {...props}/>,
          drawerIcon: () => {
            return <Ionicons name='settings-outline' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Share'
        component={ShareScreen}
        options={{
          header: (props) => <ShareHeader {...props}/>,
          drawerIcon: () => {
            return <Entypo name='share' size={ICON_SIZE_XL} color='white' />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};
