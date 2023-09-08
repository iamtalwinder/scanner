import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import {
  Ionicons,
  MaterialIcons,
  Feather,
  Fontisto,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';


const CustomHeader: React.FC<DrawerHeaderProps> = (props: any) => {

  const [visible, setVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState('');

  const screenName = props.route.name;

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const toggleItem = (item: string) => {
    if (selectedItem === item) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);
      setVisible(false);
    }
  };

  const filterMenuItems = [
    { name: 'Url', icon: () => <Feather name="link-2" size={20} color="white" /> },
    { name: 'Text', icon: () => <MaterialCommunityIcons name="format-text" size={20} color="white" /> },
    { name: 'Wifi', icon: () => <Fontisto name="wifi" size={15} color="white" /> },
    { name: 'Product', icon: () => <Feather name="shopping-bag" size={20} color="white" /> },
    { name: 'Barcode', icon: () => <FontAwesome name="barcode" size={20} color="white" /> },
    { name: 'Phone', icon: () => <FontAwesome name="phone" size={20} color="white" /> },
    { name: 'Contact', icon: () => <MaterialCommunityIcons name="contacts-outline" size={20} color="white" /> },
    { name: 'ISBN', icon: () => <AntDesign name="book" size={20} color="white" /> },
    { name: 'Email', icon: () => <MaterialIcons name="email" size={20} color="white" /> },
    { name: 'SMS', icon: () => <MaterialIcons name="sms" size={20} color="white" /> },
    { name: 'Geo', icon: () => <Ionicons name="location-outline" size={20} color="white" /> },
    { name: 'Calender', icon: () => <Ionicons name="calendar-sharp" size={20} color="white" /> },
  ];

  const itemMenuItems = [
    { id: 1, name: 'Delete', icon: () => <MaterialIcons name="delete-outline" size={20} color="white" /> },
    { id: 2, name: 'Csv Import', icon: () => <MaterialIcons name="file-upload" size={20} color="white" /> },
    { id: 3, name: 'Text', icon: () => <MaterialCommunityIcons name="download" size={20} color="white" /> },
    { id: 4, name: 'Csv Export', icon: () => <MaterialCommunityIcons name="download" size={20} color="white" /> },
  ];

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="menu" onPress={() => props.navigation.openDrawer()} />
      <Appbar.Content title={screenName} titleStyle={styles.title} />
      <View>
        <Menu
          visible={filterVisible}
          onDismiss={() => setFilterVisible(false)}
          style={styles.item}
          anchor={
            <Appbar.Action
              icon="filter"
              onPress={() => setFilterVisible(true)}
            />
          }
        >
          {filterMenuItems.map((menuItem) => (
            <React.Fragment key={menuItem.name}>
              <Menu.Item
                onPress={() => {
                  toggleFilter(menuItem.name);
                }}
                leadingIcon={menuItem.icon}
                title={menuItem.name}
                style={{
                  backgroundColor: selectedFilters.includes(menuItem.name) ? 'blue' : 'transparent',
                }}
              />
              <Divider />
            </React.Fragment>
          ))}
        </Menu>
      </View>
      <View style={{ marginRight: 10 }}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={{ marginTop: 50 }}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={() => setVisible(true)}
            />
          }
        >
          {itemMenuItems.map((menuItem) => (
            <React.Fragment key={menuItem.id}>
              <Menu.Item
                onPress={() => {
                  toggleItem(menuItem.name);
                }}
                leadingIcon={menuItem.icon}
                title={menuItem.name}
              />
              <Divider />
            </React.Fragment>
          ))}
        </Menu>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: '12px',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'violet',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#333333',
    marginTop: 50,
  },
});

export default CustomHeader;
