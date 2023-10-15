import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212122',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
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
    display: 'flex',
    fontSize: 18,
    color: 'white',
    flexDirection: 'row',
    marginTop: 13,
    fontWeight: 'bold'
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
    color: 'white',
    textAlignVertical: 'center',
  },
  textarea: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    minHeight: 60,
    padding: 5,
    fontSize: 16,
    paddingLeft: 20,
    color: 'white',
    marginBottom: 15,
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  textWritten: {
    color: 'white',
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
});