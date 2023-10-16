import React from 'react';
import { View } from 'react-native';
import { styles } from './CodaBar.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';

export const CodaBar: React.FC = () => {
  const CODABAR = '123456789';

  return (
    <View style={styles.mainContainer}>
      <OtherTypesInput title='CODABAR' value={CODABAR} format='codabar' />
    </View>
  )
};
