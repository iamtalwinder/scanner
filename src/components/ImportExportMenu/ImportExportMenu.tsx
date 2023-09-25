import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { IMPORT_EXPORT_MENU_ITEMS } from './MenuItems';
import { Icons } from '../Icons';

type ImportExportMenuProps = {};

export const ImportExportMenuComponent: React.FC<ImportExportMenuProps> = (props: ImportExportMenuProps) => {

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleItem = (item: string) => {
    if (selectedItem === item) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);
      setVisible(false);
    }
  };

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      style={{ marginTop: 50 }}
      anchor={
        <Appbar.Action icon='dots-vertical' onPress={() => setVisible(true)} />
      }
    >
      {IMPORT_EXPORT_MENU_ITEMS.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Menu.Item
            onPress={() => {
              toggleItem(menuItem.title);
            }}
            leadingIcon={() => <Icons name={menuItem.icon} size={menuItem.size} />}
            title={menuItem.title}
          />
          <Divider />
        </React.Fragment>
      ))}
    </Menu>
  );
};
