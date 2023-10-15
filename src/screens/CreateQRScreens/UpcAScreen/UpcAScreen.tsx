import React from 'react';
import { View } from 'react-native';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { styles } from './UpcAScreen.styles';

const UPCA = '123456789012';

export const UpcAScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
    <OtherTypesInput title='UPCA' value={UPCA} format='UPC'/>
  </View>
  )
}