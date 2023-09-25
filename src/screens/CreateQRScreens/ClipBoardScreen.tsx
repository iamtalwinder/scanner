import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export const ClipboardScreen: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Entypo name='text' size={24} color='white' />
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#212122',
  },
  headline: {
    fontSize: 18,
    color: 'white'
  },
  title: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 7
  },
  textarea: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    fontSize: 16,
    minHeight: 100,
    textAlign: 'left',
    marginTop: 0,
    padding: 5,
    paddingLeft: 20,
    textAlignVertical: 'top',
  },
})


