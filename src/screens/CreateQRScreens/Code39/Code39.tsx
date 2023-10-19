import React from 'react';
import { View } from 'react-native';
import { styles } from './Code39.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';

const CODE39 = 'CODE-39';

export const Code39: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <BarcodeTextArea title='CODE_39' value={CODE39} format='CODE39' />
    </View>
  )
}