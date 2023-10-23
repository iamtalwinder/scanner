import React from 'react';
import { View } from 'react-native';
import { styles } from './ITFBarcode.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { useThemedStyles } from '../../../hooks';

const ITF = '10012345678902';

export const ITFBarcode: React.FC = () => {
const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <OtherTypesInput title='ITF' value={ITF} format='ITF' />
    </View>
  )
};