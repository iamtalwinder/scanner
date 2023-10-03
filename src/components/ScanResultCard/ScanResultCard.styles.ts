import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginTop: 15,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeStamp: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    color: 'white'
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122',
  },
  typeName: {
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212122'
  },
  text: {
    color: 'white',
    fontSize: 22
  },
  textView: {
    backgroundColor: 'black',
    padding: 15,
    marginTop: 10,
    width: '100%',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  }
});