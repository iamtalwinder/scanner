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
            return <Ionicons name='scan' size={24} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='ScanImage'
        component={ScanImageScreen}
        options={{
          header: (props) => <ScanImageHeader {...props} />,
          drawerIcon: () => {
            return <AntDesign name='scan1' size={24} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavortieScreen}
        options={{
          header: (props) => <FavoriteHeader {...props} />,
          drawerIcon: () => {
            return <Entypo name='star-outlined' size={24} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='History'
        component={HistoryScreen}
        options={{
          header: (props) => <HistoryHeader {...props} />,
          drawerIcon: () => {
            return <FontAwesome5 name='history' size={24} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='My QR'
        component={MyQRScreen}
        options={{
          header: (props) => <MyQRHeader {...props} />,
          drawerIcon: () => {
            return <AntDesign name='qrcode' size={24} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Create QR'
        component={CreateQRNavigation}
        options={{
          header: (props) => <CreateQRHeader {...props}/>,
          drawerIcon: () => {
            return <MaterialIcons name='create' size={24} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          header: (props) => <SettingsHeader {...props}/>,
          drawerIcon: () => {
            return <Ionicons name='settings-outline' size={24} color='white' />;
          },
        }}
      />
      <Drawer.Screen
        name='Share'
        component={ShareScreen}
        options={{
          header: (props) => <ShareHeader {...props}/>,
          drawerIcon: () => {
            return <Entypo name='share' size={24} color='white' />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};
