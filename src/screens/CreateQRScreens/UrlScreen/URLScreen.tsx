import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './UrlScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { RenameComponent } from '../../../components/Rename';
import { StarOutlineComponent } from '../../../components/StarOutline/StarOutline';
import QRCode from 'react-native-qrcode-svg';
import { ScrollView } from 'react-native-gesture-handler';

export const URLScreen: React.FC = () => {
  const [url, setUrl] = React.useState('');

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.link2} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={styles.headline}>URL</Text>
        </View>
        <View>
          <TextInput
            value={url}
            style={styles.input}
            // defaultValue='http://'
            onChangeText={url => setUrl(url)}
            placeholderTextColor='gray'
          />
          {url ? (
            <View style={styles.qrCodeContainer}>
              <View style={styles.codeHeader}>
                <View style={styles.text}>
                  <IconButton
                    icon={() => <Icons name={IconEnum.link2} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                    }
                  />
                  <Text style={styles.headline}>URL</Text>
                </View>
                <View style={styles.icons}>
                  <RenameComponent />
                  <StarOutlineComponent />
                </View>
              </View>
              <View style={styles.code}>
                <QRCode value={url} size={250} />
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
                <Text style={styles.textWritten}>{url}</Text>
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