import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'violet',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#333333',
    marginTop: 50,
  },
  leftComponent: {
    flex: 1,
  },
  centerComponent: {
    flex: 2,
  },
  rightComponent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginRight: 10
  },
});
