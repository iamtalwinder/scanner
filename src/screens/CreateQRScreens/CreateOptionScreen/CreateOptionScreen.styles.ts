import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemName: {
    color: 'white',
  },
  textarea: {
    backgroundColor: 'white',
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: '#212122',
  },
  button: {
    marginVertical: 5,
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 0,
    backgroundColor: '#050301',
    alignItems: 'flex-start',
    gap: 30,
    display: 'flex',
    color: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  types: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15,
  },
});