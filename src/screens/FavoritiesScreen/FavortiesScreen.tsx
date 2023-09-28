import React, { ReactNode } from 'react';
import { getAllFavorite } from '../../context/ScannedItemsSelectors';
import { ScannedItems, useScannedItems } from '../../context/ScannedItemsContext';
import { ScannedItemActionEnum } from '../../context/ScannedItemsContext';
import { CustomCardActionProps } from '../../components/CustomCard/CustomCard';
import { ScannedItemList } from '../../components/ScannedItemList/ScannedItemList';
import { FavoritesMenuComponent } from '../../components/FavoritesCardMenu/FavoritesCardMenu';
import { ScanResultComponent } from '../../components/ScanResult/ScanResult';
export interface MenuItemsType {
  id: string;
  name: string;
  icon: () => ReactNode;
  submenu?: MenuItemsType[];
}

interface MenuItemProps {
  item: ScannedItems;
}

const MenuItem = ({ item }: MenuItemProps) => {

  const { dispatch } = useScannedItems();

  const deleteScannedItemFromFavorites = (id: string) => {
    console.log('id', id)
    dispatch({
      type: ScannedItemActionEnum.REMOVE_FROM_FAVORITE,
      id: id
    })
  }
}

const Actions: React.FC<CustomCardActionProps> = (props: CustomCardActionProps) => {
  return <>
    <ScanResultComponent />
    <FavoritesMenuComponent />
  </>
}
export const FavortieScreen: React.FC = () => {
  const { state } = useScannedItems();
  const allFavorites = getAllFavorite(state);

  return (
    <>
      <ScannedItemList items={allFavorites} actions={(props: CustomCardActionProps) => <Actions {...props} />} />
    </>
  )
}
