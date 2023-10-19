import React from 'react';
import { View } from 'react-native';
import { styles } from './Code128.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';

export const Code128: React.FC = () => {
  const CODE128 = 'ABC-abc-1234';

  return (
    <View style={styles.mainContainer}>
      <BarcodeTextArea title='CODE_128' value={CODE128} format='CODE128' />
    </View>
  )
};
