import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';
interface StarOutlineComponentProps {
  onPress?: () => void;
  isFavorite: boolean
}

export const StarOutlineComponent: React.FC<StarOutlineComponentProps> = ({ onPress, isFavorite }) => {
  const iconName = isFavorite ? IconEnum.star : IconEnum.starOutline;

  return (
    <View>
      <IconButton
        icon={() =>
          <Icons
            name={iconName}
            size={ICON_SIZE_XL}
            color={DEFAULT_COLOR}
          />
        }
        onPress={onPress}
      />
    </View>
  )
}