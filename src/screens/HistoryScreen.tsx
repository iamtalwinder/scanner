import React from 'react';
import CustomCard from '../components/CustomCard';
import { getAllScannedItems } from '../context/ScannedItemsSelectors';
import { useScannedItems } from '../context/ScannedItemsContext';

export const HistoryScreen: React.FC = () => {
  const { state } = useScannedItems();
  const allScannedItems = getAllScannedItems(state);
  
  return (
    <>
      <CustomCard
        items={allScannedItems}
        screenType='History'
      />
    </>
  )
}

export default HistoryScreen;

