import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { ICON_SIZE_L, IconEnum, Icons } from '../Icons';

export const RenameComponent = () => {
  return (
    <View>
      <IconButton
        icon={() =>
          <Icons
            name={IconEnum.rename}
            size={ICON_SIZE_L}
            color='white'
          />
        }
      />
    </View>
  )
}