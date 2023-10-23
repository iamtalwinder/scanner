import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './UrlScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { RenameComponent } from '../../../components/Rename';
import QRCode from 'react-native-qrcode-svg';
import { ScrollView } from 'react-native-gesture-handler';
import { useThemedStyles } from '../../../hooks';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';

export const URLScreen: React.FC = () => {
  const [url, setUrl] = React.useState('');
  const style = useThemedStyles(styles);

  return (
    <ScrollView style={style.mainContainer}>
      <View style={style.mainContainer}>
        <View style={style.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.link2} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={style.headline}>URL</Text>
        </View>
        <View>
          <TextInput
            value={url}
            style={style.input}
            // defaultValue='http://'
            onChangeText={url => setUrl(url)}
            placeholderTextColor='white'
          />
          {url ? (
            <View style={style.qrCodeContainer}>
              <View style={style.codeHeader}>
                <View style={style.text}>
                  <IconButton
                    icon={() => <Icons name={IconEnum.link2} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                    }
                  />
                  <Text style={style.headline}>URL</Text>
                </View>
                <View style={style.icons}>
                  <RenameComponent />
                  <FavoritiesIcon />
                </View>
              </View>
              <View style={style.code}>
                <QRCode value={url} size={250} />
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
                <Text style={style.textWritten}>{url}</Text>
              </View>
            </View>
          ) :
            ''
          }
        </View>
      </View>
    </ScrollView>
  );
};