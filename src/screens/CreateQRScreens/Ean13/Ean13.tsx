import React from 'react';
import { ScrollView } from 'react-native';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { styles } from './Ean13.styles';

const EAN13 = '9789352603633';

export const Ean13: React.FC = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <OtherTypesInput title='EAN_13' value={EAN13} format='EAN13' />
    </ScrollView>
  )
}