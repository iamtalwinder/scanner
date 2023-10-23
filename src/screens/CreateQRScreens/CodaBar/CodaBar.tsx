import React from 'react';
import { View } from 'react-native';
import { styles } from './CodaBar.styles';
import { OtherTypesInput } from '../../../components/OtherTypes/OtherTypesInput';
import { useThemedStyles } from '../../../hooks';

const CODABAR = '123456789';

export const CodaBar: React.FC = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.mainContainer}>
      <OtherTypesInput title='CODABAR' value={CODABAR} format='codabar' />
    </View>
  )
};
