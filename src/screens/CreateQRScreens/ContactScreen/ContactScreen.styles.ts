import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    title: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
    },
    mainContainer: {
      flex: 1,
      padding: 15,
      backgroundColor: '#212122',
    },
    headline: {
      fontSize: 18,
      color: theme.colors.onPrimary,
      fontWeight: 'bold',
      marginTop: 15
    },
    formContainer: {
      backgroundColor: '#212122',
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingRight: 10,
      fontSize: 16,
      marginBottom: 15,
      padding: 5,
      paddingLeft: 20,
      color: theme.colors.onPrimary,
      textAlignVertical: 'center',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
    },
    code: {
      backgroundColor: 'white',
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10
    },
    qrCodeContainer: {
      marginTop: 15
    },
    commonIcons: {
      gap: 20,
      marginLeft: 20,
      marginTop: 20,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'left',
      justifyContent: 'flex-start',
    },
    iconContainer: {
      alignItems: 'center',
      marginRight: 20,
    },
    iconText: {
      color: theme.colors.onPrimary,
      fontSize: 16,
      textAlign: 'center'
    },
    textWritten: {
      color: theme.colors.onPrimary,
      fontSize: 15,
      marginLeft: 30,
      marginTop: 30,
      marginBottom: 30
    },
    codeHeader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-between'
    },
    text: {
      display: 'flex',
      flexDirection: 'row'
    }
  })
};