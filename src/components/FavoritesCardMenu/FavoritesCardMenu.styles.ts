import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    item: {
      marginTop: 50,
      position: 'absolute',
      width: '40%',
      right: 0,
      marginBottom: 0,
      paddingBottom: 0,
      backgroundColor: theme.colors.darkBackgroundColor,
    },
    menuItem: {
      backgroundColor: theme.colors.darkBackgroundColor
    }
  })
};
