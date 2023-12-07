import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Settings.styles';
import { useThemedStyles } from '../../hooks';

export const SettingsScreen: React.FC = () => {
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}
