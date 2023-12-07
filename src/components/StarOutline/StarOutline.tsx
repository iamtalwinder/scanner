import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';
interface FavoritiesIconProps {
  onPress?: () => void;
  isFavorite?: boolean
}

export const FavoritiesIcon: React.FC<FavoritiesIconProps> = ({ onPress, isFavorite }) => {
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