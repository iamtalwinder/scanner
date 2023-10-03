import React from 'react';
import { getAllScannedItems } from '../../context/ScannedItemsSelectors';
import { ScannedItems, useScannedItems } from '../../context/ScannedItemsContext';
import 'react-native-get-random-values';
import { HistoryMenuComponent } from '../../components/HistoryCardMenu/HistoryCardMenu';
import { ScannedItemList } from '../../components/ScannedItemList/ScannedItemList';
import { HistoryFavorites } from '../../components/HistoryFavorite/HistoryFavorites';
import { CustomCardActionProps } from '../../components/CustomCard/CustomCard';

interface MenuItemProps {
  item: ScannedItems;
}

const Actions: React.FC<CustomCardActionProps> = ({item}: CustomCardActionProps) => {
  // const { state, dispatch } = useScannedItems();

  // const addToFavorites = (id: string, isFavorite: boolean) => {
  //   if (!isFavorite) {
  //     dispatch({
  //       type: ScannedItemActionEnum.ADD_TO_FAVORITE,
  //       id: id,
  //     });
  //   } else {
  //     dispatch({
  //       type: ScannedItemActionEnum.REMOVE_FROM_FAVORITE,
  //       id: id,
  //     });
  //   }
  // };

  return <>
    <HistoryFavorites item={item}/>
    <HistoryMenuComponent />
  </>
}

export const HistoryScreen: React.FC = () => {
  const { state } = useScannedItems();
  const allScannedItems = getAllScannedItems(state);

  return (
    <>
      <ScannedItemList items={allScannedItems} actions={(props: MenuItemProps) => <Actions {...props}/>} />
    </>
  )
}

