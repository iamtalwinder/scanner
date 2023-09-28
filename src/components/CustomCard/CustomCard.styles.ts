import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: 5,
    backgroundColor: '#050301',
    width: '100%',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 5,
    marginLeft: 0
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeStamp: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row'
  },
});