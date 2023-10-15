import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScanResult } from './ScanResult/ScanResult';
import { QRCodeScannerScreen } from './Scan/ScanScreen';
const Stack = createStackNavigator();

export const ScanNavigation: React.FC = () => {

  return (
    <>
     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ScanScreen'>
      <Stack.Screen name='ScanResult' component={ScanResult} />
      <Stack.Screen name='ScanScreen' component={QRCodeScannerScreen} />
     </Stack.Navigator>
    </>
  )
}