import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { createStackNavigator } from '@react-navigation/stack';
import { ClipboardScreen } from './ClipBoard';
import { QRCodeListType } from './CreateQRList';
import { URLScreen } from './URLScreen';
import { TextScreen } from './Text';
import { ContactScreen } from './Contact';
import { EmailScreen } from './Email';
import { SMSScreen } from './Sms';
import { GeoScreen } from './Geo';
import { PhoneScreen } from './Phone';

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
        
        <Stack.Screen name="list" component={QRCodeListType} />
      </Stack.Navigator>
    </>

  );
}

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: 'white',
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#212122',
  },
  card: {
    marginVertical: 5,
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 8,
    borderRadius: 0,
    backgroundColor: '#050301',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 10
  },

});

export default CreateQRScreen;

