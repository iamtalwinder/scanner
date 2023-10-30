import React, { useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './UrlScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useThemedStyles } from '../../../hooks';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHeaderAction } from '../../../context/HeaderActionContext';
import { SubmitComponent } from '../../../components';
import { ScannedItemQRCodeTypeEnum } from '../../../context/ScannedItemsContext';

type FormData = {
  url: string;
}

type DataWithType = {
  type: ScannedItemQRCodeTypeEnum.Url;
  data: any;
};

const validationSchema = yup.object<FormData>().shape({
  url: yup.string().required('URL is required').url('Invalid URL format'),
});

type Props = {
  navigation: StackNavigationProp<any>;
};

export const URLScreen: React.FC<Props> = ({ navigation }) => {
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
    navigation.navigate('URLResultScreen', { data: urlData });
    console.log('screen-data', data.url);
  };

  useFocusEffect(
    useCallback(() => {
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
            icon={() => <Icons name={IconEnum.link2} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={style.headline}>{ScannedItemQRCodeTypeEnum.Url}</Text>
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                style={style.input}
                defaultValue='http://'
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                placeholderTextColor='white'
              />
            )}
            name='url'
          />
          {formState.errors.url && <Text style={{ color: 'red' }}>{formState.errors.url.message}</Text>}
        </View>
      </View>
    </ScrollView>
  );
};