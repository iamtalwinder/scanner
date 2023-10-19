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
import { Ean8 } from './Ean8/Ean8';
import { Ean13 } from './Ean13/Ean13';
import { UpcEScreen } from './UpcEScreen/UpcEScreen';
import { UpcAScreen } from './UpcAScreen/UpcAScreen';
import { Code39 } from './Code39/Code39';
import { Code128 } from './Code128/Code128';
import { ITFBarcode } from './ITFBarcode/ITFBarcode';
import { CodaBar } from './CodaBar/CodaBar';
import { Code93 } from './Code93/Code93';

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
        {/* <Stack.Screen name='CalenderScreen' component={CalendarScreen} /> */}
        <Stack.Screen name='WifiScreen' component={WifiScreen} />
        <Stack.Screen name='MyQRScreen' component={MyQRScreen} />
        <Stack.Screen name='EAN8' component={Ean8} />
        <Stack.Screen name='EAN13' component={Ean13} />
        <Stack.Screen name='UpcE' component={UpcEScreen} />
        <Stack.Screen name='UpcA' component={UpcAScreen} />
        <Stack.Screen name='Code39' component={Code39} />
        {/* <Stack.Screen name='CodeNineThree' component={Code93} /> */}
        <Stack.Screen name='Code128' component={Code128} />
        <Stack.Screen name='ITFBarcode' component={ITFBarcode} />
        <Stack.Screen name='CodaBar' component={CodaBar} />
      </Stack.Navigator>
    </>
  );
}

