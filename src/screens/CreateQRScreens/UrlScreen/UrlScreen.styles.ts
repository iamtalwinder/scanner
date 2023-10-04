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
    marginTop: 13
  },
  title: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 7
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    minHeight: 50,
    padding: 5,
    color: 'white'
  }
})