import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import { styles } from './CustomCard.styles';
import { ScannedItems } from '../../context/ScannedItemsContext';

export type CustomCardActionProps = {
  item: ScannedItems;
}

export type CustomCardProps = {
  actions?: (props: CustomCardActionProps) => React.ReactNode,
  item: ScannedItems
  logo: ReactNode,
}

export const CustomCard: React.FC<CustomCardProps> = ({
  item, logo, actions }: CustomCardProps) => {

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.logoContainer}>
            {logo}
          </View>
          <View style={styles.textContainer}>
            <Text>{item.type}</Text>
            <Text>{item.timeStamp}</Text>
            <Text>{item.text}</Text>
          </View>
          <View style={styles.actionsContainer}>
            {actions && actions({ item })}
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

