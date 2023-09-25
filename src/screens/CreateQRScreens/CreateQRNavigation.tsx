import React from 'react';
import 'react-native-get-random-values';
import { createStackNavigator } from '@react-navigation/stack';
import { ClipboardScreen } from './ClipBoardScreen';
import { CreateOptionScreen } from './CreateOptionScreen';
import { URLScreen } from './URLScreen';
import { TextScreen } from './TextScreen';
import { ContactScreen } from './ContactScreen';
import { EmailScreen } from './EmailScreen';
import { SMSScreen } from './SmsScreen';
import { GeoScreen } from './GeoScreen';
import { PhoneScreen } from './PhoneScreen';

const Stack = createStackNavigator();

export const CreateQRNavigation: React.FC = () => {

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='CreateOptoinScreen'>
        <Stack.Screen name='CreateOptoinScreen' component={CreateOptionScreen} />
        <Stack.Screen name='URLScreen' component={URLScreen}/>
        <Stack.Screen name='ClipboardScreen' component={ClipboardScreen} />
        <Stack.Screen name='TextScreen' component={TextScreen} />
        <Stack.Screen name='ContactScreen' component={ContactScreen} />
        <Stack.Screen name='EmailScreen' component={EmailScreen} />
        <Stack.Screen name='SMSScreen' component={SMSScreen} />
        <Stack.Screen name='GeoScreen' component={GeoScreen} />
        <Stack.Screen name='PhoneScreen' component={PhoneScreen} />
        <Stack.Screen name='WifiScreen' component={PhoneScreen} />
      </Stack.Navigator>
    </>

  );
}

