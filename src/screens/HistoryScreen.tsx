import React, { ReactNode } from 'react';
import CustomCard from '../components/CustomCard';
import { getAllScannedItems } from '../context/ScannedItemsSelectors';
import { ScannedItems, useScannedItems } from '../context/ScannedItemsContext';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { MaterialIcons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScannedItemActionEnum } from "../context/ScannedItemsContext";
import { Menu } from "react-native-paper";

export interface MenuItemsType {
  id: string;
  name: string;
  icon: () => ReactNode;
  submenu?: MenuItemsType[];
}

const MenuIListItems: MenuItemsType[] = [
  {
    id: uuidv4(), name: 'Delete', icon: () => <MaterialIcons name="delete-outline" size={20} color="white" />,
    submenu: [
      { id: uuidv4(), name: 'Share', icon: () => <Entypo name="share" size={20} color="white" /> },
      { id: uuidv4(), name: 'Copy', icon: () => <AntDesign name="copy1" size={20} color="white" /> },
    ]
  },
  {
    id: uuidv4(), name: 'Text', icon: () => <MaterialCommunityIcons name="download" size={20} color="white" />,
    submenu: [
      { id: uuidv4(), name: 'Share', icon: () => <Entypo name="share" size={20} color="white" /> },
      { id: uuidv4(), name: 'Copy', icon: () => <AntDesign name="copy1" size={20} color="white" /> },
    ]
  },
  { id: uuidv4(), name: 'Csv', icon: () => <MaterialCommunityIcons name="download" size={20} color="white" /> },
  { id: uuidv4(), name: 'Share', icon: () => <Entypo name="share" size={20} color="white" /> },
  { id: uuidv4(), name: 'Edit', icon: () => <MaterialIcons name="mode-edit" size={20} color="white" /> },
  { id: uuidv4(), name: 'Change Name', icon: () => <MaterialCommunityIcons name="rename-box" size={20} color="white" /> }
];

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

export const HistoryScreen: React.FC = () => {
  const { state } = useScannedItems();
  const allScannedItems = getAllScannedItems(state);

  return (
    <>
      <CustomCard
        items={allScannedItems}
        screenType='History'
        MenuItems={MenuItem}
      />
    </>
  )
}

export default HistoryScreen;

