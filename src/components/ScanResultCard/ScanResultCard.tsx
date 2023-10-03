import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { formatDateTime } from '../../utils/dateAndTime';
import { styles } from './ScanResultCard.styles';
import { ICON_SIZE_XXL, IconEnum, Icons } from '../Icons';
import { ScanResultActionProps, ScannedItemResult } from '../../screens/ScanScreen/ScanResult';


interface ScanResultCardProps {
  item: ScannedItemResult;
  actions?: (props: ScanResultActionProps) => ReactNode,
}


export const ScanResultCard: React.FC<ScanResultCardProps> = (props: ScanResultCardProps) => {
  const { item, actions } = props

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <IconButton style={styles.logoContainer}
              icon={item.logo}
              iconColor='white'
            />
            <View style={styles.textContainer}>
              <Text style={styles.type}>{item.type}</Text>
              <View style={styles.timeStamp}>
                <Text style={styles.timeStamp}>
                  {formatDateTime(item.timeStamp)}
                </Text>
                <Text style={styles.typeName}>{item.typeName}</Text>
              </View>
            </View>
            <View style={styles.actionsContainer}>
              {actions && actions({ item })}
            </View>
          </Card.Content>
        </Card>
        <View style={styles.textView}>
          <View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <IconButton
            icon={() =>
              <Icons name={IconEnum.share} size={ICON_SIZE_XXL} color='white' />}
          />
          <IconButton
            icon={() =>
              <Icons name={IconEnum.copy} size={ICON_SIZE_XXL} color='white' />}
          />
        </View>
      </View>
    </View>
  );
};