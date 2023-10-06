import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './ClipBoardScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';

export const ClipboardScreen: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
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
    </View>
  );
};



