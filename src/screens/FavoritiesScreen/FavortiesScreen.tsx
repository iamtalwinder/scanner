import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import React, { ReactNode } from 'react';
import CustomCard from '../../components/CustomCard';
import { getAllFavorite } from '../../context/ScannedItemsSelectors';
import { ScannedItems, useScannedItems } from '../../context/ScannedItemsContext';
import { MaterialIcons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScannedItemActionEnum } from '../../context/ScannedItemsContext';
import { Menu } from 'react-native-paper';
import { ICON_SIZE_L } from '../../components/Icons';
export interface MenuItemsType {
  id: string;
  name: string;
  icon: () => ReactNode;
  submenu?: MenuItemsType[];
}

export const MenuIListItems: MenuItemsType[] = [
  {
    id: uuidv4(), name: 'Delete', icon: () => <MaterialIcons name='delete-outline' size={ICON_SIZE_L} color='white' />,
    submenu: [
      { id: uuidv4(), name: 'Share', icon: () => <Entypo name='share' size={ICON_SIZE_L} color='white' /> },
      { id: uuidv4(), name: 'Copy', icon: () => <AntDesign name='copy1' size={ICON_SIZE_L} color='white' /> },
    ]
  },
  {
    id: uuidv4(), name: 'Text', icon: () => <MaterialCommunityIcons name='download' size={ICON_SIZE_L} color='white' />,
    submenu: [
      { id: uuidv4(), name: 'Share', icon: () => <Entypo name='share' size={ICON_SIZE_L} color='white' /> },
      { id: uuidv4(), name: 'Copy', icon: () => <AntDesign name='copy1' size={ICON_SIZE_L} color='white' /> },
    ]
  },
  { id: uuidv4(), name: 'Csv', icon: () => <MaterialCommunityIcons name='download' size={ICON_SIZE_L} color='white' /> },
  { id: uuidv4(), name: 'Share', icon: () => <Entypo name='share' size={ICON_SIZE_L} color='white' /> },
  { id: uuidv4(), name: 'Favorites', icon: () => <Entypo name='star-outlined' size={ICON_SIZE_L} color='white' /> },
  { id: uuidv4(), name: 'Edit', icon: () => <MaterialIcons name='mode-edit' size={ICON_SIZE_L} color='white' /> },
  { id: uuidv4(), name: 'Change Name', icon: () => <MaterialCommunityIcons name='rename-box' size={ICON_SIZE_L} color='white' /> }
];

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

  return (
    <>
      {MenuIListItems.map((menuItem: MenuItemsType) => (
        <React.Fragment key={menuItem.id}>
          {menuItem.name === 'Delete' ? (
            <Menu.Item
              onPress={() => {
                deleteScannedItemFromFavorites(item.id);
              }}
              leadingIcon={menuItem.icon}
              title={menuItem.name}
            />
          )
            : (
              <Menu.Item
                leadingIcon={menuItem.icon}
                title={menuItem.name}
              />
            )}
        </React.Fragment>
      ))}
    </>
  )
}

export const FavortieScreen: React.FC = () => {
  const { state } = useScannedItems();
  const allFavorites = getAllFavorite(state);

  return (
    <>
      <CustomCard
        items={allFavorites}
        screenType='Favorite'
        MenuItems={MenuItem}
      />
    </>
  )
}
