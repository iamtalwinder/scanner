import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    card: {
      marginTop: 0,
      paddingBottom: 5,
      backgroundColor: theme.colors.primary,
      width: '100%',
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoContainer: {
      flex: 1,
    },
    textContainer: {
      flex: 5,
      marginLeft: 0,
      color: theme.colors.onPrimary
    },
    actionsContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    timeStamp: {
      marginRight: 10,
      display: 'flex',
      flexDirection: 'row',
      color: theme.colors.onPrimary
    },
    type: {
      fontWeight: 'bold',
      fontSize: 18,
      color: theme.colors.onPrimary
    },
    typeName: {
      color: theme.colors.onPrimary
    },
    text: {
      color: theme.colors.onPrimary
    }
  })
};
