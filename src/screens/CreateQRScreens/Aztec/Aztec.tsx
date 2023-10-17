import React from 'react';
import { View } from 'react-native';
import { styles } from './Aztec.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';

export const Aztec: React.FC = () => {
  const AZTEC = 'ABCD1234';

  return (
    <View style={styles.mainContainer}>
      <BarcodeTextArea title='AZTEC' value={AZTEC} format='CODE128' />
    </View>
  )
};
