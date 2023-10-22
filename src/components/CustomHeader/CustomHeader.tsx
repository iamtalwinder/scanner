import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { styles } from './CustomHeader.styles';
import { StackHeaderProps } from '@react-navigation/stack';
import { DEFAULT_COLOR } from '../Icons';
import { useThemedStyles } from '../../hooks';
import { useHeaderAction } from '../../context/HeaderActionContext';

type CommonProps = {
  actions?: ReactNode | undefined;
};

type DrawerCustomHeaderProps = DrawerHeaderProps & CommonProps;
type StackCustomHeaderProps = StackHeaderProps & CommonProps;

type CustomHeaderProps = DrawerCustomHeaderProps | StackCustomHeaderProps;

export const CustomHeader: React.FC<CustomHeaderProps> = ({ route, actions, navigation }: CustomHeaderProps) => {
  const style = useThemedStyles(styles);
  const { state } = useHeaderAction();

  const actionsToRender: ReactNode =  actions || state.actions;

  const screenName = route.name;
  const isDrawerNavigation = ('openDrawer' in navigation);

  return (
    <Appbar.Header style={style.header}>
      <View style={style.leftComponent}>
        {isDrawerNavigation && (
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} color={DEFAULT_COLOR}/>
        )}
      </View>
      <Appbar.Content title={screenName} titleStyle={style.title} style={style.centerComponent} />
      <View style={style.rightComponent}>
        {actionsToRender && actionsToRender}
      </View>
    </Appbar.Header>
  );
};


