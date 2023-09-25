import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212122',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10
  },
  headline: {
    display: 'flex',
    gap: 15,
    flexDirection: 'row',
  },
  heading: {
    color: 'white'
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
  },
  doneIcon: {
    margin: 10
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
