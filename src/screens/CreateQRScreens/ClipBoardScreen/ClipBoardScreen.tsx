import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { styles } from './ClipBoardScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { RenameComponent } from '../../../components/Rename';
import QRCode from 'react-native-qrcode-svg';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';
import { GenerateQRCode } from '../../../components/QRCodeGenerator/QRCodeGenerator';

export const ClipboardScreen: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={styles.headline}>Text</Text>
        </View>
        <TextInput
          style={styles.textarea}
          multiline={true}
          numberOfLines={8}
          placeholder='Text'
          onChangeText={(inputText) => setText(inputText)}
          value={text}
          placeholderTextColor='gray'
        />

        {text ? (
          <View style={styles.qrCodeContainer}>
            <View style={styles.codeHeader}>
              <View style={styles.text}>
                <IconButton
                  icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                  }
                />
                <Text style={styles.headline}>Text</Text>
              </View>
              <View style={styles.icons}>
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
            <View style={styles.commonIcons}>
              <View style={styles.iconContainer}>
                <IconButton
                  icon={() =>
                    <Icons name={IconEnum.save} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
                />
                <Text style={styles.iconText}>Save</Text>
              </View>
              <View style={styles.iconContainer}>
                <IconButton
                  icon={() =>
                    <Icons name={IconEnum.share} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />}
                />
                <Text style={styles.iconText}>Share</Text>
              </View>
            </View>
            <View>
              <Text style={styles.textWritten}>{text}</Text>
            </View>
          </View>
        ) :
          ''
        }
      </View>
    </ScrollView>
  );
};



