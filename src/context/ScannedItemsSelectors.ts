import { ScaleTransform } from 'react-native';
import { ScannedItemQRCodeTypeEnum, ScannedItems, State } from './ScannedItemsContext';

export const getAllScannedItems = (state: State): ScannedItems[] => {
  return state.scannedItems;
};

export const getAllFavorite = (state: State): ScannedItems[] => {
  return state.scannedItems.filter((item) => item.isFavorite);
};

export const getFilteredFavoriteFiltersItems = (state: State): ScannedItems[] => {
  const favorites = getAllFavorite(state);

  if (!state.selectedFavoritesFilters || !state.selectedFavoritesFilters.length) {
    return favorites;
  }

  return favorites.filter((item) => state.selectedFavoritesFilters.includes(item.type));
}
