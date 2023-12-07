import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { IMPORT_EXPORT_MENU_ITEMS } from './MenuItems';
import { DEFAULT_COLOR, Icons } from '../Icons';
import { styles } from './ImportExportMenu.styles';
import { useThemedStyles } from '../../hooks';

type ImportExportMenuProps = {};

export const ImportExportMenuComponent: React.FC<ImportExportMenuProps> = (props: ImportExportMenuProps) => {

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const style = useThemedStyles(styles);

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
      style={style.item}
      anchor={
        <Appbar.Action icon='dots-vertical' onPress={() => setVisible(true)} color={DEFAULT_COLOR} />
      }
    >
      {IMPORT_EXPORT_MENU_ITEMS.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Menu.Item
            onPress={() => {
              toggleItem(menuItem.title);
            }}
            leadingIcon={() => <Icons name={menuItem.icon} size={menuItem.size} color={DEFAULT_COLOR} />}
            title={menuItem.title}
            titleStyle={{
              color: 'white',
            }}
            style={style.menuItem}
          />
          <Divider />
        </React.Fragment>
      ))}
    </Menu>
  );
};
