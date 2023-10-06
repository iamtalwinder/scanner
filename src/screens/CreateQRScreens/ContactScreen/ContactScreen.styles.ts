import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    color: 'white',
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
    textAlignVertical: 'center',
  },
});