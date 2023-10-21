import React from 'react';
import { View } from 'react-native';
import { useThemedStyles } from '../../hooks';
import QRCode from 'react-native-qrcode-svg';
import { styles } from './QRCodeGenerator.styles';

export type QRCodeProps = {
  text: string
}

export const GenerateQRCode: React.FC<QRCodeProps> = ({
  text}: QRCodeProps) => {

  const style = useThemedStyles(styles);

  return (
    <View>
      <View style={style.code}>
        <QRCode value={text} size={250} />
      </View>
    </View>
  )
}