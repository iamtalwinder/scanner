import React from 'react';
import { ScrollView, View } from 'react-native';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { styles } from './UpcAScreen.styles';

const UPCA = '123456789012';

export const UpcAScreen: React.FC = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <OtherTypesInput title='UPC_A' value={UPCA} format='UPC' />
    </ScrollView>
  )
}