import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScanScreen } from './ScanScreen';
import { ScanResult } from './ScanResult/ScanResult';

const Stack = createStackNavigator();

export const ScanNavigation: React.FC = () => {

  return (
    <>
     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ScanResult'>
      <Stack.Screen name='ScanResult' component={ScanResult} />
      <Stack.Screen name='ScanScreen' component={ScanScreen} />

     </Stack.Navigator>
    </>
  )
}