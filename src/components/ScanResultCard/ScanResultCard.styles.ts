import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
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
    width: '100%',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    gap: 20,
    justifyContent: 'flex-start',
    textAlign: 'left',
    width: '100%',
    marginLeft: 5
  },
  divider: {
    borderBottomWidth: 1,
    color: 'white',
    height: 1,
    marginTop: 5,
    borderBottomColor: 'white'
  },
  iconText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  barcodeIcon: {
    marginTop: 50,
    backgroundColor: 'black',
    padding: 5
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: 20,
  }
});