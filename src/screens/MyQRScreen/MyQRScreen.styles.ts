import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
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
    gap: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
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
    textAlignVertical: 'top',
  },
});
