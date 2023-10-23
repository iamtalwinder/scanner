import React from 'react';
import { View } from 'react-native';
import { styles } from './Pdf417.styles';
import { BarcodeTextArea } from '../../../components/BarcodeTextArea/BarcodeTextArea';
import { useThemedStyles } from '../../../hooks';

const PDF = 'ABCDE20123451';

export const Pdf417: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <BarcodeTextArea title='PDF_417' value={PDF} format='EAN8' />
    </View>
  )
};
