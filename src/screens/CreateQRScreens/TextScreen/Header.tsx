import React from 'react';
import { CustomHeader, SubmitComponent } from '../../../components';
import { StackHeaderProps } from '@react-navigation/stack';

const Actions: React.FC = () => {
  return (
    <>
      <SubmitComponent />
    </>
  );
};

export const TextHeader: React.FC<StackHeaderProps> = (
  props: StackHeaderProps
) => {
  return <CustomHeader actions={<Actions />} {...props} />;
};
