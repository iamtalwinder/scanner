import React from 'react';
import {
  CustomHeader,
  FilterMenuComponent,
  ImportExportMenuComponent,
} from '../../components';
import { DrawerHeaderProps } from '@react-navigation/drawer';

const Actions: React.FC = () => {
  return (
    <>
      <FilterMenuComponent />
      <ImportExportMenuComponent />
    </>
  );
};

export const HistoryHeader: React.FC<DrawerHeaderProps> = (
  props: DrawerHeaderProps
) => {
  return <CustomHeader actions={<Actions />} {...props} />;
};
