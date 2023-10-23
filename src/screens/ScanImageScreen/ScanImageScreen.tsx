import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './ScanImage.styles';
import { useThemedStyles } from '../../hooks';

export const ScanImageScreen: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <Text>Scan Image1</Text>
    </View>
  );
}
