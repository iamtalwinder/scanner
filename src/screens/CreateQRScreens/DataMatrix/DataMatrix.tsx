import React from 'react';
import { View } from 'react-native';
import { styles } from './DataMatrix.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';
import { useThemedStyles } from '../../../hooks';

const DataMatrixCode = 'ABCD7561234';

export const DataMatrix: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <BarcodeTextArea title='DATA_MATRIX' value={DataMatrixCode} format='CODE128' />
    </View>
  )
};
