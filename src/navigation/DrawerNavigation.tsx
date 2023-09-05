import React from 'react';
import {
  DrawerNavigationOptions,
  createDrawerNavigator
} from '@react-navigation/drawer';
import {
  ScanScreen,
  ScanImageScreen,
  FavortiesScreen,
  HistoryScreen,
  MyQRScreen,
  CreateQRScreen,
  SettingsScreen,
  ShareScreen
} from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader';

const Drawer = createDrawerNavigator();

const headerOptions: DrawerNavigationOptions = {
  header: (props) => <CustomHeader {...props}/>
};

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Scan" screenOptions={headerOptions}>
      <Drawer.Screen name="Scan" component={ScanScreen}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons name="scan" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen name="ScanImage" component={ScanImageScreen}
        options={{
          drawerIcon: () => {
            return (
              <AntDesign name="scan1" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen name="Favorties" component={FavortiesScreen}
        options={{
          drawerIcon: () => {
            return (
              <Entypo name="star-outlined" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen name="History" component={HistoryScreen}
        options={{
          drawerIcon: () => {
            return (
              <FontAwesome5 name="history" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen name="My QR" component={MyQRScreen}
        options={{
          drawerIcon: () => {
            return (
              <AntDesign name="qrcode" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen name="Create QR" component={CreateQRScreen}
        options={{
          drawerIcon: () => {
            return (
              <MaterialIcons name="create" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons name="settings-outline" size={24} color="black" />
            );
          },
        }}
      />
      <Drawer.Screen name="Share" component={ShareScreen}
        options={{
          drawerIcon: () => {
            return (
              <Entypo name="share" size={24} color="black" />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};
