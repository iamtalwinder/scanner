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
    minHeight: 60,
    textAlignVertical: 'center',
  },
});