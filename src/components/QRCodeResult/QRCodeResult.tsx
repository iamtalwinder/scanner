import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './QRCodeResult.styles';
import { useThemedStyles } from '../../hooks';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../Icons';
import { GenerateQRCode } from '../QRCodeGenerator/QRCodeGenerator';
import { FavoritiesIcon } from '../StarOutline/StarOutline';
import { RenameComponent } from '../Rename';
import { useRoute } from '@react-navigation/native';

export interface QRCodeResultProps {
  text: string
}

export const QRCodeResult: React.FC<any> = () => {
  // const { text } = props
  const route = useRoute();
  // const data: any = route.params;
  console.log('data result', route.params)

  const style = useThemedStyles(styles);

  return (
    <View style={style.mainContainer}>
      <View style={style.qrCodeContainer}>
        <View style={style.codeHeader}>
          <View style={style.text}>
            <IconButton
              icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
              }
            />
            <Text style={style.headline}>{(route.params as any).data?.type}</Text>
          </View>
          <View style={style.icons}>
            <RenameComponent />
            <FavoritiesIcon />
          </View>
        </View>
        <View>
          {(route.params as any).data?.type && <GenerateQRCode text={(route.params as any).data?.text} />}
        </View>
        <View style={style.commonIcons}>
          <View style={style.iconContainer}>
            <IconButton
              icon={() =>
                <Icons name={IconEnum.save} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
            />
            <Text style={style.iconText}>Save</Text>
          </View>
          <View style={style.iconContainer}>
            <IconButton
              icon={() =>
                <Icons name={IconEnum.share} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
            />
            <Text style={style.iconText}>Share</Text>
          </View>
        </View>
        <View>
          <Text style={style.textWritten}></Text>
        </View>
      </View>
    </View>
  )
}