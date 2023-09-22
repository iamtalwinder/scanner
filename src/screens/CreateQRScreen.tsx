import React from 'react';
import 'react-native-get-random-values';
import { createStackNavigator } from '@react-navigation/stack';
import { ClipboardScreen } from './CreateQRScreens/ClipBoard';
import { QRCodeListType } from './CreateQRScreens/CreateQRList';
import { URLScreen } from './CreateQRScreens/URLScreen';
import { TextScreen } from './CreateQRScreens/Text';
import { ContactScreen } from './CreateQRScreens/Contact';
import { EmailScreen } from './CreateQRScreens/Email';
import { SMSScreen } from './CreateQRScreens/Sms';
import { GeoScreen } from './CreateQRScreens/Geo';
import { PhoneScreen } from './CreateQRScreens/Phone';

const Stack = createStackNavigator();

export const CreateQRScreen: React.FC = () => {

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="list">
        <Stack.Screen name="URLScreen" component={URLScreen} />
        <Stack.Screen name="ClipboardScreen" component={ClipboardScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
        <Stack.Screen name="SMSScreen" component={SMSScreen} />
        <Stack.Screen name="GeoScreen" component={GeoScreen} />
        <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
        <Stack.Screen name="WifiScreen" component={PhoneScreen} />

        <Stack.Screen name="list" component={QRCodeListType} />
      </Stack.Navigator>
    </>

  );
}

export default CreateQRScreen;

