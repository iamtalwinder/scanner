import React from 'react';
import { ICON_SIZE_L, IconEnum, Icons } from '../Icons';
import { View } from 'react-native';
import { styles } from './Favorites.styles';
import { ScannedItems } from '../../context/ScannedItemsContext';

type FavoritesIconProps = {
  item: ScannedItems
}

export const HistoryFavorites: React.FC<FavoritesIconProps> = (props: FavoritesIconProps) => {
  const { item } = props
  return (
    <>
      <View style={styles.iconContainer}>
        <Icons
          name={item.isFavorite ? IconEnum.star : IconEnum.starOutline}
          size={ICON_SIZE_L}
          color='white'
          // onPress={() => addToFavorites(data.id, data.isFavorite)}
        />
      </View>
    </>
  )
}