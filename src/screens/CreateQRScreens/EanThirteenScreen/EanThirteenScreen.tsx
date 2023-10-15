import React from 'react';
import { View } from 'react-native';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { styles } from './EanthirteenScreen.styles';

const EAN13 = '9789352603633';

export const EanThirteenScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <OtherTypesInput title='EAN_13' value={EAN13} format='EAN13'/>
    </View>
  )
}