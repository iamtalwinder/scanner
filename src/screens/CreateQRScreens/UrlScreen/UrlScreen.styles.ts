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
  }
})