import React from 'react';
import { CustomHeader } from '../../../components';
import { DrawerHeaderProps } from '@react-navigation/drawer';

export const ScanHeader: React.FC<DrawerHeaderProps> = (
  props: DrawerHeaderProps
) => {
  return <CustomHeader {...props} />;
};
