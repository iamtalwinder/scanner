import { useTheme } from 'react-native-paper';

export const useThemedStyles = (styles: (theme: any) => any) => {
  const theme = useTheme();
  return styles(theme);
};