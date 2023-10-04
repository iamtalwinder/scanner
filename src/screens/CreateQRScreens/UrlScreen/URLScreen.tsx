import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './UrlScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';

export const URLScreen: React.FC = () => {
  const [text, setText] = React.useState('http://');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <IconButton
          icon={() => <Icons name={IconEnum.link2} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
          }
        />
        <Text style={styles.headline}>Url</Text>
      </View>
      <View>
        <TextInput
          value={text}
          style={styles.input}
          defaultValue='http://'
          onChangeText={text => setText(text)}
          placeholderTextColor='white'
        />
      </View>
    </View>
  );

};