import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

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
    backgroundColor: '#F5FCFF',
  },
  centerText: {
    fontSize: 18,
    padding: 30,
    color: '#777',
  },
});

