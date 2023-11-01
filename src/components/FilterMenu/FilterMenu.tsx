import React, { useState } from 'react';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { DEFAULT_COLOR, Icons } from '../Icons';
import { FILTER_MENU_ITEMS } from './MenuItems';
import { styles } from './FilterMenu.styles';
import { useThemedStyles } from '../../hooks';
import { ScannedItemQRCodeTypeEnum, useScannedItems } from '../../context/ScannedItemsContext';

type FilterMenuProps = {};

export const FilterMenuComponent: React.FC<FilterMenuProps> = (props: FilterMenuProps) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const style = useThemedStyles(styles);

  const toggleFilter = (filter: ScannedItemQRCodeTypeEnum) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const isFilterSelected = selectedFilters.length > 0;

  return (
    <Menu
      visible={filterVisible}
      onDismiss={() => setFilterVisible(false)}
      style={style.item}
      anchor={
        isFilterSelected || filterApplied ? (
          <Appbar.Action icon='filter' onPress={() => {
            setFilterVisible(true);
            setFilterApplied(true);
          }}
            color={DEFAULT_COLOR}
          />
        ) : (
          <Appbar.Action icon='filter-off' onPress={() => {
            setFilterApplied(false);
            setFilterVisible(true);
          }}
            color={DEFAULT_COLOR}
          />
        )
      }
    >
      {FILTER_MENU_ITEMS.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Menu.Item
            onPress={() => {
              toggleFilter(menuItem.type);
            }}
            leadingIcon={() => <Icons name={menuItem.icon} size={menuItem.size} />}
            title={menuItem.title}
            style={{
              backgroundColor: selectedFilters.includes(menuItem.title)
                ? 'black'
                : '#333333',
            }}
            titleStyle={{
              color: 'white',
            }}
          />
          <Divider />
        </React.Fragment>
      ))}
    </Menu>
  );
};
