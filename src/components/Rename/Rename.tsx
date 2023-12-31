import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';

interface RenameComponentProps {
  onPress?: () => void;
}

export const RenameComponent: React.FC<RenameComponentProps> = ({ onPress }) => {
  return (
    <View>
      <IconButton
        icon={() =>
          <Icons
            name={IconEnum.rename}
            size={ICON_SIZE_XL}
            color={DEFAULT_COLOR}
          />
        }
        onPress={onPress}
      />
    </View>
  )
}