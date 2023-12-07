import React, { useCallback } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { styles } from './TextScreen.styles';
import { DEFAULT_COLOR, ICON_SIZE_XL, IconEnum, Icons } from '../../../components/Icons';
import { IconButton } from 'react-native-paper';
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
  text: string;
}

type DataWithType = {
  type: ScannedItemQRCodeTypeEnum.Text;
  data: any;
};

const validationSchema = yup.object<FormData>().shape({
  text: yup.string().required('Text is required')
});

type Props = {
  navigation: StackNavigationProp<any>;
};

export const TextScreen: React.FC<Props> = ({ navigation }) => {
  // const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');
  const style = useThemedStyles(styles);

  const { setActions, resetActions } = useHeaderAction();

  const { control, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: FormData) => {
    const urlData: DataWithType = {
      type: ScannedItemQRCodeTypeEnum.Text,
      data: data,
    };
    navigation.navigate('TextQRCodeResultScreen', { data: urlData });
    console.log('screen-data', data.text);
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
            icon={() => <Icons name={IconEnum.text} size={ICON_SIZE_XL} color={DEFAULT_COLOR} />
            }
          />
          <Text style={style.headline}>{ScannedItemQRCodeTypeEnum.Text}</Text>
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                style={error ? style.errorInput : style.textarea}
                multiline={true}
                numberOfLines={8}
                placeholder='Text'
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                placeholderTextColor='gray'
              />
            )}
            name='text'
          />
        </View>
        {formState.errors.text && <Text style={{ color: 'red' }}>{formState.errors.text.message}</Text>}
      </View>
    </ScrollView>
  );
};

