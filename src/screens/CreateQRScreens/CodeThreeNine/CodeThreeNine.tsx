import React from 'react';
import { View } from 'react-native';
import { styles } from './CodeThreeNine.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';

const CODE39 = 'CODE-39';

export const CodeThreeNineScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <BarcodeTextArea title='CODE_39' value={CODE39} format='CODE39' />
    </View>
  )
}