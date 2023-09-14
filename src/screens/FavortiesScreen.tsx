import React from 'react';
import CustomCard from '../components/CustomCard';
import { getAllFavorite } from '../context/ScannedItemsSelectors';
import { useScannedItems } from '../context/ScannedItemsContext';

const FavortieScreen = () => {
  const { state } = useScannedItems();
  const allFavorites = getAllFavorite(state);

  return (
    <>
      <CustomCard
        items={allFavorites}
        screenType='Favorite'
      />
    </>
  )
}
export default FavortieScreen;