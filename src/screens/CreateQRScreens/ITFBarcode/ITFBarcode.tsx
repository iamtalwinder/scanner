import React from 'react';
import { View } from 'react-native';
import { styles } from './ITFBarcode.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';

export const ITFBarcode: React.FC = () => {
  const ITF = '10012345678902';

  return (
    <View style={styles.mainContainer}>
      <OtherTypesInput title='ITF' value={ITF} format='ITF' />
    </View>
  )
};