import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';

type CustomDrawerContentProps = DrawerContentComponentProps;

export const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const currentRouteName = props.state.routes[props.state.index].name;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>{currentRouteName}</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#f5f5f5', // Customize your header background color
    paddingVertical: 20,
    alignItems: 'center',
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
