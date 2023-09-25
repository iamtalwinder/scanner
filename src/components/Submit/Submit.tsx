import React from 'react';
import { View } from 'react-native';
import { IconEnum, Icons } from '../Icons';

export const SubmitComponent = () => {
  return (
    <View>
      <Icons name={IconEnum.done} size={24} color='white' />
    </View>
  );
};
