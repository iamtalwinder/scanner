import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, IconButton, Divider, Menu, Button, Dialog, Text, Portal, TextInput } from 'react-native-paper';
import { Feather, FontAwesome, MaterialIcons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export interface CardData {
  title: string;
  date: string;
  time: string;
  icon: string;
  text?: string;
  library: 'Feather' | 'FontAwesome';
  isFavorite: boolean;
}

interface CustomCardProps {
  screenType: 'Favorite' | 'History';
  toggleFavorite?: (card: CardData) => void;
  updateCardData?: (updatedData: CardData[]) => void;
}

interface GroupedCardData {
  [key: string]: CardData[];
}

export const itemMenuItems = [
  {
    id: 1, name: 'Delete', icon: () => <MaterialIcons name="delete-outline" size={20} color="white" />,
    submenu: [
      { id: 8, name: 'Share', icon: () => <Entypo name="share" size={20} color="white" /> },
      { id: 9, name: 'Copy', icon: () => <AntDesign name="copy1" size={20} color="white" /> },
    ]
  },
  {
    id: 2, name: 'Text', icon: () => <MaterialCommunityIcons name="download" size={20} color="white" />,
    submenu: [
      { id: 10, name: 'Share', icon: () => <Entypo name="share" size={20} color="white" /> },
      { id: 11, name: 'Copy', icon: () => <AntDesign name="copy1" size={20} color="white" /> },
    ]
  },
  { id: 3, name: 'Csv', icon: () => <MaterialCommunityIcons name="download" size={20} color="white" /> },
  { id: 4, name: 'Share', icon: () => <Entypo name="share" size={20} color="white" /> },
  { id: 5, name: 'Favorites', icon: () => <Entypo name="star-outlined" size={20} color="white" /> },
  { id: 6, name: 'Edit', icon: () => <MaterialIcons name="mode-edit" size={20} color="white" /> },
  { id: 7, name: 'Change Name', icon: () => <MaterialCommunityIcons name="rename-box" size={20} color="white" /> }
];

const CustomCard: React.FC<CustomCardProps> = (props: any) => {
  const { screenType } = props;

  const [selectedItem, setSelectedItem] = useState<string>('');
  const [isInputVisible, setInputVisible] = useState<boolean>(false);
  const [text, setText] = useState('');
  const [subMenu, setSubMenu] = useState(false);

  const [dialogVisible, setDialogVisible] = useState(false);

  const [cardData, setCardData] = useState<CardData[]>([
    {
      title: 'Url',
      date: '05/09/2023',
      time: '8:42:43 am',
      text: 'QR_CODE exp://192.168.100.16:19000',
      icon: 'link-2',
      library: 'Feather',
      isFavorite: true,
    },
    {
      title: 'Product',
      date: '07/08/2023',
      time: '8:10:20 am',
      text: 'Product exp://192.168.100.16:19000',
      icon: 'shopping-bag',
      library: 'Feather',
      isFavorite: true,
    },
    {
      title: 'Barcode',
      date: '03/08/2023',
      time: '10:30:20 am',
      text: 'Barcode exp://192.168.100.16:19000',
      icon: 'barcode',
      library: 'FontAwesome',
      isFavorite: false,
    },
    {
      title: 'Text',
      date: '16/08/2023',
      time: '05:10:30 pm',
      text: 'Text exp://192.168.100.16:19000',
      icon: 'text-height',
      library: 'FontAwesome',
      isFavorite: false,
    },
    {
      title: 'Headphones',
      date: '05/09/2023',
      time: '7:32:40 am',
      text: 'Headphones exp://192.168.100.16:19000',
      icon: 'headphones',
      library: 'Feather',
      isFavorite: false,
    },
  ]);

  const filteredCardData = cardData.filter((card) =>
    screenType === 'Favorite' ? card.isFavorite : true
  );

  const [cardFavorites, setCardFavorites] = useState<boolean[]>(
    cardData.map((card) => card.isFavorite)
  );
  const [menuVisibility, setMenuVisibility] = useState<boolean[]>(
    Array(cardData.length).fill(false)
  );

  const toggleFavorite = (index: number) => {
    setCardFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites];
      updatedFavorites[index] = !prevFavorites[index];
      console.log("update", updatedFavorites)
      return updatedFavorites;
    });

    const updatedCardData = [...cardData];
    updatedCardData[index].isFavorite = !cardData[index].isFavorite;
    setCardData(updatedCardData);
  };

  const showDialog = () => setDialogVisible(true);

  const hideDialog = () => setDialogVisible(false);

  const toggleItem = (item: string, index: number) => {
    if (selectedItem === item) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);

      if (item === 'Change Name') {
        setInputVisible(true);
        showDialog();
      } else {
        setInputVisible(false);
      }

      setMenuVisibility((prevVisibility) => {
        const updatedVisibility = [...prevVisibility];
        updatedVisibility[index] = !prevVisibility[index];
        return updatedVisibility;
      });
    }
  };

  const deleteCard = (index: number) => {
    const updatedCardData = [...cardData];
    updatedCardData.splice(index, 1);

    setCardData(updatedCardData);

    setMenuVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = false;
      return updatedVisibility;
    });
  };

  const updateTitle = () => {
    if (selectedItem === 'Change Name' && text) {
      const updatedCardData = [...cardData];
      const selectedIndex = updatedCardData.findIndex((item) => item.title === selectedItem);
      console.log("selected", updatedCardData)
      if (selectedIndex !== -1) {
        updatedCardData[selectedIndex].title = text;
        setCardData(updatedCardData);
        setText('');
        hideDialog();
      }
    }
  };

  const groupByDate = () => {
    const groupedData: GroupedCardData = {};

    cardData.forEach((data) => {
      const date = data.date;

      if (!groupedData[date]) {
        groupedData[date] = [];
      }

      groupedData[date].push(data);
    });

    return groupedData;
  };

  const groupedCardData = groupByDate();

  return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        {Object.keys(groupedCardData).map((date, dateIndex) => (
          <View key={dateIndex}>
            <Text style={styles.dateHeader}>{date}</Text>
            {groupedCardData[date].map((data, dataIndex) => (
              <Card
                key={dataIndex}
                style={[
                  styles.card,
                  dataIndex === 0 && styles.firstCard,
                  dataIndex === groupedCardData[date].length - 1 && styles.lastCard,
                ]}
              >
                <Card.Title
                  style={styles.cardTitle}
                  title={data.title}
                  subtitle={
                    <>
                      <Text style={styles.subtitleText}>{data.date} {data.time} {data.text}</Text>
                    </>
                  }
                  left={(props) =>
                    data.library === 'Feather' ? (
                      <Feather {...props} name={data.icon as any} size={20} color="white" />
                    ) : (
                      <FontAwesome {...props} name={data.icon as any} size={20} color="white" />
                    )
                  }
                  right={(props) => (
                    <View style={styles.iconContainer}>
                      {screenType === 'History' ? (
                        <Entypo
                          name={cardFavorites[dataIndex] ? 'star' : 'star-outlined'}
                          size={24}
                          color="white"
                          style={styles.barIcon}
                          onPress={() => toggleFavorite(dataIndex)}
                        />
                      ) : (
                        <FontAwesome name="bars" size={20} color="white" style={styles.barIcon} />
                      )}
                      <Menu
                        visible={menuVisibility[dataIndex]}
                        onDismiss={() => {
                          setMenuVisibility((prevVisibility) => {
                            const updatedVisibility = [...prevVisibility];
                            updatedVisibility[dataIndex] = false;
                            return updatedVisibility;
                          });
                        }}
                        anchor={
                          <IconButton
                            {...props}
                            icon="dots-vertical"
                            onPress={() => toggleItem(data.title, dataIndex)}
                          />
                        }
                      >
                        {itemMenuItems.map((menuItem) => (
                          <React.Fragment key={menuItem.id}>
                            {menuItem.name === 'Delete' ? (
                              <Menu.Item
                                onPress={() => {
                                  deleteCard(dataIndex);
                                }}
                                leadingIcon={menuItem.icon}
                                title={menuItem.name}
                                style={{
                                  backgroundColor: selectedItem === menuItem.name ? 'blue' : 'transparent',
                                }}
                              />
                            ) : menuItem.name === 'Change Name' ? (
                              <Menu.Item
                                onPress={() => {
                                  toggleItem(menuItem.name, dataIndex);
                                }}
                                leadingIcon={menuItem.icon}
                                title={menuItem.name}
                                style={{
                                  backgroundColor: selectedItem === menuItem.name ? 'blue' : 'transparent',
                                }}
                              />
                            ) : (
                              <Menu.Item
                                onPress={() => {
                                  toggleItem(menuItem.name, dataIndex);
                                }}
                                leadingIcon={menuItem.icon}
                                title={menuItem.name}
                                style={{
                                  backgroundColor: selectedItem === menuItem.name ? 'blue' : 'transparent',
                                }}
                              />
                            )}
                            {menuItem.name !== 'Change Name' && <Divider />}
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
        ))}

        <Portal>
          <Dialog visible={dialogVisible} onDismiss={hideDialog}>
            <Dialog.Content>
              <TextInput
                placeholder={selectedItem}
                value={text}
                onChangeText={setText}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button
                onPress={() => {
                  updateTitle();
                }}
              >
                Ok
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122',
    padding: 10
  },
  container: {
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
  firstCard: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  lastCard: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  barIcon: {
    marginTop: 13,
  },
  cardTitle: {
    maxWidth: 500,
    flexWrap: 'wrap',
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  dateHeader: {
    marginBottom: 10,
    marginTop: 10
  }
});

export default CustomCard;
