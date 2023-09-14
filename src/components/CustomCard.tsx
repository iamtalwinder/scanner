import React, { useState, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Divider, IconButton, Menu, Text } from 'react-native-paper';
import { ScannedItemTypeEnum, ScannedItems, useScannedItems } from '../context/ScannedItemsContext';
import { ScannedItemActionEnum } from '../context/ScannedItemsContext'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Feather, FontAwesome, MaterialIcons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

interface CustomCardProps {
  items?: ScannedItems[];
  screenType: 'Favorite' | 'History';
}

export interface MenuItems {
  id: string;
  name: string;
  icon: () => ReactNode;
  submenu?: MenuItems[];
}

 const MenuItems: MenuItems[] = [
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
  { id: uuidv4(), name: 'Favorites', icon: () => <Entypo name="star-outlined" size={20} color="white" /> },
  { id: uuidv4(), name: 'Edit', icon: () => <MaterialIcons name="mode-edit" size={20} color="white" /> },
  { id: uuidv4(), name: 'Change Name', icon: () => <MaterialCommunityIcons name="rename-box" size={20} color="white" /> }
];


const CustomCard: React.FC<CustomCardProps> = (props: any) => {
  const { items, screenType } = props;
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [menuVisible, setMenuVisible] = useState(false);
  const { state, dispatch } = useScannedItems();

  const [menuVisibility, setMenuVisibility] = useState<boolean[]>(
    Array(MenuItems.length).fill(false)
  );

  const toggleItem = (item: any, index: number) => {
    console.log('selected', selectedItem)
    if (selectedItem === item) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);
      setMenuVisible(true);

      setMenuVisibility((prevVisibility) => {
        const updatedVisibility = [...prevVisibility];
        updatedVisibility[index] = !prevVisibility[index];
        return updatedVisibility;
      });
    }
  };

  // const closeMenu = (index: number) => {
  //   setMenuVisibility((prevVisibility) => {
  //     const updatedVisibility = [...prevVisibility];
  //     updatedVisibility[index] = false;
  //     return updatedVisibility;
  //   });
  // };

  const addToFavorites = (id: string, isFavorite: boolean) => {
    if (!isFavorite) {
      dispatch({
        type: ScannedItemActionEnum.ADD_TO_FAVORITE,
        id: id,
      });
    } else {
      dispatch({
        type: ScannedItemActionEnum.REMOVE_FROM_FAVORITE,
        id: id,
      });
    }
  };


  const renderIconBasedOnType = (itemType: ScannedItemTypeEnum) => {
    switch (itemType) {
      case ScannedItemTypeEnum.Product:
        return <Feather name="shopping-bag" size={24} color="white" />;
      case ScannedItemTypeEnum.Barcode:
        return <FontAwesome name="barcode" size={24} color="white" />;
      case ScannedItemTypeEnum.Text:
        return <Feather name="file-text" size={24} color="white" />;
      case ScannedItemTypeEnum.Url:
        return <Feather name="link-2" size={24} color="white" />;
      default:
        return null;
    }
  }


  return (
    <View style={styles.mainContainer}>
      {items.map((data: ScannedItems, index: number) => (
        <Card
          key={index}
          style={styles.card}
        >
          <Card.Title
            title={data.type}
            subtitle={
              <>
                <Text style={styles.subtitleText}>{data.timestamp}</Text>
                <Text numberOfLines={2}>{data.text}</Text>
              </>
            }
            left={() => (
              <View style={styles.iconContainer}>
                {renderIconBasedOnType(data.type)}
              </View>
            )}
            right={(props) => (
              <View style={styles.iconContainer}>
                {screenType === 'History' ? (
                  <Entypo
                    name={data.isFavorite ? 'star' : 'star-outlined'}
                    size={20}
                    color="white"
                    style={styles.barIcon}
                    onPress={() => addToFavorites(data.id, data.isFavorite)}
                  />
                ) : (
                  <FontAwesome name="bars" size={20} color="white" style={styles.barIcon} />
                )}
                <Menu
                  visible={menuVisibility[index]}
                  onDismiss={() => {
                    setMenuVisibility((prevVisibility) => {
                      const updatedVisibility = [...prevVisibility];
                      updatedVisibility[index] = false;
                      return updatedVisibility;
                    });
                  }}
                  anchor={
                    <IconButton
                      {...props}
                      icon="dots-vertical"
                      onPress={() => toggleItem(data.text, index)}
                    />
                  }
                >
                  {MenuItems.map((menuItem: MenuItems, index: number) => (
                    <React.Fragment key={menuItem.id}>
                      <Menu.Item
                        leadingIcon={menuItem.icon}
                        title={menuItem.name}
                        // onPress={() => {
                        //   closeMenu(index);
                        // }}
                      // style={{
                      //   backgroundColor: selectedItem === menuItem.name ? 'blue' : 'transparent',
                      // }}
                      />
                    </React.Fragment>
                  ))}
                </Menu>
              </View>
            )}
          />
          <Divider />
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122',
    padding: 10,
    marginTop: 20,
  },
  card: {
    marginVertical: 5,
    borderRadius: 0,
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 8,
    backgroundColor: '#050301',
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  barIcon: {
    marginTop: 13,
  },
});

export default CustomCard;
