import React from 'react';
import { View } from 'react-native';
import { styles } from './Code128.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';
import { useThemedStyles } from '../../../hooks';

const CODE128 = 'ABC-abc-1234';

export const Code128: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <BarcodeTextArea title='CODE_128' value={CODE128} format='CODE128' />
    </View>
  )
};
