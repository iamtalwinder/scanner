import React from 'react';
import { ICON_SIZE_L, IconEnum, Icons } from '../Icons';
import { View } from 'react-native';
import { styles } from './ScanResult.styles';

type ScanResultIconProps = {
}

export const ScanResultComponent: React.FC<ScanResultIconProps> = (props: ScanResultIconProps) => {
  return (
    <>
      <View style={styles.iconContainer}>
        <Icons
          name={IconEnum.bars}
          size={ICON_SIZE_L}
          color='white'
        // onPress={() => addToFavorites(data.id, data.isFavorite)}
        />
      </View>
    </>
  )
}