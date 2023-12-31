import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { DEFAULT_COLOR, Icons } from '../Icons';
import { HISTORY_CARD_MENU_ITEMS } from './MenuItems';
import { styles } from './HistoryCardMenu.styles';
import { useThemedStyles } from '../../hooks';

type HistoryMenuProps = {};

export const HistoryMenuComponent: React.FC<HistoryMenuProps> = (props: HistoryMenuProps) => {
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
      {HISTORY_CARD_MENU_ITEMS.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Menu.Item
            onPress={() => {
              toggleItem(menuItem.title);
            }}
            leadingIcon={() => <Icons name={menuItem.icon} size={menuItem.size} />}
            title={menuItem.title}
            style={style.menuItem}
            titleStyle={{
              color: 'white'
            }}
          />
          <Divider />
        </React.Fragment>
      ))}
    </Menu>
  )
}