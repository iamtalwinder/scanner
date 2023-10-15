import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122',
  },
  container: {
    flex: 1,
    backgroundColor: '#212122',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10
  },
  headline: {
    color: 'white',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15
  },
  share: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  },
  content: {
    display: 'flex',
    color: 'white',
    fontSize: 14
  },
  doneIcon: {
    marginTop: 15,
    marginLeft: 10
  },
  formContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#212122',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingRight: 10,
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
    padding: 5,
    paddingLeft: 20,
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
