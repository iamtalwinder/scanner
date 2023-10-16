import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212122'
  },
  card: {
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
  typeName: {
    color: 'white'
  },
  scannerContainer: {
    flex: 1,
    width: '100%',
  },
  marker: {
    borderColor: '#FFF',
  },
  scanResultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFF',
  },
  scanResultText: {
    fontWeight: 'bold',
  },
});