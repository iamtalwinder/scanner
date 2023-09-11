import { StyleSheet, Text, View } from 'react-native';
import CustomCard from '../components/CustomCard';
import React, { useState } from 'react';
import { CardData } from '../components/CustomCard';

export const HistoryScreen: React.FC = () => {
  
  return (
    <>
      <CustomCard
      screenType='History'
      //  toggleFavorite={toggleFavorite} 
      //  updateCardData={() => setCardData(cardData)} 
       />
    </>
  )
}

export default HistoryScreen;

