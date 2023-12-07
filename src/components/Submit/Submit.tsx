import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { DEFAULT_COLOR, IconEnum, Icons } from '../Icons';
import { ICON_SIZE_XL } from '../Icons';
export interface SubmitProps {
  onPress?: () => void
}

export const SubmitComponent = (props: SubmitProps) => {
  const { onPress } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>
          <Icons name={IconEnum.done} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};
