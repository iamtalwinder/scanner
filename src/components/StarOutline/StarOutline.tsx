import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';

export const StarOutlineComponent = () => {
  return (
    <View>
      <IconButton
        icon={() =>
          <Icons
            name={IconEnum.starOutline}
            size={ICON_SIZE_XL}
            color={DEFAULT_COLOR}
          />
        }
      />
    </View>
  )
}