import React from 'react';
import { View } from 'react-native';
import { styles } from './CodeThreeNine.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';

const CODE39 = 'CODE-39';

export const CodeThreeNineScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <OtherTypesInput title='CODE_39' value={CODE39} format='CODE39' />
    </View>
  )
}