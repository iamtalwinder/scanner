import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#212122',
  },
  headline: {
    fontSize: 18,
    color: 'white',
    marginTop: 13,
    fontWeight: 'bold'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    minHeight: 60,
    padding: 5,
    fontSize: 20,
    paddingLeft: 20,
    color: 'gray'
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
    fontSize: 25,
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
  },
})