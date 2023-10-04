import React from 'react';
import { DEFAULT_COLOR, ICON_SIZE_L, IconEnum, Icons } from '../Icons';
import { View } from 'react-native';
import { styles } from './CardBars.styles';

type ScanResultIconProps = {}

export const CardBars: React.FC<ScanResultIconProps> = (props: ScanResultIconProps) => {
  return (
    <>
      <View style={styles.iconContainer}>
        <Icons
          name={IconEnum.bars}
          size={ICON_SIZE_L}
          color={DEFAULT_COLOR}
        // onPress={() => addToFavorites(data.id, data.isFavorite)}
        />
      </View>
    </>
  )
}