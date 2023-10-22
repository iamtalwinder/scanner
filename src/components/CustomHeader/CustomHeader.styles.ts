import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'violet',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.colors.onPrimary
    },
    item: {
      backgroundColor: '#333333',
      marginTop: 50,
    },
    leftComponent: {
      flex: 1,
      color: theme.colors.onPrimary
    },
    centerComponent: {
      flex: 2,
    },
    rightComponent: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 20
    },
  })
};
