import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212122',
  },
  card: {
    marginVertical: 5,
    borderRadius: 0,
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: 5,
    backgroundColor: '#050301',
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 6
  },
  barIcon: {
    marginTop: 15,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10
  },
  rightComponent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginRight: 30
  },
  cardDate: {
    gap: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleCss: {
    fontWeight: 'bold',
    fontSize: 20
  },
  subtitle: {
    color: 'white',
  },
  cardPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});