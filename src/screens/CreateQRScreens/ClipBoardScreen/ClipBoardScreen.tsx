import React, { useCallback } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { styles } from './ClipBoardScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useThemedStyles } from '../../../hooks';
import { useHeaderAction } from '../../../context/HeaderActionContext';
import { SubmitComponent } from '../../../components';

type FormData = {
  text: string;
}

const validationSchema = yup.object<FormData>().shape({
  text: yup.string().required('Text is required')
});

type Props = {
  navigation: StackNavigationProp<any>;
};

export const ClipboardScreen: React.FC<Props> = ({navigation}) => {
  const style = useThemedStyles(styles);

  const { setActions, resetActions } = useHeaderAction();

  const { control, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchCopiedText = async () => {
        const textFromClipboard = await Clipboard.getStringAsync();
        setValue('text', textFromClipboard);
      };

      fetchCopiedText();
      setActions(<SubmitComponent />);

      return () => {
        resetActions();
      }
    }, [setActions, resetActions])
  );

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
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={style.textarea}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              multiline={true}
              numberOfLines={8}
              placeholder='Text'
              placeholderTextColor='gray'
            />
          )}
          name="text"
          defaultValue=""
        />
        {formState.errors.text && <Text style={{ color: 'red' }}>{formState.errors.text.message}</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        {/*
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
            <View>
              <GenerateQRCode text={text} />
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
        } */}
      </View>
    </ScrollView>
  );
};



