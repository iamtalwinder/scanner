import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './UrlScreen.styles';

export const URLScreen: React.FC = () => {
  const [text, setText] = React.useState('http://');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Feather name='link-2' size={24} color='white' />
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