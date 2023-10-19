import React from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { styles } from './TextScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { RenameComponent } from '../../../components/Rename';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';

export const TextScreen: React.FC = () => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');

  const handleInputChange = (inputText: any) => {
    setText(inputText);
    setError('');
  };

  const handleBlur = () => {
    if (text.trim() === '') {
      setError('This field is required');
    }
  };

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
          value={text}
          style={error ? styles.errorInput : styles.textarea}
          multiline={true}
          numberOfLines={8}
          placeholder='Text'
          // onChangeText={(inputText) => setText(inputText)}
          onChangeText={handleInputChange}
          placeholderTextColor='gray'
          onBlur={handleBlur}
        />
      <View style={styles.button}>
        <Button onPress={handleBlur} title='Submit'/>
      </View>

        {error ?
          <TextInput
            style={styles.errorText}
            multiline={true}
            numberOfLines={8}
          >
            {error}
          </TextInput>
          : null
        }

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
            <View style={styles.code}>
              <QRCode value={text} size={250} />
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

