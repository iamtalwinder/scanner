import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation';
import { ScannedItemsProvider } from './src/context/ScannedItemsContext';
import React from 'react';
import 'react-native-get-random-values';

export default function App() {
  return (
    <ScannedItemsProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ScannedItemsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
