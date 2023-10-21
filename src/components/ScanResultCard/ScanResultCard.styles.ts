import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    card: {
      paddingBottom: 5,
      backgroundColor: '#050301',
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
      marginLeft: 0
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
    mainContainer: {
      flex: 1,
      backgroundColor: '#212122',
    },
    typeName: {
      color: theme.colors.onPrimary
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#212122'
    },
    text: {
      color: theme.colors.onPrimary,
      fontSize: 22
    },
    textView: {
      backgroundColor: 'black',
      padding: 15,
      width: '100%',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 40,
      gap: 20,
      justifyContent: 'flex-start',
      textAlign: 'left',
      width: '100%',
      marginLeft: 20
    },
    divider: {
      borderBottomWidth: 1,
      color: theme.colors.onPrimary,
      height: 1,
      marginTop: 5,
      borderBottomColor: 'white'
    },
    iconText: {
      color: theme.colors.onPrimary,
      fontSize: 16,
      textAlign: 'center'
    },
    barcodeIcon: {
      marginTop: 50,
      backgroundColor: 'black',
      padding: 5
    },
    iconContainer: {
      alignItems: 'center',
      marginRight: 20,
    }
  })
};