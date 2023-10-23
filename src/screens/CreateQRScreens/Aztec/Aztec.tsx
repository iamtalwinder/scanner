import React from 'react';
import { View } from 'react-native';
import { styles } from './Aztec.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';
import { useThemedStyles } from '../../../hooks';

const AZTEC = 'ABCD1234';

export const Aztec: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <BarcodeTextArea title='AZTEC' value={AZTEC} format='CODE128' />
    </View>
  )
};
