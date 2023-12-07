import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Ean8.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { useThemedStyles } from '../../../hooks';

const EAN8 = '20123451';

export const Ean8: React.FC = () => {
const style = useThemedStyles(styles);

  return (
    <ScrollView style={style.mainContainer}>
      <OtherTypesInput title='EAN_8' value={EAN8} format='EAN8' />
    </ScrollView>
  )
};
