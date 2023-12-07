import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
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
import { ScannedItemQRCodeTypeEnum } from '../../../context/ScannedItemsContext';

type FormData = {
  text: string;
}

type DataWithType = {
  type: ScannedItemQRCodeTypeEnum.Url | ScannedItemQRCodeTypeEnum.Email |
  ScannedItemQRCodeTypeEnum.Phone | ScannedItemQRCodeTypeEnum.Text | ScannedItemQRCodeTypeEnum.Product;
  data: any;
};

const validationSchema = yup.object<FormData>().shape({
  text: yup.string().required('Text is required')
});

type Props = {
  navigation: StackNavigationProp<any>;
};

export const ClipboardScreen: React.FC<Props> = ({ navigation }) => {
  const style = useThemedStyles(styles);

  const { setActions, resetActions } = useHeaderAction();

  const { control, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: FormData) => {
    const urlData: DataWithType = {
      type: ScannedItemQRCodeTypeEnum.Url,
      data: data,
    };
    navigation.navigate('QRCodeResultScreen', { data: urlData });
    console.log('screen-data', data.text);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchCopiedText = async () => {
        const textFromClipboard = await Clipboard.getStringAsync();
        setValue('text', textFromClipboard);
      };

      fetchCopiedText();
      setActions(<SubmitComponent onPress={handleSubmit(onSubmit)} />);

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
          <Text style={style.headline}>{ScannedItemQRCodeTypeEnum.Text}</Text>
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
          name='text'
          defaultValue=''
        />
        {formState.errors.text && <Text style={{ color: 'red' }}>{formState.errors.text.message}</Text>}

      </View>
    </ScrollView>
  );
};



