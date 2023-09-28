import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { Icons } from '../Icons';
import { FILTER_MENU_ITEMS } from './MenuItems';
import { styles } from './FilterMenu.styles';

type FilterMenuProps = {};

export const FilterMenuComponent: React.FC<FilterMenuProps> = (props: FilterMenuProps) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <Menu
      visible={filterVisible}
      onDismiss={() => setFilterVisible(false)}
      style={styles.item}
      anchor={
        <Appbar.Action icon='filter' onPress={() => setFilterVisible(true)} />
      }
    >
      {FILTER_MENU_ITEMS.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Menu.Item
            onPress={() => {
              toggleFilter(menuItem.title);
            }}
            leadingIcon={() => <Icons name={menuItem.icon} size={menuItem.size} />}
            title={menuItem.title}
            style={{
              backgroundColor: selectedFilters.includes(menuItem.title)
                ? 'blue'
                : '#333333',
            }}
          />
          <Divider />
        </React.Fragment>
      ))}
    </Menu>
  );
};
