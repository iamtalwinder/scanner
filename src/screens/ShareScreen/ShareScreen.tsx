import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './ShareScreen.styles';
import { useThemedStyles } from '../../hooks';

export const ShareScreen: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <Text>Share Screen</Text>
    </View>
  );
}



