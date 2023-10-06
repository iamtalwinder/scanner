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
  textarea: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    fontSize: 20,
    minHeight: 300,
    maxHeight: 350,
    textAlign: 'left',
    marginTop: 0,
    padding: 5,
    paddingLeft: 20,
    paddingTop: 20,
    textAlignVertical: 'top',
  },
})