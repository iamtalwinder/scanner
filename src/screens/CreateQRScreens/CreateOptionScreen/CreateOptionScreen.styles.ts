import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    itemName: {
      color: theme.colors.onPrimary,
    },
    textarea: {
      backgroundColor: 'white',
      padding: 10,
    },
    container: {
      flex: 1,
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 5,
      backgroundColor: theme.colors.backgroundColorMain,
    },
    button: {
      marginVertical: 5,
      marginBottom: 0,
      marginTop: 0,
      paddingTop: 6,
      paddingBottom: 6,
      borderRadius: 0,
      backgroundColor: '#050301',
      alignItems: 'flex-start',
      gap: 30,
      display: 'flex',
      color: theme.colors.onPrimary,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    title: {
      color: theme.colors.onPrimary,
      fontSize: 20,
      marginLeft: 10,
      marginBottom: 10,
    },
    types: {
      color: theme.colors.onPrimary,
      fontSize: 16,
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 15,
    },
  })
};