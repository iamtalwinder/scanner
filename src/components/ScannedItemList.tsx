import React, { useState, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ScannedItemTypeEnum, ScannedItems, useScannedItems } from '../context/ScannedItemsContext';
import { ScannedItemActionEnum } from '../context/ScannedItemsContext'
import { Feather, FontAwesome } from '@expo/vector-icons';
import { ICON_SIZE_XL } from './Icons';
import { CustomCard, CustomCardActionProps } from './CustomCard/CustomCard';
import { ImportExportMenuComponent } from './ImportExportMenu';

interface CustomCardProps {
  items: ScannedItems[];
  // screenType: 'Favorite' | 'History';
  // MenuItems: React.ComponentType<any>;
  actions?: (props: CustomCardActionProps) => React.ReactNode,
}

interface GroupedCardData {
  [key: string]: ScannedItems[];
}

export const ScannedItemList: React.FC<CustomCardProps> = (props: CustomCardProps) => {
  const { items, actions } = props;

  const [selectedItem, setSelectedItem] = useState<string>('');
  const [menuVisible, setMenuVisible] = useState(false);
  const { state, dispatch } = useScannedItems();

  // const [menuVisibility, setMenuVisibility] = useState<boolean[]>(
  //   Array(MenuItems.length).fill(false)
  // );

  const toggleItem = (item: any, index: number) => {
    if (selectedItem === item) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);
      setMenuVisible(true);

      // setMenuVisibility((prevVisibility) => {
      //   const updatedVisibility = [...prevVisibility];
      //   updatedVisibility[index] = !prevVisibility[index];
      //   return updatedVisibility;
      // });
    }
  };

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
        return <Feather name='shopping-bag' size={ICON_SIZE_XL} color='white' />;
      case ScannedItemTypeEnum.Barcode:
        return <FontAwesome name='barcode' size={ICON_SIZE_XL} color='white' />;
      case ScannedItemTypeEnum.Text:
        return <Feather name='file-text' size={ICON_SIZE_XL} color='white' />;
      case ScannedItemTypeEnum.Url:
        return <Feather name='link-2' size={ICON_SIZE_XL} color='white' />;
      default:
        return null;
    }
  }

  const sortedItems = [...items].sort((itemA, itemB) => {
    const dateA = new Date(itemA.timeStamp);
    const dateB = new Date(itemB.timeStamp);

    return (dateB.getTime() - dateA.getTime());
  });


  return (
    <View style={styles.mainContainer}>
      {items.map((data: ScannedItems, index: number) => (
        <View key={data.id}>
          <View style={styles.cardDate}>
            <Text style={styles.dateHeader}>{data.timeStamp}</Text>
            {/* {actions && actions} */}
            <ImportExportMenuComponent />
          </View>
          <CustomCard
            item={data}
            logo={renderIconBasedOnType(data.type)}
            // timeStamp={data.timeStamp}
            // title={data.type}
            // isFavorite={data.isFavorite}
            // scannedContent={data.text}
            actions={actions}
          // onAction1Press=
          // {
          //   <Menu
          //     visible={menuVisibility[index]}
          //     onDismiss={() => {
          //       setMenuVisibility((prevVisibility) => {
          //         const updatedVisibility = [...prevVisibility];
          //         updatedVisibility[index] = false;
          //         return updatedVisibility;
          //       });
          //     }}
          //     // anchor={
          //     //   <IconButton
          //     //     {...props}
          //     //     icon='dots-vertical'
          //     //     onPress={() => toggleItem(data.text, index)}
          //     //   />
          //     // }
          //   >
          //     <View>
          //       <MenuItems item={data} />
          //     </View>
          //   </Menu>
          // }
          // onAction2Press=

          />
          {/* <Card
            key={data.id}
            style={styles.card}
          >
            <Card.Title
              title={data.type}
              titleStyle={styles.titleCss}
              subtitle={
                <>
                  <View>
                    <Text style={styles.subtitleText}>{data.date}{data.time}</Text>
                  </View>
                  <Text style={styles.subtitle}>{data.text}</Text>
                </>
              }
              // left={() => (
              //   <View style={styles.iconContainer}>
              //     {renderIconBasedOnType(data.type)}
              //   </View>
              // )}
              // right={() => (
              //   <View style={styles.iconContainer}>
              //     {screenType === 'History' ? (
              //       <Entypo
              //         name={data.isFavorite ? 'star' : 'star-outlined'}
              //         size={ICON_SIZE_L}
              //         color='white'
              //         style={styles.barIcon}
              //         onPress={() => addToFavorites(data.id, data.isFavorite)}
              //       />
              //     ) : (
              //       <FontAwesome name='bars' size={ICON_SIZE_L} color='white' style={styles.barIcon} />
              //     )}
              //     <Menu
              //       visible={menuVisibility[index]}
              //       onDismiss={() => {
              //         setMenuVisibility((prevVisibility) => {
              //           const updatedVisibility = [...prevVisibility];
              //           updatedVisibility[index] = false;
              //           return updatedVisibility;
              //         });
              //       }}
              //       anchor={
              //         <IconButton
              //           {...props}
              //           icon='dots-vertical'
              //           onPress={() => toggleItem(data.text, index)}
              //         />
              //       }
              //     >
              //       <View>
              //         <MenuItems item={data} />
              //       </View>
              //     </Menu>
              //   </View>
              // )}
            />
            <Card.Actions>
           
                <View style={styles.iconContainer}>
                  {screenType === 'History' ? (
                    <Entypo
                      name={data.isFavorite ? 'star' : 'star-outlined'}
                      size={ICON_SIZE_L}
                      color='white'
                      style={styles.barIcon}
                      onPress={() => addToFavorites(data.id, data.isFavorite)}
                    />
                  ) : (
                    <FontAwesome name='bars' size={ICON_SIZE_L} color='white' style={styles.barIcon} />
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
                        icon='dots-vertical'
                        onPress={() => toggleItem(data.text, index)}
                      />
                    }
                  >
                    <View>
                      <MenuItems item={data} />
                    </View>
                  </Menu>
                </View>
            </Card.Actions>
          </Card> */}
        </View>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122',
    padding: 10,
  },
  card: {
    marginVertical: 5,
    borderRadius: 0,
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: 5,
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
    marginVertical: 6
  },
  barIcon: {
    marginTop: 15,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
  },
  rightComponent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginRight: 30
  },
  cardDate: {
    gap: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleCss: {
    fontWeight: 'bold',
    fontSize: 20
  },
  subtitle: {
    color: 'white',
    // textAlign: 'center'
  },
  cardPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

