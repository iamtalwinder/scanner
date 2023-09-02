import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </PaperProvider>
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
