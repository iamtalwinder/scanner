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

  const screenName = props.route.name;

  return <Appbar.Header style={styles.header}>
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
            setFilterVisible(false);
          }}
          leadingIcon={() => <Feather name="link-2" size={20} color="white" />}
          title="Url"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <MaterialCommunityIcons name="format-text" size={20} color="white" />}
          title="Text"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <Fontisto name="wifi" size={15} color="white" />}
          title="Wifi"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <Feather name="shopping-bag" size={20} color="white" />}
          title="Product"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <FontAwesome name="barcode" size={20} color="white" />}
          title="Barcode"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <FontAwesome name="phone" size={20} color="white" />}
          title="Phone"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <MaterialCommunityIcons name="contacts-outline" size={20} color="white" />}
          title="Contact"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <AntDesign name="book" size={20} color="white" />}
          title="ISBN"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <MaterialIcons name="email" size={20} color="white" />}
          title="Email"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <MaterialIcons name="sms" size={20} color="white" />}
          title="SMS"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <Ionicons name="location-outline" size={20} color="white" />}
          title="Geo"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setFilterVisible(false);
          }}
          leadingIcon={() => <Ionicons name="calendar-sharp" size={20} color="white" />}
          title="Calender"
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
            setVisible(false);
          }}
          leadingIcon={() => <MaterialIcons name="delete-outline" size={20} color="white" />}
          title="Delete"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setVisible(false);
          }}
          leadingIcon={() => <MaterialIcons name="file-upload" size={20} color="white" />}
          title="Csv"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setVisible(false);
          }}
          leadingIcon={() => <MaterialCommunityIcons name="download" size={20} color="white" />}
          title="Text"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setVisible(false);
          }}
          leadingIcon={() => <MaterialCommunityIcons name="download" size={20} color="white" />}
          title="Csv"
        />
      </Menu>
    </View>
  </Appbar.Header>
};

const styles = StyleSheet.create({
  header: {
    fontSize: '12px',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    // flex: 1,
    // alignItems: 'center',
    // textAlign: 'center',
    // justifyContent: 'center',
    fontSize: 15,
  },
});

export default CustomHeader;