import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    code: {
      backgroundColor: theme.colors.background,
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10
    },
  })
}
