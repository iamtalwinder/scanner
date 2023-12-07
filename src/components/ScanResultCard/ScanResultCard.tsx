import React, { ReactNode } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, Divider, IconButton } from 'react-native-paper';
import { formatDateTime } from '../../utils/dateAndTime';
import { styles } from './ScanResultCard.styles';
import { DEFAULT_COLOR, ICON_SIZE_XXL, IconEnum, Icons } from '../Icons';
import { ScanResultActionProps, ScannedItemResult } from '../../screens/ScanScreen/ScanResult';
import { useThemedStyles } from '../../hooks';

interface ScanResultCardProps {
  item: ScannedItemResult;
  actions?: (props: ScanResultActionProps) => ReactNode,
}

export const ScanResultCard: React.FC<ScanResultCardProps> = (props: ScanResultCardProps) => {
  const { item, actions } = props
  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <Card style={style.card}>
          <Card.Content style={style.cardContent}>
            <IconButton style={style.logoContainer}
              icon={item.logo}
              iconColor='white'
            />
            <View style={style.textContainer}>
              <Text style={style.type}>{item.type}</Text>
              <View>
                <Text style={style.timeStamp}>
                  {formatDateTime(item.timeStamp)}
                </Text>
                <Text style={style.typeName}>{item.typeName}</Text>
              </View>
            </View>
            <View style={style.actionsContainer}>
              {actions && actions({ item })}
            </View>
          </Card.Content>
          {/* <Divider style={style.divider} /> */}
          {/* <View style={style.textView}>
            <View>
              <Text style={style.text}>{item.text}</Text>
            </View>
          </View> */}
        </Card>
        <View style={style.icons}>
          <View style={style.iconContainer}>
            <IconButton
              icon={() =>
                <Icons name={IconEnum.openInApp} size={ICON_SIZE_XXL} color={DEFAULT_COLOR} />}
            />
            <Text style={style.iconText}>Open</Text>
          </View>
          <View style={style.iconContainer}>
            <IconButton
              icon={() =>
                <Icons name={IconEnum.share} size={ICON_SIZE_XXL} color={DEFAULT_COLOR} />}
            />
            <Text style={style.iconText}>Share</Text>
          </View>
          <View style={style.iconContainer}>
            <IconButton
              icon={() =>
                <Icons name={IconEnum.copy} size={ICON_SIZE_XXL} color={DEFAULT_COLOR} />}
            />
            <Text style={style.iconText}>Copy</Text>
          </View>
        </View>

        <View style={style.barcodeIcon}>
          <Image
            source={require('../../../assets/barcodeImage.jpg')}
          // style={styles.barcodeImage}
          />
          {/* <Icons name={IconEnum.barcode} size={100} color={DEFAULT_COLOR} /> */}
        </View>
      </View>
    </View>
  );
};