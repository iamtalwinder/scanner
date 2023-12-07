import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      backgroundColor: theme.colors.backgroundColorMain,
    },
    dateInputs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
    },
    inputFields: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      minHeight: 60,
      padding: 5,
      fontSize: 16,
      paddingLeft: 20,
      color: 'gray',
      marginBottom: 15,
      textAlignVertical: 'center',
    },
    startEndDateInput: {
      minHeight: 60,
      padding: 5,
      fontSize: 20,
      paddingLeft: 20,
      color: theme.colors.onPrimary,
      textAlignVertical: 'center',
    },
    headline: {
      display: 'flex',
      gap: 15,
      fontSize: 18,
      color: theme.colors.onPrimary,
      flexDirection: 'row',
      marginTop: 15
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
    },
    formContainer: {
      backgroundColor: theme.colors.backgroundColorMain,
    },
    dates: {
      display: 'flex',
      flexDirection: 'row'
    },
    calenderContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    timeContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    startTitle: {
      color: theme.colors.onPrimary,
      fontSize: 20
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

