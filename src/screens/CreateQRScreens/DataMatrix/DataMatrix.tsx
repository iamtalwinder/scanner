import React from 'react';
import { View } from 'react-native';
import { styles } from './DataMatrix.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';

export const DataMatrix: React.FC = () => {
  const DataMatrix = 'ABCD7561234';

  return (
    <View style={styles.mainContainer}>
      <BarcodeTextArea title='DATA_MATRIX' value={DataMatrix} format='CODE128' />
    </View>
  )
};
