import React from 'react';
import { View } from 'react-native';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { styles } from './UpcEscreen.styles';
import { useThemedStyles } from '../../../hooks';

const UPCE = '12345670'

export const UpcEScreen: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <OtherTypesInput title='UPC_E' value={UPCE} format='UPCE' />
    </View>
  )
}