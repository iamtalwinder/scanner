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
    gap: 15,
    fontSize: 18,
    color: 'white',
    flexDirection: 'row',
    marginTop: 13
  },
  formContainer: {
    backgroundColor: '#212122',
  },
  input: {
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
});