import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Ean8.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';

export const Ean8: React.FC = () => {
  const EAN8 = '20123451';

  return (
    <ScrollView style={styles.mainContainer}>
      <OtherTypesInput title='EAN_8' value={EAN8} format='EAN8' />
    </ScrollView>
  )
};
