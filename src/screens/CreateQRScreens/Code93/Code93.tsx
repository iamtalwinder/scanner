import React from 'react';
import { View } from 'react-native';
import { styles } from './Code93.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';
import { useThemedStyles } from '../../../hooks';

const CODE93 = 'ABCD1234';

export const Code93: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <BarcodeTextArea title='CODE_93' value={CODE93} format='CODE128' />
    </View>
  )
};
