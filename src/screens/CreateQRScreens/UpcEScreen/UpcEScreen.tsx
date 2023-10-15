import React from 'react';
import { View } from 'react-native';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { styles } from './UpcEscreen.styles';

const UPCE = '12345670'

export const UpcEScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
    <OtherTypesInput title='UPCE' value={UPCE} format='UPCE'/>
  </View>
  )
}