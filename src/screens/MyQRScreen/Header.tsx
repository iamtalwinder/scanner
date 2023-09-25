import React from 'react';
import { CustomHeader } from '../../components';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { SelectContactComponent, SubmitComponent } from '../../components';
import { View, StyleSheet } from 'react-native';

const Actions: React.FC = () => {
  return (
    <View style={styles.icons}>
      <SelectContactComponent />
      <SubmitComponent />
    </View>
  );
};

export const MyQRHeader: React.FC<DrawerHeaderProps> = (
  props: DrawerHeaderProps
) => {
  return <CustomHeader actions={<Actions />} {...props} />;
};

const styles = StyleSheet.create({
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 20
  }
})
