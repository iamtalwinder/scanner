import React from 'react';
import { View } from 'react-native';
import { styles } from './CodeNineThree.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';

export const CodeNineThree: React.FC = () => {
  const CODE93 = 'ABCD1234';

  return (
    <View style={styles.mainContainer}>
      <BarcodeTextArea title='CODE_93' value={CODE93} format='CODE128' />
    </View>
  )
};
