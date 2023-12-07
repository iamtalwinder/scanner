import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './ScanScreen.styles';
import { useThemedStyles } from '../../../hooks';

export const QRCodeScannerScreen: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <Text>Scan screen</Text>
    </View>
  );
}



