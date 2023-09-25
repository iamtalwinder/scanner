import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { styles } from './CustomHeader.styles';


type CustomHeaderProps = DrawerHeaderProps & {
  actions?: ReactNode
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({ route, actions, navigation }: CustomHeaderProps) => {
  const screenName = route.name;

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.leftComponent}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      </View>
      <Appbar.Content title={screenName} titleStyle={styles.title} style={styles.centerComponent} />
      <View style={styles.rightComponent}>
        {actions && actions}
      </View>

    </Appbar.Header>
  );
};


