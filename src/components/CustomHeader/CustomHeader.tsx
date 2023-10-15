import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { styles } from './CustomHeader.styles';
import { StackHeaderProps } from '@react-navigation/stack';

// type CustomHeaderProps = DrawerHeaderProps {
//   actions?: ReactNode
// }

type CommonProps = {
  actions?: ReactNode;
};

type DrawerCustomHeaderProps = DrawerHeaderProps & CommonProps;
type StackCustomHeaderProps = StackHeaderProps & CommonProps;

type CustomHeaderProps = DrawerCustomHeaderProps | StackCustomHeaderProps;

export const CustomHeader: React.FC<CustomHeaderProps> = ({ route, actions, navigation }: CustomHeaderProps) => {
  const screenName = route.name;
  const isDrawerNavigation = ('openDrawer' in navigation);

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.leftComponent}>
        {isDrawerNavigation && (
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        )}
      </View>
      <Appbar.Content title={screenName} titleStyle={styles.title} style={styles.centerComponent} />
      <View style={styles.rightComponent}>
        {actions && actions}
      </View>
    </Appbar.Header>
  );
};


