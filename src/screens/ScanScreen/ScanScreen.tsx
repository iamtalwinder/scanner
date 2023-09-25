import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ScanScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Scan ScanScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212122'
  }
});

