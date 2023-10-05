import React from 'react';
import 'react-native-get-random-values';
import { createStackNavigator } from '@react-navigation/stack';
import { ClipboardScreen } from './ClipBoardScreen/ClipBoardScreen';
import { CreateOptionScreen } from './CreateOptionScreen/CreateOptionScreen';
import { URLScreen } from './UrlScreen/URLScreen';
import { TextScreen } from './TextScreen/TextScreen';
import { ContactScreen } from './ContactScreen/ContactScreen';
import { EmailScreen } from './EmailScreen/EmailScreen';
import { SMSScreen } from './SmsScreen/SmsScreen';
import { GeoScreen } from './GeoScreen/GeoScreen';
import { PhoneScreen } from './PhoneScreen/PhoneScreen';
import { WifiScreen } from './WifiScreen/WifiScreen';

const Stack = createStackNavigator();

export const CreateQRNavigation: React.FC = () => {

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='CreateOptoinScreen'>
        <Stack.Screen name='CreateOptoinScreen' component={CreateOptionScreen} />
        <Stack.Screen name='URLScreen' component={URLScreen} />
        <Stack.Screen name='ClipboardScreen' component={ClipboardScreen} />
        <Stack.Screen name='TextScreen' component={TextScreen} />
        <Stack.Screen name='ContactScreen' component={ContactScreen} />
        <Stack.Screen name='EmailScreen' component={EmailScreen} />
        <Stack.Screen name='SMSScreen' component={SMSScreen} />
        <Stack.Screen name='GeoScreen' component={GeoScreen} />
        <Stack.Screen name='PhoneScreen' component={PhoneScreen} />
        <Stack.Screen name='WifiScreen' component={WifiScreen} />
      </Stack.Navigator>
    </>

  );
}

