import { ScannedItems, State } from './ScannedItemsContext';

export const getAllScannedItems = (state: State): ScannedItems[] => {
  return state.scannedItems;
};

export const getAllFavorite = (state: State): ScannedItems[] => {
  return state.scannedItems.filter((item) => item.isFavorite);
};

