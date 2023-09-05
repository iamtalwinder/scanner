import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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
    }
  };

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="menu" onPress={() => props.navigation.openDrawer()} />
      <Appbar.Content title={screenName} titleStyle={styles.title} />
      <View>
        <Menu
          visible={filterVisible}
          onDismiss={() => setFilterVisible(false)}
          style={{ marginTop: 50 }}
          anchor={
            <Appbar.Action
              icon="filter"
              onPress={() => setFilterVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              toggleFilter('Url');
            }}
            leadingIcon={() => <Feather name="link-2" size={20} color="white" />}
            title="Url"
            style={{
              backgroundColor: selectedFilters.includes('Url') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Text');
            }}
            leadingIcon={() => <MaterialCommunityIcons name="format-text" size={20} color="white" />}
            title="Text"
            style={{
              backgroundColor: selectedFilters.includes('Text') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Wifi');
            }}
            leadingIcon={() => <Fontisto name="wifi" size={15} color="white" />}
            title="Wifi"
            style={{
              backgroundColor: selectedFilters.includes('Wifi') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Product');
            }}
            leadingIcon={() => <Feather name="shopping-bag" size={20} color="white" />}
            title="Product"
            style={{
              backgroundColor: selectedFilters.includes('Product') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Barcode');
            }}
            leadingIcon={() => <FontAwesome name="barcode" size={20} color="white" />}
            title="Barcode"
            style={{
              backgroundColor: selectedFilters.includes('Barcode') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Phone');
            }}
            leadingIcon={() => <FontAwesome name="phone" size={20} color="white" />}
            title="Phone"
            style={{
              backgroundColor: selectedFilters.includes('Phone') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Contact');
            }}
            leadingIcon={() => <MaterialCommunityIcons name="contacts-outline" size={20} color="white" />}
            title="Contact"
            style={{
              backgroundColor: selectedFilters.includes('Contact') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('ISBN');
            }}
            leadingIcon={() => <AntDesign name="book" size={20} color="white" />}
            title="ISBN"
            style={{
              backgroundColor: selectedFilters.includes('ISBN') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Email');
            }}
            leadingIcon={() => <MaterialIcons name="email" size={20} color="white" />}
            title="Email"
            style={{
              backgroundColor: selectedFilters.includes('Email') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('SMS');
            }}
            leadingIcon={() => <MaterialIcons name="sms" size={20} color="white" />}
            title="SMS"
            style={{
              backgroundColor: selectedFilters.includes('SMS') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Geo');
            }}
            leadingIcon={() => <Ionicons name="location-outline" size={20} color="white" />}
            title="Geo"
            style={{
              backgroundColor: selectedFilters.includes('Geo') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleFilter('Calender');
            }}
            leadingIcon={() => <Ionicons name="calendar-sharp" size={20} color="white" />}
            title="Calender"
            style={{
              backgroundColor: selectedFilters.includes('Calender') ? 'blue' : 'transparent',
            }}
          />
          <Divider />
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
          <Menu.Item
            onPress={() => {
              toggleItem('Delete');
            }}
            leadingIcon={() => <MaterialIcons name="delete-outline" size={20} color="white" />}
            title="Delete"
            style={{
              backgroundColor: selectedItem === 'Delete' ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleItem('Csv');
            }}
            leadingIcon={() => <MaterialIcons name="file-upload" size={20} color="white" />}
            title="Csv Export"
            style={{
              backgroundColor: selectedItem === 'Csv Export' ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleItem('Text');
            }}
            leadingIcon={() => <MaterialCommunityIcons name="download" size={20} color="white" />}
            title="Text"
            style={{
              backgroundColor: selectedItem === 'Text' ? 'blue' : 'transparent',
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              toggleItem('Csv');
            }}
            leadingIcon={() => <MaterialCommunityIcons name="download" size={20} color="white" />}
            title="Csv Import"
            style={{
              backgroundColor: selectedItem === 'Csv Import' ? 'blue' : 'transparent',
            }}
          />
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
  },
  title: {
    fontSize: 15,
  },
});

export default CustomHeader;
