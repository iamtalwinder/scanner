import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconEnum, Icons } from '../Icons';

export const SelectContactComponent = () => {
  return (
    <View>
      <Icons name={IconEnum.personOutline} size={24} color='white'/>
    </View>
  );
};
