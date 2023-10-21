import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { styles } from './ClipBoardScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { RenameComponent } from '../../../components/Rename';
import QRCode from 'react-native-qrcode-svg';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';
import { GenerateQRCode } from '../../../components/QRCodeGenerator/QRCodeGenerator';
import { useThemedStyles } from '../../../hooks';

export const ClipboardScreen: React.FC = () => {
  const [text, setText] = React.useState('');
  const style = useThemedStyles(styles);

  return (
    <ScrollView style={style.mainContainer}>
      <View style={style.mainContainer}>
        <View style={style.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={style.headline}>Text</Text>
        </View>
        <TextInput
          style={style.textarea}
          multiline={true}
          numberOfLines={8}
          placeholder='Text'
          onChangeText={(inputText) => setText(inputText)}
          value={text}
          placeholderTextColor='gray'
        />

        {text ? (
          <View style={style.qrCodeContainer}>
            <View style={style.codeHeader}>
              <View style={style.text}>
                <IconButton
                  icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                  }
                />
                <Text style={style.headline}>Text</Text>
              </View>
              <View style={style.icons}>
                <RenameComponent />
                <FavoritiesIcon />
              </View>
            </View>
            {/* <View style={styles.code}>
              <QRCode value={text} size={250} />
            </View> */}
            <View>
              <GenerateQRCode text={text} />
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
              <Text style={style.textWritten}>{text}</Text>
            </View>
          </View>
        ) :
          ''
        }
      </View>
    </ScrollView>
  );
};



