import React from 'react';
import { View } from 'react-native';
import { DEFAULT_COLOR, IconEnum, Icons } from '../Icons';
import { ICON_SIZE_XL } from '../Icons';

export const SubmitComponent = () => {
  return (
    <View>
      <Icons name={IconEnum.done} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
    </View>
  );
};
