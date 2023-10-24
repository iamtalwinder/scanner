import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    item: {
      marginTop: 50,
      position: 'absolute',
      width: '50%',
      right: 0,
      backgroundColor: theme.colors.darkBackgroundColor
    },
  })
}
