import React from 'react';
import { ScrollView, View } from 'react-native';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { styles } from './UpcAScreen.styles';
import { useThemedStyles } from '../../../hooks';

const UPCA = '123456789012';

export const UpcAScreen: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <ScrollView style={style.mainContainer}>
      <OtherTypesInput title='UPC_A' value={UPCA} format='UPC' />
    </ScrollView>
  )
}