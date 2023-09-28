import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { Icons } from '../Icons';
import { HISTORY_CARD_MENU_ITEMS } from './MenuItems';
import { styles } from './HistoryCardMenu.styles';

type HistoryMenuProps = {};

export const HistoryMenuComponent: React.FC<HistoryMenuProps> = (props: HistoryMenuProps) => {
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
      style={styles.item}
      anchor={
        <Appbar.Action icon='dots-vertical' onPress={() => setVisible(true)} />
      }
    >
      {HISTORY_CARD_MENU_ITEMS.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Menu.Item
            onPress={() => {
              toggleItem(menuItem.title);
            }}
            leadingIcon={() => <Icons name={menuItem.icon} size={menuItem.size} />}
            title={menuItem.title}
            style={styles.menuItem}
          />
          <Divider />
        </React.Fragment>
      ))}
    </Menu>
  )
}