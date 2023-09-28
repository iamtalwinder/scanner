import React, { ReactNode } from 'react';
import { getAllScannedItems } from '../../context/ScannedItemsSelectors';
import { ScannedItems, useScannedItems } from '../../context/ScannedItemsContext';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { MaterialIcons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScannedItemActionEnum } from '../../context/ScannedItemsContext';
import { Menu } from 'react-native-paper';
import { ICON_SIZE_L } from '../../components/Icons';
import { HistoryMenuComponent } from '../../components/HistoryCardMenu/HistoryCardMenu';
import { ScannedItemList } from '../../components/ScannedItemList/ScannedItemList';
import { HistoryFavorites } from '../../components/HistoryFavorite/HistoryFavorites';
import { CustomCardActionProps } from '../../components/CustomCard/CustomCard';

interface MenuItemsType {
  id: string;
  name: string;
  icon: () => ReactNode;
  submenu?: MenuItemsType[];
}

interface MenuItemProps {
  item: ScannedItems;
}

export const MenuItem = ({ item }: MenuItemProps) => {

  const { dispatch } = useScannedItems();

  const deleteScannedItemFromFavorites = (id: string) => {
    dispatch({
      type: ScannedItemActionEnum.REMOVE_SCANNED_ITEM,
      id: id
    })
  }
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

