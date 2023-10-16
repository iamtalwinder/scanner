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
import { CalendarScreen } from './CalenderScreen/CalenderScreen';
import { TextHeader } from './TextScreen/Header';
import { MyQRScreen } from '../MyQRScreen';
import { EanEightScreen } from './EanEightScreen/EanEightScreen';
import { EanThirteenScreen } from './EanThirteenScreen/EanThirteenScreen';
import { UpcEScreen } from './UpcEScreen/UpcEScreen';
import { UpcAScreen } from './UpcAScreen/UpcAScreen';
import { CodeThreeNineScreen } from './CodeThreeNine/CodeThreeNine';
import { CodeOneTwoEight } from './CodeOneTwoEight/CodeOneTwoEight';
import { ITFBarcode } from './ITFBarcode/ITFBarcode';
import { CodaBar } from './CodaBar/CodaBar';

const Stack = createStackNavigator();

export const CreateQRNavigation: React.FC = () => {

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='CreateOptoinScreen'>
        <Stack.Screen name='CreateOptoinScreen' component={CreateOptionScreen} />
        <Stack.Screen name='URLScreen' component={URLScreen} />
        <Stack.Screen name='ClipboardScreen' component={ClipboardScreen} />
        <Stack.Screen name='TextScreen' component={TextScreen}
          options={{
            header: (props) => <TextHeader {...props} />,
          }} />
        <Stack.Screen name='ContactScreen' component={ContactScreen} />
        <Stack.Screen name='EmailScreen' component={EmailScreen} />
        <Stack.Screen name='SMSScreen' component={SMSScreen} />
        <Stack.Screen name='GeoScreen' component={GeoScreen} />
        <Stack.Screen name='PhoneScreen' component={PhoneScreen} />
        <Stack.Screen name='CalenderScreen' component={CalendarScreen} />
        <Stack.Screen name='WifiScreen' component={WifiScreen} />
        <Stack.Screen name='MyQRScreen' component={MyQRScreen} />
        <Stack.Screen name='EANEightScreen' component={EanEightScreen} />
        <Stack.Screen name='EANThirteenScreen' component={EanThirteenScreen} />
        <Stack.Screen name='UpcEScreen' component={UpcEScreen} />
        <Stack.Screen name='UpcAScreen' component={UpcAScreen} />
        <Stack.Screen name='CodeThreeNineScreen' component={CodeThreeNineScreen} />
        <Stack.Screen name='CodeOneTwoEight' component={CodeOneTwoEight} />
        <Stack.Screen name='ITFBarcode' component={ITFBarcode} />
        <Stack.Screen name='CodaBar' component={CodaBar} />
      </Stack.Navigator>
    </>
  );
}

