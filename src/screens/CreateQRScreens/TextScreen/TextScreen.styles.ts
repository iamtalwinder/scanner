import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 5,
      backgroundColor: theme.colors.backgroundColorMain,
    },
    headline: {
      fontSize: 18,
      color: theme.colors.onPrimary,
      marginTop: 13,
      fontWeight: 'bold'
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
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
    },
    textarea: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      fontSize: 20,
      minHeight: 300,
      maxHeight: 350,
      textAlign: 'left',
      marginTop: 0,
      padding: 5,
      paddingLeft: 20,
      paddingTop: 20,
      color: theme.colors.onPrimary,
      textAlignVertical: 'top',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
    },
    code: {
      backgroundColor: theme.colors.background,
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
      fontSize: 25,
      marginLeft: 30,
      marginTop: 30,
      marginBottom: 30
    },
    errorInput: {
      borderColor: 'red',
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 8,
      fontSize: 20,
      minHeight: 300,
      maxHeight: 350,
      textAlign: 'left',
      marginTop: 0,
      padding: 5,
      paddingLeft: 20,
      paddingTop: 20,
      color: theme.colors.onPrimary,
      textAlignVertical: 'top',
    },
    errorText: {
      color: 'red',
      fontSize: 20
    },
    button: {
      marginTop: 15
    }
  })
};