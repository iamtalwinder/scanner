import React from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { styles } from './TextScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { RenameComponent } from '../../../components/Rename';
import { FavoritiesIcon } from '../../../components/StarOutline/StarOutline';
import { useThemedStyles } from '../../../hooks';

export const TextScreen: React.FC = () => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');
  const style = useThemedStyles(styles);

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
    <ScrollView style={style.mainContainer}>
      <View style={style.mainContainer}>
        <View style={style.title}>
          <IconButton
            icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={style.headline}>Text</Text>
        </View>
        <TextInput
          value={text}
          style={error ? style.errorInput : style.textarea}
          multiline={true}
          numberOfLines={8}
          placeholder='Text'
          // onChangeText={(inputText) => setText(inputText)}
          onChangeText={handleInputChange}
          placeholderTextColor='gray'
          onBlur={handleBlur}
        />
        <View style={style.button}>
          <Button onPress={handleBlur} title='Submit' />
        </View>

        {error ?
          <TextInput
            style={style.errorText}
            multiline={true}
            numberOfLines={8}
          >
            {error}
          </TextInput>
          : null
        }

        {text ? (
          <View style={style.qrCodeContainer}>
            <View style={style.codeHeader}>
              <View style={style.text}>
                <IconButton
                  icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
                  }
                />
                <Text style={style.headline}>Text</Text>
              </View>
              <View style={style.icons}>
                <RenameComponent />
                <FavoritiesIcon />
              </View>
            </View>
            <View style={style.code}>
              <QRCode value={text} size={250} />
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
              <Text style={style.textWritten}>{text}</Text>
            </View>
          </View>
        ) :
          ''
        }
      </View>
    </ScrollView>
  );
};

