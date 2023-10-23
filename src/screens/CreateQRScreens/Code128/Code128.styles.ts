import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flex: 1,
      backgroundColor: theme.colors.backgroundColorMain,
      padding: 5
    }
  })
};