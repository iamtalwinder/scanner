import React from 'react';
import { View } from 'react-native';
import { styles } from './Pdf417.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';

export const Pdf417: React.FC = () => {
  const PDF = 'ABCDE20123451';

  return (
    <View style={styles.mainContainer}>
      <BarcodeTextArea title='PDF_417' value={PDF} format='EAN8' />
    </View>
  )
};
