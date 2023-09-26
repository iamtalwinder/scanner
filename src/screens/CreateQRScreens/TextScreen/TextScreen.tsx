import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './TextScreen.styles';
import { ICON_SIZE_XL } from '../../../components/Icons';

export const TextScreen: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Entypo name='text' size={ICON_SIZE_XL} color='white' />
        <Text style={styles.headline}>Text</Text>
      </View>
      <TextInput
        style={styles.textarea}
        multiline={true}
        numberOfLines={8}
        placeholder='Text'
        onChangeText={(inputText) => setText(inputText)}
        value={text}
        placeholderTextColor='white'
      />
    </View>
  );
};

