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
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    fontSize: 16,
    minHeight: 100,
    textAlign: 'left',
    marginTop: 0,
    padding: 5,
    paddingLeft: 20,
    textAlignVertical: 'top',
  },
})