import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    eanType: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      minHeight: 60,
      padding: 5,
      fontSize: 16,
      paddingLeft: 20,
      color: theme.colors.onPrimary,
      textAlignVertical: 'center',
    },
    mainContainer: {
      flex: 1,
      display: 'flex',
      padding: 5,
      backgroundColor: theme.colors.backgroundColorMain,
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
    },
    headline: {
      display: 'flex',
      gap: 15,
      fontSize: 18,
      color: theme.colors.onPrimary,
      flexDirection: 'row',
      marginTop: 13
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 5,
      fontSize: 20,
      paddingLeft: 20,
      color: 'gray'
    },
    limit: {
      alignItems: 'flex-end',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
    },
    code: {
      padding: 30,
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,
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
    submitButton: {
      marginTop: 10
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      padding: 30,
      width: '100%',
      height: '50%'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    barcodeWrapper: {
      width: '100%',
    },
    barcode: {
      width: '100%',
      height: 200,
      color: 'black'
    },
    dialog: {
      backgroundColor: 'blue'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: theme.colors.background,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    dialogInput: {
      width: 200,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
  })
};