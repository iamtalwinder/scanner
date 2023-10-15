import React from 'react';
import { View } from 'react-native';
import { styles } from './EanEightScreen.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';

export const EanEightScreen: React.FC = () => {
  const EAN8 = '20123451';

  return (
    <View style={styles.mainContainer}>
      <OtherTypesInput title='EAN_8' value={EAN8} format='EAN8'/>
    </View>
  )

};
