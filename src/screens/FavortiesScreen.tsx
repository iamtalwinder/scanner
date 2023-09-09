import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, IconButton, Divider, Menu, Button, Dialog, PaperProvider, Portal, TextInput } from 'react-native-paper';
import {
  Feather,
  FontAwesome,
  MaterialIcons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

interface CardData {
  title: string;
  subtitle: string;
  icon: string;
  library: 'Feather' | 'FontAwesome';
}

const itemMenuItems = [
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
  { id: 5, name: 'Favorties', icon: () => <Entypo name="star-outlined" size={20} color="white" /> },
  { id: 6, name: 'Edit', icon: () => <MaterialIcons name="mode-edit" size={20} color="white" /> },
  { id: 7, name: 'Change Name', icon: () => <MaterialCommunityIcons name="rename-box" size={20} color="white" /> }
];

const FavoritesScreen: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [isInputVisible, setInputVisible] = useState<boolean>(false);
  const [text, setText] = useState('');
  const [subMenu, setSubMenu] = useState(false);

  const [dialogVisible, setDialogVisible] = useState(false);

  const [cardData, setCardData] = useState<CardData[]>([
    {
      title: 'Url',
      subtitle: '05/09/2023 8:42:43 am, QR_CODE exp://192.168.100.16:19000',
      icon: 'link-2',
      library: 'Feather',
    },
    {
      title: 'Product',
      subtitle: 'Card Subtitle2',
      icon: 'shopping-bag',
      library: 'Feather',
    },
    {
      title: 'Barcode',
      subtitle: 'Card Subtitle3',
      icon: 'barcode',
      library: 'FontAwesome',
    },
  ]);

  const [menuVisibility, setMenuVisibility] = useState<boolean[]>(
    Array(cardData.length).fill(false)
  );

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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {cardData.map((data, index) => (
          <Card
            key={index}
            style={[
              styles.card,
              index === 0 && styles.firstCard,
              index === cardData.length - 1 && styles.lastCard,
            ]}
          >
            <Card.Title
              style={styles.cardTitle}
              title={data.title}
              subtitle={data.subtitle}
              left={(props) =>
                data.library === 'Feather' ? (
                  <Feather {...props} name={data.icon as any} size={20} color="white" />
                ) : (
                  <FontAwesome {...props} name={data.icon as any} size={20} color="white" />
                )
              }
              right={(props) => (
                <View style={styles.iconContainer}>
                  <FontAwesome name="bars" size={20} color="white" style={styles.barIcon} />
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
                        onPress={() => toggleItem(data.title, index)}
                      />
                    }
                  >
                    {itemMenuItems.map((menuItem) => (
                      <React.Fragment key={menuItem.id}>
                        {menuItem.name === 'Delete' ? (
                          <Menu.Item
                            onPress={() => {
                              deleteCard(index);
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
                              toggleItem(menuItem.name, index);
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
                              toggleItem(menuItem.name, index);
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
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122'
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
    backgroundColor: '#050301'

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
    marginTop: 15,
  },
  cardTitle: {
    maxWidth: 500,
    flexWrap: 'wrap'
  }
});

export default FavoritesScreen;
