import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const URLScreen: React.FC = () => {
  const [text, setText] = React.useState('http://');
  const permanentPrefix = 'https://';
  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Feather name="link-2" size={24} color="white" />
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
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    minHeight: 50,
    padding: 5
  }
})