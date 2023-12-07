import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { styles } from './CustomCard.styles';
import { ScannedItems } from '../../context/ScannedItemsContext';
import { formatDateTime } from '../../utils/dateAndTime';
import { useThemedStyles } from '../../hooks/useThemedStyles';

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

  const style = useThemedStyles(styles);

  return (
    <ScrollView>
      <Card style={style.card}>
        <Card.Content style={style.cardContent}>
          <View style={style.logoContainer}>
            {logo}
          </View>
          <View style={style.textContainer}>
            <Text style={style.type}>{item.type}</Text>
            <View style={style.timeStamp}>
              <Text style={style.timeStamp}>
                {formatDateTime(item.timeStamp)}
              </Text>
              <Text style={style.typeName}>{item.typeName}</Text>
            </View>
            <Text style={style.text}>{item.text}</Text>
          </View>
          <View style={style.actionsContainer}>
            {actions && actions({ item })}
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

