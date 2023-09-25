import React from 'react';
import { CustomHeader } from '../../components';
import { DrawerHeaderProps } from '@react-navigation/drawer';

export const SettingsHeader: React.FC<DrawerHeaderProps> = (
  props: DrawerHeaderProps
) => {
  return <CustomHeader {...props} />;
};
