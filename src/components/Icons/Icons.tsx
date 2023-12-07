import React from 'react';

import {
  Ionicons,
  MaterialIcons,
  Feather,
  Fontisto,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { IconLibEnum } from './IconLib.enum';
import { IconEnum } from './Icon.enum';
import { ICON_MAPPING } from './IconMapping';

export const DEFAULT_SIZE = 20;
export const DEFAULT_COLOR = 'white';
interface IconProps {
  name: IconEnum;
  size?: number;
  color?: string;
}

type IconComponentType =
  | typeof Ionicons
  | typeof MaterialIcons
  | typeof Feather
  | typeof Fontisto
  | typeof FontAwesome
  | typeof AntDesign
  | typeof MaterialCommunityIcons;

const getIconComponent = (lib: IconLibEnum): IconComponentType => {
  switch (lib) {
    case IconLibEnum.AntDesign:
      return AntDesign;

    case IconLibEnum.MaterialIcons:
      return MaterialIcons;

    case IconLibEnum.Feather:
      return Feather;

    case IconLibEnum.Fontisto:
      return Fontisto;

    case IconLibEnum.FontAwesome:
      return FontAwesome;

    case IconLibEnum.Ionicons:
      return Ionicons;

    case IconLibEnum.MaterialCommunityIcons:
      return MaterialCommunityIcons;

    default:
      return MaterialCommunityIcons;
  }
};

export const Icons: React.FC<IconProps> = ({ name, size = DEFAULT_SIZE, color = DEFAULT_COLOR }: IconProps) => {
  const iconLib: IconLibEnum = ICON_MAPPING[name];

  const IconComponent: IconComponentType = getIconComponent(iconLib);
  return <IconComponent name={name as any} size={size} color={color} />;
};
